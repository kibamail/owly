#!/bin/bash

# Script to replace --spacing- with --sp- in all CSS files

echo "Finding all .css files..."

# Find all .css files and replace --spacing- with --sp-
find . -type f -name "*.css" -not -path "*/node_modules/*" -not -path "*/dist/*" | while read -r file; do
  echo "Processing: $file"
  # Use sed to replace --spacing- with --sp-
  # -i '' for macOS (in-place editing without backup)
  sed -i '' 's/--spacing-/--sp-/g' "$file"
done

echo "Done! All --spacing- replaced with --sp- in CSS files."
