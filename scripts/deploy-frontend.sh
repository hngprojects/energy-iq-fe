#!/bin/bash
set -euo pipefail

echo "Starting frontend deployment..."

# Config
RELEASES_DIR="$APP_DIR/releases"
CURRENT_LINK="$APP_DIR/current"
RELEASE_DIR="$RELEASES_DIR/$(date +%Y%m%d%H%M%S)"
KEEP_RELEASES=5

# Prepare new release directory
echo "Preparing release at $RELEASE_DIR..."
mkdir -p "$RELEASE_DIR"

# Extract archive into new release directory
echo "Extracting archive..."
tar -xzf /tmp/energy-iq-fe.tar.gz -C "$RELEASE_DIR"

# Copy env file
echo "Writing .env file..."
ENV_DEST="$RELEASE_DIR/.env"

if [[ "$(realpath "$ENV_FILE_PATH")" != "$(realpath "$ENV_DEST")" ]]; then
  cp "$ENV_FILE_PATH" "$ENV_DEST"
else
  echo "ENV_FILE_PATH is already at $ENV_DEST — skipping copy."
fi

# Install dependencies
echo "Installing dependencies..."
cd "$RELEASE_DIR"
pnpm install --frozen-lockfile

# Build
echo "Building app..."
pnpm build

# Atomic swap
echo "Swapping symlink to new release..."
ln -sfn "$RELEASE_DIR" "$CURRENT_LINK"

# Restart service
echo "Restarting service..."
sudo systemctl restart "$SERVICE_NAME"

# Clean up old releases
echo "Cleaning old releases (keeping last $KEEP_RELEASES)..."
ls -1dt "$RELEASES_DIR"/*/  | tail -n +$((KEEP_RELEASES + 1)) | xargs rm -rf

# Cleanup archive
rm -f /tmp/energy-iq-fe.tar.gz

echo "Deployment complete! Live at: $RELEASE_DIR"
