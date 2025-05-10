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
  eslint-plugin-react-hooks \

echo "📥 Installing all dependencies..."
pnpm install

echo "🧹 Cleaning up git history..."
rm -rf .git

echo "🚀 Initializing new git repository..."
git init

echo "✅ Setup complete! Your Next.js project is ready."