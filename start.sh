#!/usr/bin/env bash
# ------------------------------------------------------------
# IELTS Writing Task 2 — reader launcher
# Serves the site locally and exposes it publicly via ngrok.
# Usage:  ./start.sh            (default port 8000)
#         PORT=8080 ./start.sh
# ------------------------------------------------------------
set -euo pipefail
cd "$(dirname "$0")"
PORT="${PORT:-8000}"

cleanup() {
  echo ""
  echo "Shutting down…"
  [[ -n "${SERVER_PID:-}" ]] && kill "$SERVER_PID" 2>/dev/null || true
  [[ -n "${NGROK_PID:-}"  ]] && kill "$NGROK_PID"  2>/dev/null || true
}
trap cleanup EXIT INT TERM

# 1) Local static server
echo "▶ Serving on http://localhost:$PORT"
python3 -m http.server "$PORT" >/dev/null 2>&1 &
SERVER_PID=$!
sleep 1

# 2) Public tunnel
if command -v ngrok >/dev/null 2>&1; then
  echo "▶ Opening ngrok tunnel…"
  ngrok http "$PORT" --log=stdout >/tmp/ielts-ngrok.log 2>&1 &
  NGROK_PID=$!
  # wait for the public URL to appear
  for i in {1..20}; do
    URL=$(curl -s http://127.0.0.1:4040/api/tunnels 2>/dev/null \
      | python3 -c "import sys,json;\
d=json.load(sys.stdin);\
print(next((t['public_url'] for t in d.get('tunnels',[]) if t['public_url'].startswith('https')), ''))" 2>/dev/null || true)
    [[ -n "$URL" ]] && break
    sleep 0.5
  done
  echo ""
  echo "  ┌─────────────────────────────────────────────────────────"
  echo "  │  Public URL:  ${URL:-<starting… check http://127.0.0.1:4040>}"
  echo "  │  Local URL:   http://localhost:$PORT"
  echo "  │  ngrok panel: http://127.0.0.1:4040"
  echo "  └─────────────────────────────────────────────────────────"
else
  echo "ngrok not found — install with:  brew install ngrok"
  echo "Local URL: http://localhost:$PORT"
fi

echo ""
echo "Press Ctrl+C to stop."
wait
