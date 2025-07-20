#!/bin/bash

echo "📦 Updating Next.js dependencies..."
pnpm update --latest \
  react \
  react-dom \
  next

pnpm update --latest \
  typescript \
  @types/node \
  @types/react \
  @types/react-dom \
  @tailwindcss/postcss \
  tailwindcss \
  eslint \
  eslint-config-next \
  @eslint/eslintrc \
  @next/eslint-plugin-next \
  eslint-plugin-react-hooks

echo "📥 Installing all dependencies..."
pnpm install

echo "🧹 Cleaning up git history..."
rm -rf .git

echo "✅ Setup complete! Your Next.js project is ready."

pnpm approve-builds

echo "🗃️ Do you want to initialize a new git repository? (y/n)"
read -r init_git
if [ "$init_git" = "y" ]; then
  echo "🚀 Initializing new git repository..."
  git init
else
  echo "❌ Git repository not initialized."
fi

SCRIPT_PATH="$(realpath "$0")"
SCRIPT_NAME="$(basename "$SCRIPT_PATH")"

if [ "$SCRIPT_NAME" = "setup.sh" ]; then
  echo "🗑️ Do you want to delete this setup script (setup.sh)? (y/n)"
  read -r delete_script
  if [ "$delete_script" = "y" ]; then
    rm -- "$SCRIPT_PATH"
    echo "✅ Setup script deleted."
  else
    echo "❌ Setup script not deleted."
  fi
else
  echo "⚠️ Script name is not 'setup.sh'; not deleting."
fi
