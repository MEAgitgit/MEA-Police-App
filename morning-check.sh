#!/bin/zsh
# Morning demo check for the MEA Police App.
#
# Runs the pre-demo check against the live backend and puts the verdict in a
# macOS notification, so a broken demo is something you learn at breakfast
# rather than in front of a police department. Full output goes to the log.
#
# Reads check-demo.js from the main branch rather than the working copy, so it
# keeps working whichever branch happens to be checked out.
#
# Installed as a launchd job; see com.mea.morning-check.plist.

REPO="$(cd "$(dirname "$0")" && pwd)"
LOG="$HOME/Library/Logs/MEA/demo-check.log"
NODE="$(command -v node || echo /opt/homebrew/bin/node)"
mkdir -p "$(dirname "$LOG")"

{
  echo ""
  echo "════════ $(date '+%A %d %B %Y, %H:%M') ════════"
} >> "$LOG"

SCRIPT="$(mktemp -t mea-check).js"
git -C "$REPO" fetch --quiet origin main 2>/dev/null
if ! git -C "$REPO" show origin/main:check-demo.js > "$SCRIPT" 2>/dev/null; then
  git -C "$REPO" show main:check-demo.js > "$SCRIPT" 2>/dev/null || cp "$REPO/check-demo.js" "$SCRIPT" 2>/dev/null
fi

if [ ! -s "$SCRIPT" ]; then
  echo "Could not read check-demo.js from the repository." >> "$LOG"
  osascript -e 'display notification "Could not read the check script from the repo." with title "MEA Police App" subtitle "Check did not run" sound name "Basso"' 2>/dev/null
  rm -f "$SCRIPT"; exit 2
fi

OUT="$("$NODE" "$SCRIPT" 2>&1)"
CODE=$?
rm -f "$SCRIPT"
echo "$OUT" >> "$LOG"

CLEAN="$(echo "$OUT" | sed $'s/\033\[[0-9;]*m//g')"

if [ $CODE -eq 0 ]; then
  osascript -e 'display notification "All checks passed. Photo, price and dictation are working." with title "MEA Police App" subtitle "Ready to demo"' 2>/dev/null
else
  FAILED="$(echo "$CLEAN" | grep '^  FAIL' | sed 's/^  FAIL  //' | sed 's/  */ /g' | paste -sd ', ' -)"
  osascript -e "display notification \"Failing: ${FAILED}\" with title \"MEA Police App\" subtitle \"DO NOT DEMO\" sound name \"Basso\"" 2>/dev/null
fi

exit $CODE
