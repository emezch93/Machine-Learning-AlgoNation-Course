/* CodeVent Machine Learning — application logic */

const STORAGE_KEY = "codevent_ml_progress_v1";
const LAST_KEY = "codevent_ml_last_v1";
const SETUP_DISMISS_KEY = "codevent_ml_setup_dismissed_v1";

/* ---------- Course access authorization ---------- */
const ACCESS_TOKEN_KEY = "codevent_machine_learning_access_token";
const WORKER_URL = "https://codevent-machine-learning-course.emezch93.workers.dev";

function renderAuthState(html) {
  const content = document.getElementById("content");
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.innerHTML = "";
  if (content) content.innerHTML = html;
}

function authLoadingHtml(message) {
  return `<div class="auth-gate"><p class="auth-gate-message">${message}</p></div>`;
}

function authErrorHtml(message) {
  return `
    <div class="auth-gate">
      <p class="auth-gate-message">${message}</p>
      <button type="button" id="auth-retry-btn" class="auth-retry-btn">Retry</button>
    </div>`;
}

function lockedScreenHtml(errorMessage) {
  return `
    <div class="auth-gate">
      <div class="auth-gate-card">
        <div class="auth-gate-brand">CodeVent Digital</div>
        <h1 class="auth-gate-title">Course Locked</h1>
        <p class="auth-gate-message">Enter your access token to unlock CodeVent Machine Learning.</p>
        <form id="unlock-form" class="auth-gate-form" autocomplete="off">
          <input type="text" id="unlock-token-input" class="auth-gate-input" placeholder="Access Token" autocomplete="off">
          <button type="submit" class="auth-gate-unlock-btn">Unlock Course</button>
        </form>
        <div id="unlock-error" class="auth-gate-error ${errorMessage ? "" : "hidden"}">${errorMessage ? escapeHtml(errorMessage) : ""}</div>
        <a class="auth-gate-pay-link" href="contact.html" target="_self">Don't have a token? Contact us for course access</a>
      </div>
    </div>`;
}

async function verifyStoredAccess(token) {
  let response;
  try {
    response = await fetch(WORKER_URL + "/verify-access", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ token }),
      cache: "no-store"
    });
  } catch (err) {
    return { networkError: true };
  }

  let data;
  try {
    data = await response.json();
  } catch (err) {
    return { networkError: true };
  }

  return { networkError: false, authorized: !!data.authorized };
}

function showLockedScreen(errorMessage) {
  renderAuthState(lockedScreenHtml(errorMessage));
  const form = document.getElementById("unlock-form");
  if (!form) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = document.getElementById("unlock-token-input");
    const errorEl = document.getElementById("unlock-error");
    const submitBtn = form.querySelector("button[type=submit]");
    const token = input.value.trim();

    if (!token) {
      errorEl.textContent = "Enter your access token.";
      errorEl.classList.remove("hidden");
      return;
    }

    errorEl.classList.add("hidden");
    submitBtn.disabled = true;
    submitBtn.textContent = "Verifying...";

    const result = await verifyStoredAccess(token);

    if (result.networkError) {
      errorEl.textContent = "Unable to verify right now. Check your connection and try again.";
      errorEl.classList.remove("hidden");
      submitBtn.disabled = false;
      submitBtn.textContent = "Unlock Course";
      return;
    }

    if (!result.authorized) {
      errorEl.textContent = "That access token is invalid or expired.";
      errorEl.classList.remove("hidden");
      submitBtn.disabled = false;
      submitBtn.textContent = "Unlock Course";
      return;
    }

    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    startApp();
  });
}

async function initAuth() {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (!token) {
    showLockedScreen();
    return;
  }

  renderAuthState(authLoadingHtml("Checking your course access..."));

  const result = await verifyStoredAccess(token);

  if (result.networkError) {
    renderAuthState(authErrorHtml("Unable to verify your course access right now. Check your connection and try again."));
    const retryBtn = document.getElementById("auth-retry-btn");
    if (retryBtn) retryBtn.addEventListener("click", initAuth);
    return;
  }

  if (!result.authorized) {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    showLockedScreen("Your previous access token is no longer valid. Enter a valid token to continue.");
    return;
  }

  startApp();
}

/* ---------- Flatten course into a linear sequence for prev/next + progress ---------- */
const SEQUENCE = [];
COURSE.modules.forEach((mod) => {
  (mod.lessons || []).forEach((lesson) => {
    SEQUENCE.push({ type: "lesson", moduleId: mod.id, id: lesson.id, title: lesson.title, data: lesson });
  });
  (mod.projects || []).forEach((p) => {
    SEQUENCE.push({ type: "project", moduleId: mod.id, id: p.id, title: p.title, data: p });
  });
  if (mod.capstone) {
    SEQUENCE.push({ type: "capstone", moduleId: mod.id, id: mod.capstone.id, title: mod.capstone.title, data: mod.capstone });
  }
});
const TOTAL_ITEMS = SEQUENCE.length;

function findById(id) {
  return SEQUENCE.find((entry) => entry.id === id) || null;
}
function indexOf(id) {
  return SEQUENCE.findIndex((entry) => entry.id === id);
}
function moduleOf(moduleId) {
  return COURSE.modules.find((m) => m.id === moduleId);
}

/* ---------- Progress (localStorage) ---------- */
function getCompleted() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}
function saveCompleted(set) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}
function toggleComplete(id) {
  const set = getCompleted();
  if (set.has(id)) set.delete(id);
  else set.add(id);
  saveCompleted(set);
}
function progressPercent() {
  const completed = getCompleted().size;
  if (TOTAL_ITEMS === 0) return 0;
  return Math.round((completed / TOTAL_ITEMS) * 100);
}
function setLast(id) {
  localStorage.setItem(LAST_KEY, id);
}
function getLast() {
  return localStorage.getItem(LAST_KEY);
}

/* ---------- Routing (simple hash state) ---------- */
function currentId() {
  return window.location.hash.replace("#", "") || null;
}
window.addEventListener("hashchange", render);

/* ---------- Helpers ---------- */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : str;
  return div.innerHTML;
}

function codeBlock(code, lang) {
  const escaped = escapeHtml(code);
  const blockId = "code-" + Math.random().toString(36).slice(2, 9);
  return `
    <div class="code-block">
      <div class="code-block-bar">
        <span class="code-lang">${lang}</span>
        <button class="copy-btn" data-target="${blockId}" type="button">Copy</button>
      </div>
      <pre id="${blockId}"><code>${escaped}</code></pre>
    </div>`;
}

function codeGroup(codeObj) {
  if (!codeObj) return "";
  const langs = Object.keys(codeObj);
  return `<div class="code-group">${langs.map((l) => codeBlock(codeObj[l], l.toUpperCase())).join("")}</div>`;
}

function attachCopyHandlers(root) {
  root.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      const text = target ? target.textContent : "";
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = original), 1200);
      });
    });
  });
}

function runNoteBlock(note) {
  if (!note) return "";
  return `<div class="run-note"><strong>Run the Code:</strong> ${escapeHtml(note)} Run this in your own Python environment, not in this course application.</div>`;
}

function aiHelpCallout(label) {
  return `
    <div class="ai-callout">
      <p>Stuck on ${escapeHtml(label)}? The CodeVent AI Tutor can walk through it with you.</p>
      <a href="https://codeventdigital.site/chat.html" target="_blank" class="ai-callout-link">Ask the AI Tutor</a>
    </div>`;
}

function paragraphs(value) {
  if (!value) return "";
  const arr = Array.isArray(value) ? value : [value];
  return arr.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
}

function notesBlocks(notes) {
  if (!notes || !notes.length) return "";
  return notes
    .map(
      (n) => `
    <section class="lesson-section">
      <h2>${escapeHtml(n.heading)}</h2>
      <ul class="plain-list">${n.items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
    </section>`
    )
    .join("");
}

/* ---------- Practice block (task / hint / solution reveal) ---------- */
function practiceBlock(practice, itemId) {
  if (!practice) return "";
  const hintId = "hint-" + itemId;
  const solId = "sol-" + itemId;
  return `
    <div class="practice-box">
      <div class="practice-label">Practice</div>
      <p class="practice-task">${escapeHtml(practice.task)}</p>
      <div class="practice-actions">
        <button class="reveal-btn" type="button" data-reveal="${hintId}">Show hint</button>
        <button class="reveal-btn" type="button" data-reveal="${solId}">Show solution</button>
      </div>
      <div id="${hintId}" class="reveal-panel hidden">
        <div class="reveal-label">Hint</div>
        <p>${escapeHtml(practice.hint)}</p>
      </div>
      <div id="${solId}" class="reveal-panel hidden">
        <div class="reveal-label">Solution</div>
        ${codeBlock(practice.solution, "SOLUTION")}
      </div>
    </div>`;
}

function attachRevealHandlers(root) {
  root.querySelectorAll("[data-reveal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.dataset.reveal);
      panel.classList.toggle("hidden");
    });
  });
}

/* ---------- Sidebar ---------- */
function renderSidebar() {
  const completed = getCompleted();
  const active = currentId();
  const modulesHtml = COURSE.modules
    .map((mod, idx) => {
      const items = [];
      (mod.lessons || []).forEach((l) => items.push({ id: l.id, title: l.title, done: completed.has(l.id) }));
      (mod.projects || []).forEach((p) => items.push({ id: p.id, title: p.title, done: completed.has(p.id), isProject: true }));
      if (mod.capstone) items.push({ id: mod.capstone.id, title: mod.capstone.title, done: completed.has(mod.capstone.id), isProject: true });

      const doneCount = items.filter((i) => i.done).length;
      const isOpen = items.some((i) => i.id === active) || localStorage.getItem("open_" + mod.id) === "1";

      return `
      <div class="nav-module ${isOpen ? "open" : ""}" data-module="${mod.id}">
        <button class="nav-module-toggle" type="button" data-toggle="${mod.id}">
          <span class="nav-module-index">${String(idx + 1).padStart(2, "0")}</span>
          <span class="nav-module-title">${escapeHtml(mod.title)}</span>
          <span class="nav-module-count">${doneCount}/${items.length}</span>
        </button>
        <div class="nav-module-items">
          ${items
            .map(
              (i) => `
            <a href="#${i.id}" target="_self" class="nav-item ${i.id === active ? "active" : ""} ${i.isProject ? "nav-item-project" : ""}" data-nav="${i.id}">
              <span class="nav-item-mark">${i.done ? "✓" : ""}</span>
              <span class="nav-item-title">${escapeHtml(i.title)}</span>
            </a>`
            )
            .join("")}
        </div>
      </div>`;
    })
    .join("");

  return `
    <div class="sidebar-header">
      <a href="#dashboard" target="_self" class="brand">
        <img src="codevent-logo.PNG" alt="CodeVent Digital logo" class="brand-mark-img">
        <span class="brand-name">CodeVent Digital</span>
      </a>
      <div class="brand-course">CodeVent Machine Learning</div>
    </div>
    <div class="sidebar-progress">
      <div class="sidebar-progress-label">
        <span>Course Progress</span>
        <span class="mono">${progressPercent()}%</span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${progressPercent()}%"></div></div>
    </div>
    <nav class="nav-modules">${modulesHtml}</nav>
    <a href="#python-setup" target="_self" class="sidebar-setup-link">
      <span class="sidebar-setup-icon mono">PY</span>
      <span>Python Setup</span>
    </a>
    <a href="https://codeventdigital.site/chat.html" target="_blank" class="sidebar-setup-link">
      <span class="sidebar-setup-icon">AI</span>
      <span>Ask the CodeVent AI Tutor</span>
    </a>
    <div class="sidebar-footer">
      <a href="about.html" target="_self">About</a>
      <a href="contact.html" target="_self">Contact</a>
      <a href="terms.html" target="_self">Terms</a>
      <a href="privacy.html" target="_self">Privacy</a>
    </div>
  `;
}

/* ---------- Lesson view ---------- */
function renderLessonView(mod, lesson) {
  const idx = indexOf(lesson.id);
  const prev = idx > 0 ? SEQUENCE[idx - 1] : null;
  const next = idx < SEQUENCE.length - 1 ? SEQUENCE[idx + 1] : null;
  const completed = getCompleted().has(lesson.id);

  return `
    <div class="crumb">
      <a href="#dashboard" target="_self">Dashboard</a> <span>/</span> <span>${escapeHtml(mod.title)}</span>
    </div>
    <h1 class="lesson-title">${escapeHtml(lesson.title)}</h1>

    <section class="lesson-section">
      <h2>Concept</h2>
      ${paragraphs(lesson.concept)}
    </section>

    <section class="lesson-section">
      <h2>Example</h2>
      ${paragraphs(lesson.example)}
    </section>

    ${notesBlocks(lesson.notes)}

    ${
      lesson.code
        ? `<section class="lesson-section">
      <h2>Python Code</h2>
      ${codeGroup(lesson.code)}
      ${runNoteBlock(lesson.runNote)}
    </section>`
        : ""
    }

    <section class="lesson-section">
      ${practiceBlock(lesson.practice, lesson.id)}
    </section>

    <section class="lesson-section">
      <h2>Exercise</h2>
      <p>${escapeHtml(lesson.exercise)}</p>
    </section>

    <section class="lesson-section">
      ${aiHelpCallout("this lesson")}
    </section>

    <div class="lesson-footer">
      <button class="complete-btn ${completed ? "done" : ""}" type="button" data-complete="${lesson.id}">
        ${completed ? "Lesson Complete" : "Complete Lesson"}
      </button>
      <div class="prev-next">
        ${prev ? `<a href="#${prev.id}" target="_self" class="pn-link">Previous: ${escapeHtml(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a href="#${next.id}" target="_self" class="pn-link pn-next">Next: ${escapeHtml(next.title)}</a>` : ""}
      </div>
    </div>
  `;
}

/* ---------- Project view (Module 8 practical projects) ---------- */
function renderProjectView(mod, project) {
  const idx = indexOf(project.id);
  const prev = idx > 0 ? SEQUENCE[idx - 1] : null;
  const next = idx < SEQUENCE.length - 1 ? SEQUENCE[idx + 1] : null;
  const completed = getCompleted().has(project.id);

  const list = (arr, label) =>
    arr && arr.length
      ? `<section class="lesson-section"><h2>${label}</h2><ul class="plain-list">${arr.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul></section>`
      : "";

  return `
    <div class="crumb">
      <a href="#dashboard" target="_self">Dashboard</a> <span>/</span> <span>${escapeHtml(mod.title)}</span>
    </div>
    <div class="project-tag">Project</div>
    <h1 class="lesson-title">${escapeHtml(project.title)}</h1>
    <section class="lesson-section">
      <h2>Objective</h2>
      <p>${escapeHtml(project.objective)}</p>
    </section>
    <section class="lesson-section">
      <h2>Problem</h2>
      <p>${escapeHtml(project.problem)}</p>
    </section>
    <section class="lesson-section">
      <h2>Dataset</h2>
      <p>${escapeHtml(project.dataset)}</p>
    </section>
    ${list(project.concepts, "Required Concepts")}
    ${list(project.tasks, "Tasks")}
    ${
      project.code
        ? `<section class="lesson-section">
      <h2>Python Code</h2>
      ${codeGroup({ python: project.code })}
      ${runNoteBlock("This is a starting template. Replace the file name with your actual dataset file.")}
    </section>`
        : ""
    }
    <section class="lesson-section">
      <h2>Expected Result</h2>
      <p>${escapeHtml(project.expectedResult)}</p>
    </section>
    ${project.challenge ? `<section class="lesson-section"><h2>Practice Challenge</h2><p>${escapeHtml(project.challenge)}</p></section>` : ""}

    <section class="lesson-section">
      ${aiHelpCallout("this project")}
    </section>

    <div class="lesson-footer">
      <button class="complete-btn ${completed ? "done" : ""}" type="button" data-complete="${project.id}">
        ${completed ? "Project Complete" : "Mark Project Complete"}
      </button>
      <div class="prev-next">
        ${prev ? `<a href="#${prev.id}" target="_self" class="pn-link">Previous: ${escapeHtml(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a href="#${next.id}" target="_self" class="pn-link pn-next">Next: ${escapeHtml(next.title)}</a>` : ""}
      </div>
    </div>
  `;
}

/* ---------- Capstone view ---------- */
function renderCapstoneView(mod, capstone) {
  const completed = getCompleted().has(capstone.id);
  const idx = indexOf(capstone.id);
  const prev = idx > 0 ? SEQUENCE[idx - 1] : null;

  return `
    <div class="crumb"><a href="#dashboard" target="_self">Dashboard</a> <span>/</span> <span>${escapeHtml(mod.title)}</span></div>
    <div class="project-tag">Final Project</div>
    <h1 class="lesson-title">${escapeHtml(capstone.title)}</h1>
    <section class="lesson-section">
      <h2>Objective</h2>
      <p>${escapeHtml(capstone.objective)}</p>
    </section>
    <section class="lesson-section">
      <h2>Requirements</h2>
      <ul class="plain-list">${capstone.requirements.map((r) => `<li>${escapeHtml(r)}</li>`).join("")}</ul>
    </section>
    <section class="lesson-section">
      <h2>Final Project Checklist</h2>
      <ul class="checklist">${capstone.checklist.map((c, i) => `<li><label><input type="checkbox" data-checklist="${capstone.id}-${i}"> ${escapeHtml(c)}</label></li>`).join("")}</ul>
    </section>
    <section class="lesson-section">
      ${aiHelpCallout("the final project")}
    </section>
    <div class="lesson-footer">
      <button class="complete-btn ${completed ? "done" : ""}" type="button" data-complete="${capstone.id}">
        ${completed ? "Final Project Complete" : "Mark Final Project Complete"}
      </button>
      <div class="prev-next">
        ${prev ? `<a href="#${prev.id}" target="_self" class="pn-link">Previous: ${escapeHtml(prev.title)}</a>` : "<span></span>"}
        <span></span>
      </div>
    </div>
  `;
}

/* ---------- Python Setup view ---------- */
const PYTHON_ENVIRONMENTS = [
  { name: "Windows", detail: "Install Python from python.org, then use IDLE (included) or install VS Code with the Python extension." },
  { name: "macOS", detail: "Install Python from python.org or with Homebrew, then use IDLE (included) or VS Code with the Python extension." },
  { name: "Linux", detail: "Most distributions include Python 3. Use a terminal with IDLE, or install VS Code with the Python extension." },
  { name: "Android", detail: "Install Pydroid 3 from the Play Store, which includes an editor, a Python interpreter, and pip." },
  { name: "iPhone and iPad", detail: "Use a browser-based environment such as Google Colab, since local Python apps are limited on iOS." },
  { name: "Browser (any device)", detail: "Use Google Colab, which runs Python in the browser with no installation and supports pandas and scikit-learn by default." }
];

function renderPythonSetup() {
  const cards = PYTHON_ENVIRONMENTS.map(
    (e) => `<div class="env-card"><h3>${escapeHtml(e.name)}</h3><p>${escapeHtml(e.detail)}</p></div>`
  ).join("");

  return `
    <div class="crumb"><a href="#dashboard" target="_self">Dashboard</a> <span>/</span> <span>Python Setup</span></div>
    <h1 class="lesson-title">Python Setup</h1>
    <section class="lesson-section">
      <p>This course teaches Python and Machine Learning code. It does not run Python inside the application. A working Python environment is required to run the code examples yourself.</p>
      <p>Any one working environment is enough. The course works the same regardless of which option is chosen.</p>
    </section>
    <section class="lesson-section">
      <h2>Environment Options</h2>
      <div class="env-grid">${cards}</div>
    </section>
    <section class="lesson-section">
      <h2>Recommended Packages</h2>
      <p>Most lessons use pandas, numpy, and scikit-learn. Specific lessons also use xgboost, lightgbm, matplotlib, seaborn, or joblib, noted under each code example. Install packages with pip, for example: pip install pandas numpy scikit-learn</p>
    </section>
    <section class="lesson-section">
      ${aiHelpCallout("setting up your Python environment")}
    </section>
  `;
}

/* ---------- Dashboard ---------- */
function renderSetupBanner() {
  if (localStorage.getItem(SETUP_DISMISS_KEY) === "1") return "";
  return `
    <div class="setup-banner" id="setup-banner">
      <p>This course teaches Python and Machine Learning code. You need your own Python environment to run it. No Python runs inside this application.</p>
      <div class="setup-banner-actions">
        <a href="#python-setup" target="_self" class="setup-banner-link">View Python Setup</a>
        <button type="button" class="setup-banner-dismiss" id="dismiss-setup">Dismiss</button>
      </div>
    </div>`;
}

function renderDashboard() {
  const pct = progressPercent();
  const lastId = getLast();
  const lastEntry = lastId ? findById(lastId) : null;
  const continueEntry = lastEntry || SEQUENCE[0];
  const completed = getCompleted();

  const moduleCards = COURSE.modules
    .map((mod, i) => {
      const items = [];
      (mod.lessons || []).forEach((l) => items.push(l.id));
      (mod.projects || []).forEach((p) => items.push(p.id));
      if (mod.capstone) items.push(mod.capstone.id);
      const done = items.filter((id) => completed.has(id)).length;
      const first = items[0];
      return `
      <a href="#${first}" target="_self" class="module-card">
        <div class="module-card-top">
          <span class="mono">${String(i + 1).padStart(2, "0")}</span>
          <span class="module-card-count">${done}/${items.length}</span>
        </div>
        <h3>${escapeHtml(mod.title)}</h3>
        <p>${escapeHtml(mod.description)}</p>
      </a>`;
    })
    .join("");

  const projectCount = SEQUENCE.filter((e) => e.type === "project" && completed.has(e.id)).length;
  const totalProjects = SEQUENCE.filter((e) => e.type === "project").length;
  const capstoneEntry = SEQUENCE.find((e) => e.type === "capstone");

  return `
    ${renderSetupBanner()}
    <div class="dashboard-head">
      <h1>CodeVent Machine Learning</h1>
      <p class="dashboard-tagline">${escapeHtml(COURSE.tagline)}</p>
    </div>

    <div class="dashboard-stats">
      <div class="stat-card">
        <div class="stat-label">Course Progress</div>
        <div class="stat-value mono">${pct}%</div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Current Lesson</div>
        <div class="stat-value-small">${escapeHtml(continueEntry.title)}</div>
        <a href="#${continueEntry.id}" target="_self" class="continue-btn">Continue Learning</a>
      </div>
      <div class="stat-card">
        <div class="stat-label">Completed Projects</div>
        <div class="stat-value mono">${projectCount}/${totalProjects}</div>
        <div class="stat-label">Final Project: ${capstoneEntry && completed.has(capstoneEntry.id) ? "Complete" : "Not Started"}</div>
      </div>
    </div>

    <h2 class="section-heading">Modules</h2>
    <div class="module-grid">${moduleCards}</div>
  `;
}

/* ---------- Main render ---------- */
function render() {
  const id = currentId();
  const content = document.getElementById("content");
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = renderSidebar();

  let html;
  if (!id || id === "dashboard") {
    html = renderDashboard();
  } else if (id === "python-setup") {
    html = renderPythonSetup();
  } else {
    const entry = findById(id);
    if (!entry) {
      html = renderDashboard();
    } else {
      const mod = moduleOf(entry.moduleId);
      if (entry.type === "lesson") html = renderLessonView(mod, entry.data);
      else if (entry.type === "project") html = renderProjectView(mod, entry.data);
      else if (entry.type === "capstone") html = renderCapstoneView(mod, entry.data);
    }
    setLast(id);
  }

  content.innerHTML = html;
  attachCopyHandlers(content);
  attachRevealHandlers(content);
  attachCompleteHandlers(content);
  attachChecklistHandlers(content);
  attachSidebarHandlers(sidebar);
  attachSetupBannerHandler(content);
}

function attachCompleteHandlers(root) {
  root.querySelectorAll("[data-complete]").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleComplete(btn.dataset.complete);
      render();
    });
  });
}

function attachChecklistHandlers(root) {
  root.querySelectorAll("[data-checklist]").forEach((box) => {
    const key = "chk_ml_" + box.dataset.checklist;
    box.checked = localStorage.getItem(key) === "1";
    box.addEventListener("change", () => {
      localStorage.setItem(key, box.checked ? "1" : "0");
    });
  });
}

function attachSetupBannerHandler(root) {
  const btn = root.querySelector("#dismiss-setup");
  if (btn) {
    btn.addEventListener("click", () => {
      localStorage.setItem(SETUP_DISMISS_KEY, "1");
      render();
    });
  }
}

function attachSidebarHandlers(root) {
  root.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modId = btn.dataset.toggle;
      const wrap = btn.closest(".nav-module");
      const isOpen = wrap.classList.toggle("open");
      localStorage.setItem("open_" + modId, isOpen ? "1" : "0");
    });
  });
  root.querySelectorAll("[data-nav]").forEach((a) => {
    a.addEventListener("click", () => closeMobileSidebar());
  });
}

/* ---------- Mobile sidebar toggle ---------- */
function closeMobileSidebar() {
  document.getElementById("app").classList.remove("sidebar-open");
}

function startApp() {
  const toggle = document.getElementById("menu-toggle");
  toggle.addEventListener("click", () => {
    document.getElementById("app").classList.toggle("sidebar-open");
  });
  document.getElementById("overlay").addEventListener("click", closeMobileSidebar);
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  initAuth();
});
localStorage.clear()
