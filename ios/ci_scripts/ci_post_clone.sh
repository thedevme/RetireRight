#!/bin/sh
set -e

# Navigate to the root of the repo (ci_scripts is inside ios/)
cd "$CI_PRIMARY_REPOSITORY_PATH"

# Install Node.js using Homebrew (Xcode Cloud has Homebrew pre-installed)
brew install node

# Install JavaScript dependencies
npm install

# Install CocoaPods dependencies
cd ios
pod install