/* ============================================================
   Original scanned pages — grouped by chapter for the
   minimalist hub → chapter → page navigation.

   Rebuilt from the user's re-taken photos (folders Part1–Part9),
   reordered into correct reading order:
     • within each part, pages were captured back-to-front, so the
       order is the REVERSE of the (timestamp, suffix) filename sort
       — except Part4, captured front-to-back (natural).
     • Part3 was a re-shot duplicate of pp. 29–33 and is omitted.
   Numbered pages 10–86 by printed page number; the back matter
   (pp. 87–147) is a 58-image sequence.
   ============================================================ */
const SCANS = (function () {
  const P = (n) => `assets/pages/p${String(n).padStart(3, "0")}.jpg`;
  const Q = (n) => `assets/pages/q${String(n).padStart(2, "0")}.jpg`;

  const GAP = {}; // pages 10–86 are now complete (missings folder filled 49–51, 56, 63–65)

  function pageItems(a, b) {
    const items = [];
    for (let p = a; p <= b; p++) {
      if (GAP[p]) { items.push({ type: "gap", from: p, to: GAP[p].to, note: GAP[p].note }); p = GAP[p].to; continue; }
      items.push({ type: "page", page: p, src: P(p) });
    }
    return items;
  }

  const groups = [
    { id: "foundations", label: "Ch. 1–4", title: "Foundations", range: "pp. 10–24", color: "#3a5a78",
      blurb: "Task steps, grading, essay types and planning.", items: pageItems(10, 24) },
    { id: "opinion", label: "Ch. 5", title: "Opinion Essay", range: "pp. 25–39", color: "#b4643c",
      blurb: "Agree / disagree — method, models and mistakes.", items: pageItems(25, 39) },
    { id: "bothsides", label: "Ch. 6", title: "Both Sides & Opinion", range: "pp. 40–55", color: "#4a7a52",
      blurb: "Discuss both views, then give your opinion.", items: pageItems(40, 55) },
    { id: "twoquestion", label: "Ch. 7", title: "Two Question Essay", range: "pp. 56–66", color: "#7a5aa0",
      blurb: "Two-part and problem-and-solution questions.", items: pageItems(56, 66) },
    { id: "improving", label: "Ch. 8", title: "Improving Your Score", range: "pp. 67–86", color: "#c08a2e",
      blurb: "Common errors and fixes across all four criteria.", items: pageItems(67, 86) },
    { id: "backmatter", label: "Ch. 9–12", title: "Vocabulary, Extras & Samples", range: "pp. 87–147", color: "#517b8a",
      blurb: "Topic vocabulary, linking words, extras and the sample-essay bank.",
      note: "58 pages in order. (3 pages within this range weren’t captured.)",
      items: Array.from({ length: 58 }, (_, i) => ({ type: "page", seq: true, n: i + 1, src: Q(i + 1) })) },
  ];

  groups.forEach((g) => { g.task = "task2"; });

  // ---- Task 1 (partial: UpGrade — IELTS Academic Writing Task One) ----
  function t1(id, title, color, blurb, labels) {
    const images = labels.map((label, i) => ({ label, src: `assets/task1/${id}_${String(i + 1).padStart(2, "0")}.jpg` }));
    return { id, title, color, blurb, task: "task1", note: null,
      items: images.map((im) => ({ type: "page", label: im.label, src: im.src })) };
  }
  const TASK1 = [
    t1("t1-intro", "Introduction", "#3a5a78", "Rubric, task types & band descriptors.",
      ["p.1", "p.2", "p.3", "p.4", "p.5", "p.6", "p.7", "p.8"]),
    t1("t1-process", "Process & Flowcharts", "#4a7a52", "Process, cycle & flowchart diagrams.",
      ["p.34", "p.35", "p.36", "p.37", "p.38", "p.39", "p.40", "p.41", "p.42", "p.43", "p.44", "p.45", "p.46", "p.47", "Beer process", "Beer · language"]),
    t1("t1-maps", "Maps", "#7a5aa0", "Describing maps & site plans.",
      ["School site · p.48", "Island · task", "Island · model", "Map language"]),
    t1("t1-more", "More Samples", "#c08a2e", "Worked examples: graphs, charts & tables.",
      ["More Samples", "Line graph · task", "Line graph · model", "Goods graph · task", "Goods graph · model", "Goods · language",
       "Multi-chart · task", "Multi-chart · model", "Multi-chart · notes", "Table · task", "Table · model",
       "Expenditure · model", "Expenditure · language", "Age groups · task", "Age groups · model", "Age groups · language"]),
  ];
  TASK1.forEach((g) => groups.push(g));

  groups.forEach((g) => {
    g.images = g.items.filter((it) => it.type === "page");
    g.cover = g.images[0].src;
    g.count = g.images.length;
  });

  const group = (id) => groups.find((g) => g.id === id);
  const has = (page) => groups.some((g) => g.images.some((im) => im.page === page));
  function locate(page) {
    for (const g of groups) { const i = g.images.findIndex((im) => im.page === page); if (i >= 0) return { groupId: g.id, idx: i }; }
    return null;
  }
  const count = groups.reduce((s, g) => s + g.count, 0);
  return { groups, group, has, locate, count };
})();

if (typeof module !== "undefined") module.exports = SCANS;
