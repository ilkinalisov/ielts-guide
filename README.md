# IELTS Writing Task 2 — Study Reader

A clean, searchable web reader for the IELTS Writing Task 2 essay-writing guide,
transcribed from the original scanned book into real text.

## Run it

```bash
cd ielts-guide
./start.sh
```

This serves the site locally **and** opens a public ngrok URL you can share.
Copy the `Public URL` it prints, or open the ngrok dashboard at
http://127.0.0.1:4040 to see it.

### Manual (two terminals)

```bash
# terminal 1 — local server
python3 -m http.server 8000

# terminal 2 — public tunnel
ngrok http 8000
```

Then open the `https://…ngrok…` URL ngrok prints.

## Features

- Full guide transcribed to searchable text (book pages 10–65)
- Sidebar contents with live search (press `/`)
- Reading-progress bar, prev/next navigation, scroll-spy
- Light / dark mode (remembered per browser)
- Responsive — works on phone and desktop
- Model essays and comparison tables styled for study

## What's inside

| Part | Covers |
|------|--------|
| **I — Foundations** | Task sequence, grading criteria, the three essay types, essay structure, planning |
| **II — Opinion essay** | Method, model essays, template, common mistakes |
| **III — Both sides & opinion** | Method, two model essays, template |
| **IV — Two question essay** | Method, model essays, problem-and-solution template |

## Editing the content

All text lives in [`content.js`](content.js) as structured data — edit that file
to fix wording or add sections; the reader re-renders automatically. No build step.

> **Note:** The original scans covered book pages 10–65 (the complete method).
> File (4) holds a further ~50 pages of extra worked model essays by topic
> (culture, talent, tourism, second language, capital punishment, drugs, …),
> which can be added as an *Appendix* part in `content.js` when needed.
