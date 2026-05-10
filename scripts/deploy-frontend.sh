#!/bin/bash
set -euo pipefail

echo "Starting frontend deployment to $APP_DIR..."

# Create app directory if it doesn't exist
mkdir -p "$APP_DIR"

# Extract uploaded archive into app directory
echo "Extracting archive..."
tar -xzf /tmp/energy-iq-fe.tar.gz -C "$APP_DIR"

# Move into app directory
cd "$APP_DIR"

# Copy env file into place
echo "Writing .env file..."
cp "$ENV_FILE_PATH" "$APP_DIR/.env"

# Install dependencies
echo "Installing dependencies..."
pnpm install --frozen-lockfile

# Build the Next.js app
echo "Building app..."
pnpm build

# Restart the service
echo "Restarting service..."
sudo systemctl restart "$SERVICE_NAME"

# Clean up archive
rm -f /tmp/energy-iq-fe.tar.gz

echo "Frontend deployment complete!"