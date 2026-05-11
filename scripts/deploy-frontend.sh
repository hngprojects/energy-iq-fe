#!/bin/bash
set -euo pipefail

echo "Starting frontend deployment to $APP_DIR..."

RELEASES_DIR="$APP_DIR/releases"
CURRENT_LINK="$APP_DIR/current"
RELEASE_DIR="$RELEASES_DIR/$(date +%Y%m%d%H%M%S)"
KEEP_RELEASES=5

# Determine archive name from env
ARCHIVE_NAME="${ARCHIVE:-/tmp/energy-iq-fe-staging.tar.gz}"

echo "Preparing release directory..."
mkdir -p "$RELEASE_DIR"

echo "Extracting archive..."
tar -xzf "$ARCHIVE_NAME" -C "$RELEASE_DIR"

echo "Writing .env file..."
ENV_DEST="$RELEASE_DIR/.env"
if [[ "$(realpath "$ENV_FILE_PATH")" != "$(realpath "$ENV_DEST")" ]]; then
  cp "$ENV_FILE_PATH" "$ENV_DEST"
else
  echo "Skipping copying same file."
fi

echo "Installing dependencies..."
cd "$RELEASE_DIR"
pnpm install --frozen-lockfile

echo "Building app..."
pnpm build

echo "Swapping symlink..."
ln -sfn "$RELEASE_DIR" "$CURRENT_LINK"

echo "Restarting PM2 service: $SERVICE_NAME..."
if pm2 list | grep -q "$SERVICE_NAME"; then
  pm2 reload "$SERVICE_NAME" --update-env
else
  pm2 start pnpm \
    --name "$SERVICE_NAME" \
    --cwd "$CURRENT_LINK" \
    -- start
fi
pm2 save

echo "Cleaning old releases..."
ls -1dt "$RELEASES_DIR"/*/  | tail -n +$((KEEP_RELEASES + 1)) | xargs rm -rf

rm -f "$ARCHIVE_NAME"

echo "Deployment complete! Live at: $RELEASE_DIR"