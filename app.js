/* ============================================================
   IELTS Writing Task 2 — multipage hash router
   ============================================================ */
(function () {
  "use strict";
  const app = document.getElementById("app");
  const el = (t, c) => { const e = document.createElement(t); if (c) e.className = c; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const partById = (id) => GUIDE.parts.find((p) => p.id === id);
  const secById = (part, id) => part.sections.find((s) => s.id === id);

  /* ---------- icons ---------- */
  const IC = {
    structure: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    opinion: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-11.9 7.8L3 21l1.7-6.1A8.5 8.5 0 1 1 21 11.5Z"/><path d="M9 10.5h6M9 13.5h4"/></svg>',
    balance: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 6h14M7 6l-3.5 7a3.5 3.5 0 0 0 7 0L7 6ZM17 6l-3.5 7a3.5 3.5 0 0 0 7 0L17 6ZM7 21h10"/></svg>',
    question: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9.1 9a3 3 0 1 1 4.5 2.6c-.9.5-1.6 1.2-1.6 2.4M12 17.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
    samples: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v5h5M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-4-5Z"/><path d="M8.5 12.5h7M8.5 15.5h7M8.5 9.5h2"/></svg>',
    template: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 8.5h17M8.5 8.5v12"/></svg>',
    home: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5M5.5 10v9.5h13V10"/></svg>',
    arr: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  /* ---------- hub tile config ---------- */
  const TILES = [
    { key: "foundations", route: "#/p/foundations", name: "General Structure", icon: IC.structure,
      color: "#3a5a78", glow: "rgba(58,90,120,.14)",
      desc: "The method behind every essay — task steps, grading, structure and planning." },
    { key: "opinion", route: "#/p/opinion", name: "Opinion", icon: IC.opinion,
      color: "#b4643c", glow: "rgba(180,100,60,.16)",
      desc: "Agree / disagree essays — state a clear position and defend it." },
    { key: "bothsides", route: "#/p/bothsides", name: "Both Sides", icon: IC.balance,
      color: "#4a7a52", glow: "rgba(74,122,82,.15)",
      desc: "Discuss both views neutrally, then give your own opinion." },
    { key: "twoquestion", route: "#/p/twoquestion", name: "Two Question", icon: IC.question,
      color: "#7a5aa0", glow: "rgba(122,90,160,.15)",
      desc: "Two-part and problem-and-solution questions." },
    { key: "samples", route: "#/samples", name: "Essay Samples", icon: IC.samples,
      color: "#c08a2e", glow: "rgba(192,138,46,.16)",
      desc: "Every worked model essay, gathered in one place." },
    { key: "templates", route: "#/templates", name: "Templates", icon: IC.template,
      color: "#517b8a", glow: "rgba(81,123,138,.15)",
      desc: "Reusable sentence templates for each essay type." }
  ];
  const colorOf = (key) => (TILES.find((t) => t.key === key) || {}).color || "var(--accent)";
  const iconOf = (key) => (TILES.find((t) => t.key === key) || {}).icon || "";

  /* ---------- derived collections ---------- */
  const ALL_ESSAYS = [];
  GUIDE.parts.forEach((part) => part.sections.forEach((sec) =>
    sec.blocks.forEach((b) => { if (b.t === "essay") ALL_ESSAYS.push({ part, sec, block: b }); })));
  const TEMPLATE_SECS = [];
  GUIDE.parts.forEach((part) => part.sections.forEach((sec) => {
    if (/template/i.test(sec.title)) TEMPLATE_SECS.push({ part, sec });
  }));

  /* ---------- search index ---------- */
  const INDEX = [];
  GUIDE.parts.forEach((part) => part.sections.forEach((sec) => {
    INDEX.push({
      part, sec,
      route: `#/p/${part.id}/${sec.id}`,
      num: sec.num && sec.num !== "◈" ? sec.num : "◈",
      text: (sec.title + " " + sec.blocks.map(blockText).join(" ")).toLowerCase()
    });
  }));
  function blockText(b) {
    let t = "";
    ["html", "text", "prompt"].forEach((k) => { if (b[k]) t += " " + b[k]; });
    if (b.items) t += " " + b.items.join(" ");
    if (b.paras) t += " " + b.paras.join(" ");
    if (b.rows) t += " " + b.rows.flat().join(" ");
    if (b.head) t += " " + b.head.join(" ");
    return t.replace(/<[^>]+>/g, " ");
  }

  /* ============================================================
     BLOCK RENDERING
     ============================================================ */
  function renderBlock(b) {
    switch (b.t) {
      case "p": { const e = el("p", "blk-p"); e.innerHTML = b.html; return e; }
      case "h": { const e = el("h3", "blk-h"); e.textContent = b.text; return e; }
      case "model": { const e = el("div", "blk-model"); e.innerHTML = b.html; return e; }
      case "note": { const e = el("p", "blk-note"); e.innerHTML = b.html; return e; }
      case "callout": {
        const tip = /tip/i.test(b.title || "");
        const e = el("div", "blk-callout" + (tip ? " blk-callout--tip" : ""));
        const t = el("div", "co-title"); t.textContent = b.title || "Note";
        const body = el("div", "co-body"); body.innerHTML = b.html;
        e.append(t, body); return e;
      }
      case "list": { const e = el("ul", "blk-list"); b.items.forEach((i) => { const li = el("li"); li.innerHTML = i; e.appendChild(li); }); return e; }
      case "steps": {
        const e = el("ol", "blk-steps");
        if (b.start) e.style.counterReset = "step " + (b.start - 1);
        b.items.forEach((i) => { const li = el("li"); li.innerHTML = i; e.appendChild(li); });
        return e;
      }
      case "table": {
        const wrap = el("div", "blk-tablewrap"), tbl = el("table", "blk-table");
        if (b.head) { const th = el("thead"), tr = el("tr"); b.head.forEach((h) => { const c = el("th"); c.innerHTML = h; tr.appendChild(c); }); th.appendChild(tr); tbl.appendChild(th); }
        const tb = el("tbody");
        b.rows.forEach((row) => { const tr = el("tr"); row.forEach((c) => { const td = el("td"); td.innerHTML = c; tr.appendChild(td); }); tb.appendChild(tr); });
        tbl.appendChild(tb); wrap.appendChild(tbl); return wrap;
      }
      case "essay": {
        const e = el("div", "blk-essay");
        const p = el("div", "essay-prompt");
        const tag = el("span", "ep-tag"); tag.textContent = "Task";
        const pp = el("p"); pp.textContent = b.prompt; p.append(tag, pp);
        const body = el("div", "essay-body");
        b.paras.forEach((x) => { const par = el("p"); par.innerHTML = x; body.appendChild(par); });
        e.append(p, body);
        if (b.words) { const f = el("div", "essay-foot"); const w = el("span", "essay-words"); w.textContent = b.words + " words"; f.appendChild(w); e.appendChild(f); }
        return e;
      }
      case "diagram": return renderDiagram();
      default: return el("div");
    }
  }
  function renderDiagram() {
    const w = el("div", "diagram-flow");
    const a = el("div", "df-box"); a.innerHTML = "<h4>Introduction</h4><p>General statement</p><p class='df-topic'>Specific statement</p>";
    const ar1 = el("div", "df-arrow"); ar1.textContent = "→";
    const b = el("div", "df-box"); b.innerHTML = "<h4>Body</h4><p class='df-topic'>Topic sentence (Topic + Point)</p><p>Supporting sentences</p><p class='df-topic'>Topic sentence (Topic + Point)</p><p>Supporting sentences</p><p class='df-note'>An opinion essay may have a third paragraph</p>";
    const ar2 = el("div", "df-arrow"); ar2.textContent = "→";
    const c = el("div", "df-box"); c.innerHTML = "<h4>Conclusion</h4><p>Summary of main points</p><p>Final statement</p>";
    w.append(a, ar1, b, ar2, c); return w;
  }

  /* ============================================================
     SHARED UI
     ============================================================ */
  function topbar(crumbs) { // crumbs: [{label, route}] last = current
    const bar = el("div", "topbar");
    const inner = el("div", "topbar-inner");
    const home = el("button", "home-btn"); home.innerHTML = IC.home; home.title = "Home";
    home.addEventListener("click", () => go("#/"));
    const crumb = el("nav", "crumb");
    crumbs.forEach((c, i) => {
      const last = i === crumbs.length - 1;
      if (last) { const s = el("span", "cur"); s.textContent = c.label; crumb.appendChild(s); }
      else {
        const a = el("a"); a.textContent = c.label; a.addEventListener("click", () => go(c.route)); crumb.appendChild(a);
        const sep = el("span", "sep"); sep.textContent = "›"; crumb.appendChild(sep);
      }
    });
    inner.append(home, crumb); bar.appendChild(inner); return bar;
  }

  /* ============================================================
     VIEWS
     ============================================================ */
  function viewHub() {
    const page = el("div", "page hub");
    const mark = el("div", "hub-mark"); mark.textContent = "✍︎";
    const kicker = el("div", "hub-kicker"); kicker.textContent = "IELTS Writing · Task 2";
    const h1 = el("h1", "hub-title"); h1.textContent = "The Essay Writing Guide";
    const sub = el("p", "hub-sub"); sub.textContent = "Choose a section to begin.";
    page.append(mark, kicker, h1, sub);

    const grid = el("div", "tiles");
    TILES.forEach((t) => {
      let count = "";
      if (t.key === "samples") count = ALL_ESSAYS.length + " essays";
      else if (t.key === "templates") count = TEMPLATE_SECS.length + " templates";
      else { const p = partById(t.key); count = p ? p.sections.length + " sections" : ""; }
      const tile = el("button", "tile");
      tile.style.setProperty("--tile-color", t.color);
      tile.style.setProperty("--tile-glow", t.glow);
      tile.innerHTML =
        `<span class="tile-num">${esc(count)}</span>
         <span class="tile-ico">${t.icon}</span>
         <span class="tile-name">${esc(t.name)}</span>
         <span class="tile-desc">${esc(t.desc)}</span>
         <span class="tile-cta">Open ${IC.arr.replace('<svg', '<svg class="arr"')}</span>`;
      tile.addEventListener("click", () => go(t.route));
      grid.appendChild(tile);
    });
    page.appendChild(grid);
    const foot = el("div", "hub-foot"); foot.textContent = "Transcribed from the original guide · press / to search";
    page.appendChild(foot);
    return page;
  }

  function viewCategory(partId) {
    const part = partById(partId);
    if (!part) return viewNotFound();
    const page = el("div", "page");
    page.appendChild(topbar([{ label: "Home", route: "#/" }, { label: part.title }]));
    const wrap = el("div", "pagewrap");

    const head = el("header", "cat-head");
    const eb = el("div", "cat-eyebrow");
    eb.innerHTML = `<span class="ei" style="background:${colorOf(partId)}">${iconOf(partId)}</span><span>${esc(part.label)}</span>`;
    const h = el("h1", "cat-title"); h.textContent = part.title;
    const intro = el("p", "cat-intro"); intro.textContent = catIntro(partId);
    head.append(eb, h, intro);
    wrap.appendChild(head);

    const branches = el("div", "branches");
    branches.style.setProperty("--cat-color", colorOf(partId));
    part.sections.forEach((sec) => {
      const b = el("button", "branch");
      const num = sec.num && sec.num !== "◈" ? sec.num : "◈";
      b.innerHTML =
        `<span class="branch-num">${esc(num)}</span>
         <span class="branch-body"><span class="branch-name">${esc(sec.title)}</span>
         <span class="branch-meta">${sec.page ? "Book p." + sec.page : ""}</span></span>
         <span class="branch-arr">${IC.arr}</span>`;
      b.addEventListener("click", () => go(`#/p/${partId}/${sec.id}`));
      branches.appendChild(b);
    });
    wrap.appendChild(branches);
    page.appendChild(wrap);
    return page;
  }
  function catIntro(id) {
    return ({
      foundations: "The universal method — how the task is graded, how the three essay types compare, and how to structure and plan any answer.",
      opinion: "How to write an agree/disagree essay: analysing the task, planning, writing each part, model answers and common mistakes.",
      bothsides: "How to discuss both sides of an argument and then give your own opinion, with model essays and a reusable template.",
      twoquestion: "How to answer two-part questions (including problem-and-solution), with a worked model and template."
    })[id] || "";
  }

  function viewSection(partId, sectionId) {
    const part = partById(partId);
    if (!part) return viewNotFound();
    const sec = secById(part, sectionId);
    if (!sec) return viewNotFound();
    const page = el("div", "page");

    const prog = el("div", "progressbar"); const pf = el("span"); prog.appendChild(pf); page.appendChild(prog);
    page.appendChild(topbar([
      { label: "Home", route: "#/" },
      { label: part.title, route: `#/p/${partId}` },
      { label: (sec.num && sec.num !== "◈" ? sec.num + " " : "") + sec.title }
    ]));

    const wrap = el("div", "pagewrap");
    const art = el("article", "article");
    const eb = el("div", "section-eyebrow");
    eb.innerHTML = `<span class="pill">${esc(part.label)} · ${esc(part.title)}</span>` + (sec.page ? `<span class="pg">Book p.${sec.page}</span>` : "");
    const h = el("h1", "section-title");
    const num = sec.num && sec.num !== "◈" ? `<span class="num">${esc(sec.num)}</span>` : "";
    h.innerHTML = num + esc(sec.title);
    art.append(eb, h);
    if (sec.page && SCANS.has(sec.page)) {
      const sl = el("button", "scanlink");
      sl.innerHTML = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg> View the original scanned page (p.${sec.page})`;
      sl.addEventListener("click", () => { const loc = SCANS.locate(sec.page); if (loc) go(`#/scans/${loc.groupId}/${loc.idx}`); });
      art.appendChild(sl);
    }
    sec.blocks.forEach((b) => art.appendChild(renderBlock(b)));
    wrap.appendChild(art);

    // pager within category
    const idx = part.sections.indexOf(sec);
    const prev = part.sections[idx - 1], next = part.sections[idx + 1];
    const pager = el("div", "pager");
    const mk = (sc, dir) => {
      const btn = el("button", "pg-btn" + (dir === "next" ? " pg-btn--next" : ""));
      if (!sc) { btn.disabled = true; return btn; }
      btn.innerHTML = `<span class="pg-dir">${dir === "next" ? "Next →" : "← Previous"}</span><span class="pg-t">${esc(sc.title)}</span>`;
      btn.addEventListener("click", () => go(`#/p/${partId}/${sc.id}`));
      return btn;
    };
    pager.append(mk(prev, "prev"), mk(next, "next"));
    wrap.appendChild(pager);
    page.appendChild(wrap);

    // progress bar
    page._onScroll = () => {
      const d = document.documentElement, max = d.scrollHeight - d.clientHeight;
      pf.style.width = (max > 0 ? (d.scrollTop / max) * 100 : 0) + "%";
    };
    return page;
  }

  function viewCollection(kind) {
    const isSamples = kind === "samples";
    const title = isSamples ? "Essay Samples" : "Templates";
    const page = el("div", "page");
    page.appendChild(topbar([{ label: "Home", route: "#/" }, { label: title }]));
    const wrap = el("div", "pagewrap");
    const head = el("header", "cat-head");
    const eb = el("div", "cat-eyebrow");
    eb.innerHTML = `<span class="ei" style="background:${colorOf(kind)}">${iconOf(kind)}</span><span>Collection</span>`;
    const h = el("h1", "cat-title"); h.textContent = title;
    const intro = el("p", "cat-intro");
    intro.textContent = isSamples
      ? "Every worked model essay from the guide, in book order. Tap a heading to jump to its full section."
      : "Reusable sentence frameworks for each essay type. Tap a heading to open the full section.";
    head.append(eb, h, intro);
    wrap.appendChild(head);

    const body = el("div", "article");
    if (isSamples) {
      ALL_ESSAYS.forEach(({ part, sec, block }) => {
        body.appendChild(collSource(part, sec));
        body.appendChild(renderBlock(block));
      });
    } else {
      TEMPLATE_SECS.forEach(({ part, sec }) => {
        body.appendChild(collSource(part, sec));
        sec.blocks.forEach((b) => { if (b.t !== "p" || sec.blocks.indexOf(b) !== 0) body.appendChild(renderBlock(b)); else body.appendChild(renderBlock(b)); });
      });
    }
    wrap.appendChild(body);
    page.appendChild(wrap);
    return page;
  }
  function collSource(part, sec) {
    const d = el("div", "coll-src");
    const num = sec.num && sec.num !== "◈" ? sec.num : "◈";
    d.innerHTML = `<span class="cs-num">${esc(num)}</span><span class="cs-name">${esc(sec.title)}</span><span class="cs-part">${esc(part.title)}</span>`;
    d.addEventListener("click", () => go(`#/p/${part.id}/${sec.id}`));
    return d;
  }

  const scanIcon = (c) => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="${c}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>`;
  const capLabel = (im) => im.seq ? `${im.n} / 58` : `p.${im.page}`;

  /* level 1 — minimalist Scans entrance */
  function viewScansHub() {
    const page = el("div", "page hub");
    const mark = el("div", "hub-mark"); mark.innerHTML = scanIcon("#fff");
    const kicker = el("div", "hub-kicker"); kicker.textContent = "Original Scans";
    const h1 = el("h1", "hub-title"); h1.textContent = "The Scanned Book";
    const sub = el("p", "hub-sub"); sub.textContent = "Choose a chapter to browse the original pages.";
    page.append(mark, kicker, h1, sub);

    const grid = el("div", "tiles");
    SCANS.groups.forEach((g) => {
      const tile = el("button", "tile scan-tile");
      tile.style.setProperty("--tile-color", g.color);
      tile.style.setProperty("--tile-glow", g.color + "22");
      tile.innerHTML =
        `<span class="st-thumb"><img loading="lazy" decoding="async" src="${g.cover}" alt=""></span>
         <span class="st-body">
           <span class="tile-name">${esc(g.title)}</span>
           <span class="st-meta"><span class="st-chip" style="background:${g.color}">${esc(g.label)}</span><span class="st-range">${esc(g.range)} · ${g.count} pages</span></span>
           <span class="tile-desc">${esc(g.blurb)}</span>
         </span>`;
      tile.addEventListener("click", () => go(`#/scans/${g.id}`));
      grid.appendChild(tile);
    });
    page.appendChild(grid);
    const foot = el("div", "hub-foot"); foot.textContent = `${SCANS.count} photos in reading order · switch to Read up top`;
    page.appendChild(foot);
    return page;
  }

  /* level 2 — a chapter's page thumbnails (branching) */
  function viewScansGroup(groupId) {
    const g = SCANS.group(groupId);
    if (!g) return viewNotFound();
    const page = el("div", "page");
    page.appendChild(topbar([{ label: "Home", route: "#/" }, { label: "Scans", route: "#/scans" }, { label: g.title }]));
    const wrap = el("div", "pagewrap");

    const head = el("header", "cat-head");
    const eb = el("div", "cat-eyebrow");
    eb.innerHTML = `<span class="ei" style="background:${g.color}">${scanIcon("#fff")}</span><span>${esc(g.label)} · ${esc(g.range)}</span>`;
    const h = el("h1", "cat-title"); h.textContent = g.title;
    const intro = el("p", "cat-intro"); intro.textContent = g.blurb;
    head.append(eb, h, intro);
    if (g.note) { const n = el("div", "scans-note"); n.innerHTML = `<span>📚</span><span>${esc(g.note)}</span>`; head.append(n); }
    wrap.appendChild(head);

    const grid = el("div", "thumb-grid");
    grid.style.setProperty("--cat-color", g.color);
    let imgIdx = -1;
    g.items.forEach((it) => {
      if (it.type === "gap") {
        const gp = el("div", "thumb-gap");
        const lbl = it.from === it.to ? `Page ${it.from} missing` : `Pages ${it.from}–${it.to} missing`;
        gp.innerHTML = `<span class="gp-ico">⋯</span><span><b>${lbl}.</b> ${esc(it.note)}</span>`;
        grid.appendChild(gp); return;
      }
      imgIdx++;
      const i = imgIdx;
      const t = el("button", "thumb");
      t.innerHTML = `<span class="th-img"><img loading="lazy" decoding="async" src="${it.src}" alt="${esc(capLabel(it))}"></span><span class="th-cap">${esc(capLabel(it))}</span>`;
      t.addEventListener("click", () => go(`#/scans/${g.id}/${i}`));
      grid.appendChild(t);
    });
    wrap.appendChild(grid);
    page.appendChild(wrap);
    return page;
  }

  /* level 3 — a single full page with prev/next in the chapter */
  function viewScansPage(groupId, idx) {
    const g = SCANS.group(groupId);
    if (!g || !g.images[idx]) return viewNotFound();
    const im = g.images[idx];
    const page = el("div", "page");
    page.appendChild(topbar([
      { label: "Home", route: "#/" }, { label: "Scans", route: "#/scans" },
      { label: g.title, route: `#/scans/${g.id}` }, { label: capLabel(im) },
    ]));
    const wrap = el("div", "pagewrap");
    const art = el("article", "article scan-single");
    const eb = el("div", "section-eyebrow");
    eb.innerHTML = `<span class="pill" style="background:${g.color}22;color:${g.color}">${esc(g.label)} · ${esc(g.title)}</span><span class="pg">${esc(capLabel(im))}</span>`;
    art.appendChild(eb);
    const img = el("img", "scan-img"); img.decoding = "async"; img.alt = "Scan " + capLabel(im); img.src = im.src;
    art.appendChild(img);

    const pager = el("div", "pager");
    const mk = (j, dir) => {
      const b = el("button", "pg-btn" + (dir === "next" ? " pg-btn--next" : ""));
      const t = g.images[j];
      if (!t) { b.disabled = true; return b; }
      b.innerHTML = `<span class="pg-dir">${dir === "next" ? "Next →" : "← Previous"}</span><span class="pg-t">${esc(capLabel(t))}</span>`;
      b.addEventListener("click", () => go(`#/scans/${g.id}/${j}`));
      return b;
    };
    pager.append(mk(idx - 1, "prev"), mk(idx + 1, "next"));
    wrap.append(art, pager);
    page.appendChild(wrap);
    return page;
  }

  function viewNotFound() {
    const page = el("div", "page");
    page.appendChild(topbar([{ label: "Home", route: "#/" }, { label: "Not found" }]));
    const w = el("div", "pagewrap");
    const h = el("div", "cat-head"); h.innerHTML = '<h1 class="cat-title">Page not found</h1><p class="cat-intro">That section doesn’t exist. Return home to choose a section.</p>';
    w.appendChild(h); page.appendChild(w); return page;
  }

  /* ============================================================
     ROUTER
     ============================================================ */
  let current = null;
  function parse() {
    let h = location.hash.replace(/^#\/?/, "");
    const parts = h.split("/").filter(Boolean);
    if (parts.length === 0) return { view: "hub" };
    if (parts[0] === "scans") {
      if (!parts[1]) return { view: "scansHub" };
      if (parts[2] != null) return { view: "scansPage", groupId: parts[1], idx: parseInt(parts[2], 10) };
      return { view: "scansGroup", groupId: parts[1] };
    }
    if (parts[0] === "samples") return { view: "coll", kind: "samples" };
    if (parts[0] === "templates") return { view: "coll", kind: "templates" };
    if (parts[0] === "p" && parts[1] && parts[2]) return { view: "section", partId: parts[1], sectionId: parts[2] };
    if (parts[0] === "p" && parts[1]) return { view: "category", partId: parts[1] };
    return { view: "hub" };
  }
  function render() {
    const r = parse();
    let node;
    if (r.view === "hub") node = viewHub();
    else if (r.view === "category") node = viewCategory(r.partId);
    else if (r.view === "section") node = viewSection(r.partId, r.sectionId);
    else if (r.view === "coll") node = viewCollection(r.kind);
    else if (r.view === "scansHub") node = viewScansHub();
    else if (r.view === "scansGroup") node = viewScansGroup(r.groupId);
    else if (r.view === "scansPage") node = viewScansPage(r.groupId, r.idx);
    else node = viewNotFound();
    setToggle(String(r.view).startsWith("scans") ? "scans" : "read");

    // swap scroll handler
    if (current && current._onScroll) document.removeEventListener("scroll", current._onScroll);
    app.replaceChildren(node);
    current = node;
    if (node._onScroll) { document.addEventListener("scroll", node._onScroll, { passive: true }); node._onScroll(); }
    window.scrollTo(0, 0);
    if (node._afterMount) node._afterMount();
    document.title = titleFor(r);
  }

  /* view toggle (Read / Scans) */
  const toggle = document.getElementById("viewToggle");
  let lastReadRoute = "#/";
  function setToggle(mode) {
    toggle.querySelectorAll(".vt-btn").forEach((b) => b.classList.toggle("active", b.dataset.mode === mode));
  }
  toggle.querySelectorAll(".vt-btn").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.mode === "scans") { if (!location.hash.startsWith("#/scans")) lastReadRoute = location.hash || "#/"; go("#/scans"); }
    else { go(lastReadRoute && !lastReadRoute.startsWith("#/scans") ? lastReadRoute : "#/"); }
  }));
  function titleFor(r) {
    if (r.view === "category") { const p = partById(r.partId); return (p ? p.title : "Guide") + " · IELTS Writing Task 2"; }
    if (r.view === "section") { const p = partById(r.partId); const s = p && secById(p, r.sectionId); return (s ? s.title : "Section") + " · IELTS Writing Task 2"; }
    if (r.view === "coll") return (r.kind === "samples" ? "Essay Samples" : "Templates") + " · IELTS Writing Task 2";
    if (r.view === "scansHub") return "Original Scans · IELTS Writing Task 2";
    if (r.view === "scansGroup" || r.view === "scansPage") { const g = SCANS.group(r.groupId); return (g ? g.title : "Scans") + " · Scans"; }
    return "IELTS Writing Task 2 — Guide";
  }
  function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }
  window.addEventListener("hashchange", render);

  /* ============================================================
     SEARCH overlay
     ============================================================ */
  const overlay = document.getElementById("searchOverlay");
  const field = document.getElementById("searchField");
  const results = document.getElementById("searchResults");
  let activeIdx = -1, shown = [];

  function openSearch() { overlay.hidden = false; field.value = ""; runSearch(); field.focus(); }
  function closeSearch() { overlay.hidden = true; }
  function runSearch() {
    const q = field.value.trim().toLowerCase();
    shown = (q ? INDEX.filter((x) => x.text.includes(q) || x.num.includes(q)) : INDEX).slice(0, 40);
    activeIdx = shown.length ? 0 : -1;
    results.innerHTML = "";
    if (!shown.length) { const e = el("div", "sr-empty"); e.textContent = "No sections match."; results.appendChild(e); return; }
    shown.forEach((x, i) => {
      const it = el("div", "sr-item" + (i === activeIdx ? " active" : ""));
      it.innerHTML = `<span class="sr-num">${esc(x.num)}</span><span><span class="sr-t">${esc(x.sec.title)}</span><br><span class="sr-p">${esc(x.part.label)} · ${esc(x.part.title)}${x.sec.page ? " · p." + x.sec.page : ""}</span></span>`;
      it.addEventListener("click", () => { closeSearch(); go(x.route); });
      it.addEventListener("mousemove", () => setActive(i));
      results.appendChild(it);
    });
  }
  function setActive(i) {
    activeIdx = i;
    Array.from(results.children).forEach((c, j) => c.classList.toggle("active", j === i));
  }
  field.addEventListener("input", runSearch);
  field.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); if (shown.length) { setActive((activeIdx + 1) % shown.length); results.children[activeIdx].scrollIntoView({ block: "nearest" }); } }
    else if (e.key === "ArrowUp") { e.preventDefault(); if (shown.length) { setActive((activeIdx - 1 + shown.length) % shown.length); results.children[activeIdx].scrollIntoView({ block: "nearest" }); } }
    else if (e.key === "Enter") { if (shown[activeIdx]) { closeSearch(); go(shown[activeIdx].route); } }
    else if (e.key === "Escape") closeSearch();
  });
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeSearch(); });
  document.getElementById("searchBtn").addEventListener("click", openSearch);
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && overlay.hidden && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
    else if (e.key === "Escape" && !overlay.hidden) closeSearch();
  });

  /* ============================================================
     THEME
     ============================================================ */
  const root = document.documentElement;
  const saved = localStorage.getItem("ielts-theme");
  if (saved) { root.setAttribute("data-theme", saved); document.body.setAttribute("data-theme", saved); }
  document.getElementById("themeBtn").addEventListener("click", () => {
    const cur = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", cur); document.body.setAttribute("data-theme", cur);
    localStorage.setItem("ielts-theme", cur);
  });

  /* ---------- boot ---------- */
  // default landing = Scans hub (Read is still reachable via the toggle / #/)
  if (!location.hash || location.hash === "#" || location.hash === "#/") history.replaceState(null, "", "#/scans");
  render();
})();
