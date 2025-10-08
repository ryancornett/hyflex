// app.js
(function () {
  const elCards = document.getElementById("cards");
  const tpl = document.getElementById("job-card-template");
  const search = document.getElementById("search");
  const occFilter = document.getElementById("socFilter"); // using same select
  const pagerButtons = document.getElementById("pagerButtons");
  const pageSizeSel = document.getElementById("pageSize");
  const pageStatus = document.getElementById("pageStatus");
  const pageId = document.body.dataset.id;

  const JOBS_JSON_URL =
    `https://raw.githubusercontent.com/ryancornett/jobsdata/main/${pageId}.json`;

  // ---------- State ----------
  let raw = []; // original jobs
  let rows = []; // normalized jobs
  let filtered = []; // filtered jobs
  let page = 1;
  let perPage = Number(pageSizeSel?.value || 24);

  // ---------- Utils ----------
  const uniq = (arr) => [...new Set(arr)];
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
  const cleanSoc = (soc) => (soc || "").replace(/\.00$/, "").trim();
  const formatWage = (w) => {
    if (!w || Number(w) === 0) return "Wage not listed";
    const num = Number(w);
    return Number.isFinite(num) ? `$${num.toLocaleString()}/hr` : String(w);
  };
  const getFirst = (obj, keys, fallback = "") => {
    for (const k of keys) {
      if (obj && obj[k] != null && String(obj[k]).trim() !== "") return obj[k];
    }
    return fallback;
  };

  // Normalize potentially different shapes across regions
  function normalizeRow(r) {
    return {
      title: getFirst(r, ["Job Title", "Title", "jobTitle"], "Untitled role"),
      location: getFirst(
        r,
        ["Location", "City", "City/State", "Area", "Reported Location"],
        "Location not listed"
      ),
      employer: getFirst(
        r,
        ["Employer", "Company", "Company Name"],
        "Employer not listed"
      ),
      wage: getFirst(r, ["Wage", "Pay", "Hourly", "Salary"], 0),
      url: getFirst(r, ["Url", "URL", "Link", "Job URL"], "#"),
      occupation: getFirst(
        r,
        ["Occupation Name", "Occupation", "SOC Name", "Job Family"],
        "Occupation"
      ),
      soc: cleanSoc(getFirst(r, ["SOC", "SOC Code", "SOCCode"], "")),
    };
  }

  // ---------- Render Cards ----------
  function renderCards(pageRows) {
    elCards.innerHTML = "";
    const frag = document.createDocumentFragment();

    for (const row of pageRows) {
      const node = tpl.content.firstElementChild.cloneNode(true);
      node.querySelector(".title").textContent = row.title;
      node.querySelector(".employer").textContent = row.employer;
      node.querySelector(".wage").textContent = formatWage(row.wage);
      node.querySelector(".pill.location").textContent = row.location;
      const occEl = node.querySelector(".pill.soc");
      occEl.textContent = row.occupation;
      occEl.title = row.soc
        ? `${row.occupation} (SOC ${row.soc})`
        : row.occupation;

      const btn = node.querySelector(".btn");
      btn.href = row.url || "#";
      btn.setAttribute("aria-label", `Open posting for ${row.title}`);

      frag.appendChild(node);
    }
    elCards.appendChild(frag);

    if (!pageRows.length) {
      const empty = document.createElement("p");
      empty.style.color = "#98a2b3";
      empty.style.margin = "24px 8px";
      empty.textContent = "No results match your filters.";
      elCards.appendChild(empty);
    }
  }

  // ---------- Filtering ----------
  function applyFilters() {
    const q = (search?.value || "").toLowerCase().trim();
    const selectedOcc = occFilter?.value || "";

    filtered = rows.filter((r) => {
      const hay = [r.title, r.employer, r.location, r.occupation, r.soc]
        .join(" ")
        .toLowerCase();

      const matchText = !q || hay.includes(q);
      const matchOcc = !selectedOcc || r.occupation === selectedOcc;
      return matchText && matchOcc;
    });

    // If current page is now out of range, snap back
    const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
    page = clamp(page, 1, totalPages);
    renderPage();
  }

  // ---------- Pager ----------
  function renderPager() {
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    const cur = page;

    pagerButtons.innerHTML = "";

    function btn(label, targetPage, disabled = false, isActive = false) {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      if (disabled) b.disabled = true;
      if (isActive) b.classList.add("is-active");
      b.addEventListener("click", () => {
        if (!disabled) {
          page = clamp(targetPage, 1, totalPages);
          renderPage(true);
        }
      });
      pagerButtons.appendChild(b);
    }

    // windowed numbers (e.g., show ~7 around current)
    const windowSize = 7;
    const half = Math.floor(windowSize / 2);
    let start = Math.max(1, cur - half);
    let end = Math.min(totalPages, start + windowSize - 1);
    start = Math.max(1, Math.min(start, end - windowSize + 1));

    btn("« First", 1, cur === 1);
    btn("‹ Prev", cur - 1, cur === 1);

    if (start > 1) btn("1", 1);
    if (start > 2) {
      const dots = document.createElement("button");
      dots.type = "button";
      dots.textContent = "…";
      dots.disabled = true;
      pagerButtons.appendChild(dots);
    }

    for (let p = start; p <= end; p++) btn(String(p), p, false, p === cur);

    if (end < totalPages - 1) {
      const dots = document.createElement("button");
      dots.type = "button";
      dots.textContent = "…";
      dots.disabled = true;
      pagerButtons.appendChild(dots);
    }
    if (end < totalPages) btn(String(totalPages), totalPages);

    btn("Next ›", cur + 1, cur === totalPages);
    btn("Last »", totalPages, cur === totalPages);

    pageStatus.textContent = total
      ? `Showing ${(cur - 1) * perPage + 1}-${Math.min(
          cur * perPage,
          total
        )} of ${total}`
      : "No results";
  }

  function renderPage(scrollToTop = false) {
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    page = clamp(page, 1, totalPages);

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const pageRows = filtered.slice(start, end);

    renderCards(pageRows);
    renderPager();

    if (scrollToTop) {
      // Keep focus visible for a11y after paging
      elCards.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // ---------- Build Occupation Filter ----------
  function buildOccupationFilterOptions(list) {
    if (!occFilter) return;
    const occs = uniq(list.map((r) => r.occupation).filter(Boolean)).sort(
      (a, b) => a.localeCompare(b)
    );

    // Clear (keep "All occupations")
    for (let i = occFilter.options.length - 1; i >= 1; i--) occFilter.remove(i);

    occs.forEach((name) => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      occFilter.appendChild(opt);
    });
  }

  let lastUpdated = "";

  // ---------- Init ----------
  async function init() {
    try {
      const r = await fetch(JOBS_JSON_URL, { cache: "no-store" });
      if (!r.ok) throw new Error(`Jobs JSON ${r.status}`);
      const json = await r.json();
      raw = Array.isArray(json.data) ? json.data : [];
      lastUpdated = json.updated;
    } catch (err) {
      console.error("Failed to fetch job data:", err);
      elCards.innerHTML = `<p style="color:#f88; padding:16px;">Failed to load job data.</p>`;
      return;
    }

    // normalize
    rows = raw.map(normalizeRow);

    // build filters
    buildOccupationFilterOptions(rows);

    // wire listeners
    if (search) search.addEventListener("input", applyFilters);
    if (occFilter)
      occFilter.addEventListener("change", () => {
        page = 1;
        applyFilters();
      });
    if (pageSizeSel)
      pageSizeSel.addEventListener("change", () => {
        perPage = Number(pageSizeSel.value) || 24;
        page = 1;
        renderPage(true);
      });

    // first render
    filtered = rows.slice();
    renderPage();
    const updatedSpan = document.getElementById("updated");
    updatedSpan.textContent = lastUpdated;
  }

  document.addEventListener("DOMContentLoaded", init);
})();
