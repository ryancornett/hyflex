// app.js
(function () {
  const elCards = document.getElementById('cards');
  const tpl = document.getElementById('job-card-template');
  const search = document.getElementById('search');
  const occFilter = document.getElementById('socFilter'); // repurposed as "Occupation Name" filter

  // ---- Your jobs JSON on GitHub (raw URL) ----
  const JOBS_JSON_URL = 'https://raw.githubusercontent.com/ryancornett/jobsdata/main/ekcep.json';

  // ---- State ----
  let data = []; // jobs array
  let lastUpdated = "";

  // ---- Utils ----
  const uniq = (arr) => [...new Set(arr)];
  const cleanSoc = (soc) => (soc || '').replace(/\.00$/, '').trim();
  const formatWage = (w) => {
    if (!w || Number(w) === 0) return 'Wage not listed';
    const num = Number(w);
    return Number.isFinite(num) ? `$${num.toLocaleString()}/hr` : String(w);
  };

  function renderCards(rows) {
    elCards.innerHTML = '';
    const frag = document.createDocumentFragment();

    rows.forEach((row) => {
      const node = tpl.content.firstElementChild.cloneNode(true);

      const titleEl = node.querySelector('.title');
      const employerEl = node.querySelector('.employer');
      const wageEl = node.querySelector('.wage');
      const locationEl = node.querySelector('.pill.location');
      const occEl = node.querySelector('.pill.soc'); // same element, now shows Occupation Name
      const btn = node.querySelector('.btn');

      const occName = (row['Occupation Name'] || 'Occupation').trim();
      const socCode = cleanSoc(row['SOC']);

      titleEl.textContent = row['Job Title'] || 'Untitled role';
      employerEl.textContent = row['Employer'] || 'Employer not listed';
      wageEl.textContent = formatWage(row['Wage']);
      locationEl.textContent = row['Location'] || 'Location not listed';

      // Show Occupation Name on the pill; put SOC code in the tooltip if present
      occEl.textContent = occName;
      occEl.title = socCode ? `${occName} (SOC ${socCode})` : occName;

      const url = row['Url'] || '#';
      btn.href = url;
      btn.setAttribute('aria-label', `Open posting for ${titleEl.textContent}`);

      frag.appendChild(node);
    });

    elCards.appendChild(frag);

    if (!rows.length) {
      const empty = document.createElement('p');
      empty.style.color = '#98a2b3';
      empty.style.margin = '24px 8px';
      empty.textContent = 'No results match your filters.';
      elCards.appendChild(empty);
    }
  }

  function buildOccupationFilterOptions(rows) {
    // Unique, sorted list of Occupation Names
    const occs = uniq(
      rows.map(r => (r['Occupation Name'] || '').trim()).filter(Boolean)
    ).sort((a, b) => a.localeCompare(b));

    // Clear existing options but keep the first "All occupations"
    for (let i = occFilter.options.length - 1; i >= 1; i--) {
      occFilter.remove(i);
    }

    occs.forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      occFilter.appendChild(opt);
    });
  }

  function applyFilters() {
    const q = (search.value || '').toLowerCase().trim();
    const selectedOcc = occFilter.value; // empty means "All occupations"

    const out = data.filter((row) => {
      const occName = (row['Occupation Name'] || '').trim();
      const hay = [
        row['Job Title'],
        row['Employer'],
        row['Location'],
        occName,
        cleanSoc(row['SOC'])
      ].join(' ').toLowerCase();

      const matchText = !q || hay.includes(q);
      const matchOcc = !selectedOcc || occName === selectedOcc;

      return matchText && matchOcc;
    });

    renderCards(out);
  }

  async function init() {
    try {
      const r = await fetch(JOBS_JSON_URL, { cache: 'no-store' });
      if (!r.ok) throw new Error(`Jobs JSON ${r.status}`);
      const json = await r.json();
      data = Array.isArray(json.data) ? json.data : [];
      lastUpdated = json.updated;
    } catch (err) {
      console.error('Failed to fetch job data:', err);
      elCards.innerHTML = `<p style="color:#f88; padding:16px;">Failed to load job data.</p>`;
      return;
    }

    // Build the Occupation Name dropdown and wire listeners
    buildOccupationFilterOptions(data);
    search.addEventListener('input', applyFilters);
    occFilter.addEventListener('change', applyFilters);

    // Initial render
    renderCards(data);
    const updatedSpan = document.getElementById('updated');
    updatedSpan.textContent = lastUpdated;
  }

  document.addEventListener('DOMContentLoaded', init);
})();
