#!/usr/bin/env bash
set -euo pipefail

if [ -f ".nvmrc" ]; then
  NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  if [ -s "$NVM_DIR/nvm.sh" ]; then
    # Load nvm and switch to the project's Node version when available.
    . "$NVM_DIR/nvm.sh"
    nvm use >/dev/null || true
  fi
fi

if ! node -e "process.exit(typeof [].toReversed === 'function' ? 0 : 1)"; then
  current_node="$(node -v 2>/dev/null || echo "unknown")"
  required_node="$(cat .nvmrc 2>/dev/null || echo ">=20")"

  echo "Error: Node ${current_node} is not compatible with this Expo project." >&2
  echo "This project needs Node with Array.prototype.toReversed support." >&2
  echo "Expected version (from .nvmrc): ${required_node}" >&2
  echo "Run: nvm install ${required_node} && nvm use ${required_node}" >&2
  exit 1
fi

npx expo start "$@"
