(() => {
"use strict";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMobile = () => matchMedia("(max-width:860px)").matches;
const root = document.documentElement;
const wait = ms => new Promise(r => setTimeout(r, ms));

/* =============== content =============== */
const ROLES = ["Applied AI Builder", "Product Thinker", "Strategy Builder", "CSE Student at GLA", "UI/UX Designer"];

const DOORS = [
  { key: "strategy", name: "Strategy", color: "#233f80", plate: ["STRATEGY"],
    list: { sub: "Plan first, execute with the team", items: ["Go-to-market planning", "Cross-functional execution", "Market and competitive insights", "Metrics and leadership reporting"] },
    page: { lede: "Turning a business goal into a plan a team can run, and the numbers to check it.", cards: [
      { label: "Role, Jun 2026 to Jul 2026", title: "Chief Strategy Officer", sub: "Baoiam Innovations Pvt Ltd, remote",
        text: "Led strategic planning and growth initiatives aligned with company vision. Worked with Operations, Marketing, Product, Design, and Technology teams to turn strategy into execution, and advised leadership on data-driven decisions using market insights and business metrics.",
        chips: ["Strategy", "Planning", "Metrics"], visual: { t: "stats", items: [["5", "teams worked with"], ["60", "day launch plan"], ["50", "enrollment target"]] } },
      { label: "Plan, Founder Batch", title: "Go-to-market plan", sub: "Baoiam Innovations",
        text: "A five-phase, 60-day launch plan for the ₹999 Founder Batch course, built around a target of 50 enrollments.",
        chips: ["GTM", "Launch", "Pricing"], visual: { t: "phases" } }
    ] } },
  { key: "product", name: "Product & AI", color: "#4f4a66", plate: ["PRODUCT", "& AI"],
    list: { sub: "Problem first, product second, code last", items: ["Health triage that explains itself", "Community-verified travel", "Agents for MLOps log analysis", "Next.js, React, Tailwind CSS"] },
    page: { lede: "Problem first, product second, code last.", cards: [
      { label: "Health triage, Feb 2026 to Jun 2026", title: "MediHintz", sub: "Voice-first health triage and referral",
        text: "Helps people in rural and low-connectivity communities in India decide between home care, a doctor visit, or urgent care, without diagnosing or prescribing. Speak or type a symptom and get an explainable Green, Yellow, or Red result based on WHO IMCI protocols, then find the nearest facility. Includes family profiles, check-in reminders, and an emergency call to 108 that works without login.",
        chips: ["Next.js", "Tailwind CSS", "Web Speech API"], links: [["Live site", "https://medi-hintz.vercel.app/"], ["GitHub", "https://github.com/mayank-140207/MediHintz"]], visual: { t: "phone" } },
      { label: "Travel trust, Mar 2026 to present", title: "Karwan", sub: "Community-verified travel trust platform",
        text: "A travel platform for domestic trips in India where fares, safety, guides, and stays come from community-verified local information, not unverified listings.",
        chips: ["React", "Vite", "Tailwind CSS"], links: [["Live site", "https://karwanweb.vercel.app"], ["GitHub", "https://github.com/mayank-140207/Karwan"]], visual: { t: "modules" } },
      { label: "Agent, Gemini Enterprise training", title: "MLOps log-analysis agent", sub: "Log analysis and drift detection",
        text: "An agent for MLOps log analysis and drift detection, built during the Gemini Enterprise training at GLA University.",
        chips: ["Gemini Enterprise", "Agents", "MLOps"], visual: { t: "drift" } }
    ] } },
  { key: "community", name: "Community", color: "#82a07d", plate: ["COMMUNITY"],
    list: { sub: "Getting people into the room", items: ["Gemini Enterprise Student Ambassador", "E-Summit'27 Campus Ambassador", "E-Cell student relations, 500+ students", "Startup Weekend, Droid Club, AstroClub"] },
    page: { lede: "Getting people into the room, and keeping them talking.", cards: [
      { label: "Ambassador, GLA University", title: "Gemini Enterprise Student Ambassador", sub: "GLA University, Google Projects Team",
        text: "Student ambassador for the Gemini Enterprise program at GLA University, with the Google Projects Team.", chips: ["Google", "Ambassador"], visual: { t: "badge", big: "Gemini", small: "Enterprise program", seal: "Student Ambassador" } },
      { label: "Ambassador, GLA University", title: "E-Summit'27 Campus Ambassador", sub: "GLA University",
        text: "Campus Ambassador at GLA University for E-Summit'27, the entrepreneurship summit of IIT Roorkee.", chips: ["Entrepreneurship", "Ambassador"], visual: { t: "badge", big: "E\u2011Summit'27", small: "Entrepreneurship summit of IIT Roorkee", seal: "Campus Ambassador" } },
      { label: "Student relations, Oct 2025 to Aug 2026", title: "Entrepreneurship Cell", sub: "E-Cell, GLA University",
        text: "Primary liaison for 500+ students, handling queries, feedback, and communications. Planned and promoted 3+ workshops and events, and ran outreach reaching 200+ students per event.",
        chips: ["Outreach", "Events", "Communication"], visual: { t: "stats", items: [["500+", "students"], ["200+", "per event"], ["3+", "workshops and events"]] } },
      { label: "Event", title: "Techstars Startup Weekend", sub: "54-hour event",
        text: "Pitching, mentor sessions, and industry exposure over 54 hours.", chips: ["Startups", "Pitching", "Mentors"], visual: { t: "stats", items: [["54", "hours"]] } },
      { label: "Clubs", title: "Droid Club and AstroClub", sub: "GLA University",
        text: "Droid Club, the official technical club of GLA University, is a student-driven community focused on IoT, robotics, and automation (Sep 2026 to present). AstroClub runs astronomy sessions and stargazing events (Sep 2025 to Jan 2026).",
        chips: ["IoT", "Robotics", "Automation", "Astronomy"], visual: { t: "cloud", items: ["Droid Club", "IoT", "Robotics", "Automation", "AstroClub", "Stargazing"] } }
    ] } },
  { key: "toolbox", name: "Toolbox & Credentials", color: "#b9552b", plate: ["TOOLBOX &", "CREDENTIALS"],
    list: { sub: "What I use, what I've studied", items: ["Python, Java, JavaScript, SQL", "React, Next.js, Tailwind CSS", "NPTEL Ethics in Engineering Practice, 85%", "Gemini and Azure AZ-900 certified"] },
    page: { lede: "What I work with, and what I have studied.", cards: [
      { label: "Credential, NPTEL", title: "Ethics in Engineering Practice", sub: "IIT Kharagpur",
        text: "Completed through NPTEL with an Elite + Silver result and a score of 85%.", chips: ["NPTEL"], links: [["Verify certificate", "https://beta.nptel.ac.in/verify/NOC-XTRX-DCNV-HHM4Q"]], visual: { t: "badge", big: "85%", small: "NPTEL, IIT Kharagpur", seal: "Elite + Silver" } },
      { label: "Skills", title: "What I build with", sub: "Languages, frameworks, tools",
        text: "Languages and frameworks for products, plus the strategy toolkit for planning them.", chips: ["Python", "Java", "SQL"],
        visual: { t: "cloud", items: ["Python", "Java", "JavaScript", "SQL", "React", "Vite", "Next.js", "Tailwind CSS", "React Router", "REST APIs", "Kafka", "Git", "Vercel", "Figma", "Google Stitch", "Generative AI", "Machine learning", "Data analytics", "Business strategy", "Project management"] } },
      { label: "Credentials", title: "Certified", sub: "Google and Microsoft, plus short courses",
        text: "Gemini Certified Student and Educator (Google) and Microsoft Azure Fundamentals (AZ-900). Short courses in AI-Powered Performance Ads, Data Analyst 101, and Data Visualization Using Python.",
        chips: ["Gemini", "AZ-900"], visual: { t: "cloud", items: ["Gemini Certified Student & Educator", "Azure Fundamentals (AZ-900)", "AI-Powered Performance Ads", "Data Analyst 101", "Data Visualization Using Python"] } },
      { label: "Job simulations", title: "Applied practice", sub: "Four simulations",
        text: "Hands-on simulations across data analytics, software engineering, and operations.", chips: ["Analytics", "Software", "Operations"],
        visual: { t: "cloud", items: ["Tata (GenAI Data Analytics)", "JPMorganChase (Software Engineering)", "Deloitte (Data Analytics)", "Goldman Sachs (Operations)"] } }
    ] } }
];

const STORY = [
  { year: 2026, range: "Sep 2026 – Now", title: "Club Member", org: "Droid Club, GLA University", glow: "#8a6420", pts: ["The official technical club of GLA University, a student-driven community focused on IoT, robotics, and automation."] },
  { year: 2026, range: "Jun 2026 – Jul 2026", title: "Chief Strategy Officer", org: "Baoiam Innovations Pvt Ltd, remote", glow: "#6b6a24", pts: ["Led strategic planning and growth initiatives aligned with company vision.", "Wrote the five-phase, 60-day go-to-market plan for the Founder Batch course.", "Worked across Operations, Marketing, Product, Design, and Technology, and advised leadership using business metrics."] },
  { year: 2025, range: "Oct 2025 – Aug 2026", title: "Student Relations Member", org: "Entrepreneurship Cell, GLA University", glow: "#3f6a4a", pts: ["Primary liaison for 500+ students, handling queries, feedback, and communications.", "Planned and promoted 3+ workshops and events, reaching 200+ students per event."] },
  { year: 2025, range: "Sep 2025 – Jan 2026", title: "Club Member", org: "AstroClub, GLA University", glow: "#2f5a70", pts: ["Astronomy observation sessions, stargazing, and awareness events on campus."] },
  { year: 2025, range: "Aug 2025 – Sep 2029", title: "B.Tech, Computer Science Engineering", org: "GLA University, Mathura", glow: "#4c3d74", pts: ["Four-year degree, with a focus on applied AI."] }
];

/* =============== theme + pull cord =============== */
const cord = $("#cord"), bead = $("#bead"), BASE = 70;
const setLen = n => cord.style.setProperty("--len", n + "px");
function setTheme(t) { root.dataset.theme = t; bead.classList.toggle("dk", t === "dark"); }
setTheme(matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
const toggleTheme = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");
(function () {
  let startY = 0, drag = false, moved = 0, justDragged = false;
  bead.addEventListener("pointerdown", e => {
    drag = true; moved = 0; startY = e.clientY; cord.classList.remove("spring"); bead.setPointerCapture(e.pointerId);
  });
  bead.addEventListener("pointermove", e => {
    if (!drag) return; moved = clamp(e.clientY - startY, 0, 96); setLen(BASE + moved);
  });
  const end = () => {
    if (!drag) return; drag = false;
    justDragged = moved > 4; if (moved > 30) toggleTheme();
    cord.classList.add("spring"); setLen(BASE); setTimeout(() => { justDragged = false; }, 60);
  };
  bead.addEventListener("pointerup", end); bead.addEventListener("pointercancel", end);
  bead.addEventListener("click", () => {
    if (justDragged) return;
    cord.classList.add("spring"); setLen(BASE + 30); toggleTheme(); setTimeout(() => setLen(BASE), 140);
  });
  setLen(BASE);
  if (!reduce) { cord.classList.add("spring"); setLen(0); requestAnimationFrame(() => requestAnimationFrame(() => setLen(BASE))); }
})();

/* =============== clock =============== */
(function () {
  const tf = new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" });
  const df = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
  const tick = () => {
    const n = new Date();
    $("#clockTime").textContent = tf.format(n).replace(/\s/g, "").toLowerCase();
    const p = Object.fromEntries(df.formatToParts(n).map(x => [x.type, x.value]));
    $("#clockDate").textContent = `${p.day} ${p.month}, ${p.year}`;
  };
  tick(); setInterval(tick, 15000);
})();

/* =============== hero flip card =============== */
(function () {
  const rings = $("#rings"); for (let i = 0; i < 14; i++) rings.appendChild(el("i"));
  const top = $("#pgTop"), base = $("#pgBase"), flip = $("#flip"), count = $("#count");
  const tS = $("span", top), bS = $("span", base);
  let idx = 0;
  const n = ROLES.length, pad = v => String(v).padStart(2, "0");
  tS.textContent = ROLES[0]; bS.textContent = ROLES[1]; count.textContent = `01 / ${pad(n)}`;
  flip.setAttribute("aria-label", ROLES[0]);
  if (reduce) return;
  setInterval(() => {
    if (document.hidden) return;
    flip.classList.add("turning"); top.classList.add("go");
    setTimeout(() => {
      idx = (idx + 1) % n;
      top.style.transition = "none"; top.classList.remove("go"); tS.textContent = ROLES[idx]; void top.offsetWidth; top.style.transition = "";
      bS.textContent = ROLES[(idx + 1) % n]; count.textContent = `${pad(idx + 1)} / ${pad(n)}`;
      flip.classList.remove("turning");
    }, 780);
  }, 3400);
})();

/* =============== doors =============== */
const stage = $("#stage"), row = $("#row"), scene = $("#scene"), veil = $("#veil"), page = $("#page"), back = $("#back");
const slots = [], infos = [];
DOORS.forEach((d, i) => {
  const s = el("button", "slot"); s.type = "button"; s.dataset.i = i; s.setAttribute("aria-label", "Open " + d.name);
  s.innerHTML = `<span class="door" style="--c:${d.color}"><span class="frame"></span><span class="leaf"><span class="plate">${d.plate.join("<br>")}</span><span class="lever"></span></span><span class="enter">Click to enter</span></span>`;
  row.appendChild(s); slots.push(s);
  const side = i < 2 ? "r" : "l";
  const inf = el("div", "info " + side, `<h3>${d.name}</h3><span class="sub mono">${d.list.sub}</span><ul>${d.list.items.map(x => `<li>${x}</li>`).join("")}</ul>`);
  stage.appendChild(inf); infos.push(inf);
});
let active = -1, busy = false, zoomed = false, openIdx = -1;
function activate(i) {
  if (active !== -1 || isMobile()) return;
  active = i; stage.classList.add("hov");
  const sr = stage.getBoundingClientRect();
  slots.forEach((s, k) => {
    const door = s.firstElementChild;
    door.classList.toggle("active", k === i); door.classList.toggle("dim", k !== i);
    if (k === i) {
      const dr = s.getBoundingClientRect(), cx = dr.left + dr.width / 2 - sr.left, target = (i < 2 ? 0.17 : 0.83) * sr.width;
      door.style.transform = `translateX(${Math.round(target - cx)}px)`;
    }
  });
  infos[i].classList.add("show");
}
function deactivate() {
  if (active === -1) return; active = -1; stage.classList.remove("hov");
  slots.forEach(s => { const d = s.firstElementChild; d.classList.remove("active", "dim"); d.style.transform = ""; });
  infos.forEach(x => x.classList.remove("show"));
}
slots.forEach((s, k) => {
  s.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") activate(k); });
  s.addEventListener("focus", () => activate(k));
  s.addEventListener("click", () => enterDoor(active >= 0 ? active : k));
});
infos.forEach((x, k) => x.addEventListener("click", () => enterDoor(k)));
stage.addEventListener("pointerleave", e => { if (e.pointerType === "mouse") deactivate(); });
stage.addEventListener("focusout", e => { if (!stage.contains(e.relatedTarget)) deactivate(); });

/* ---- zoom through the door, then show the page ---- */
async function enterDoor(i) {
  if (busy) return; busy = true; openIdx = i;
  const door = slots[i].firstElementChild;
  if (reduce) { buildPage(i); await showPage(); return; }
  const dr = slots[i].getBoundingClientRect();
  if (dr.top < 40 || dr.bottom > innerHeight - 20) {
    window.scrollTo({ top: scrollY + dr.top - (innerHeight - dr.height) / 2, behavior: "instant" });
    await wait(60);
  }
  const h = $(".lever", door).getBoundingClientRect(), sc = scene.getBoundingClientRect();
  scene.style.transformOrigin = `${h.left + h.width / 2 - sc.left}px ${h.top + h.height / 2 - sc.top}px`;
  root.style.overflow = "hidden";
  scene.classList.add("zoom"); scene.style.transform = "scale(12)"; zoomed = true;
  await wait(780); veil.classList.add("on");
  await wait(420); buildPage(i); await showPage();
}
function buildPage(i) {
  const d = DOORS[i];
  $("#pageTitle").textContent = d.name; $("#pageLede").textContent = d.page.lede;
  const stack = $("#stack"); stack.innerHTML = "";
  d.page.cards.forEach(c => {
    const links = (c.links || []).map(([l, h]) => `<a href="${h}" target="_blank" rel="noopener">${l}</a>`).join("");
    const card = el("article", "pcard", `<div class="txt"><span class="mono" style="color:var(--rmuted)">${c.label}</span><h3>${c.title}</h3><div class="sub">${c.sub}</div><p class="body">${c.text}</p>
      <div class="pchips">${(c.chips || []).map(x => `<span>${x}</span>`).join("")}</div>${links ? `<div class="plinks">${links}</div>` : ""}</div><div class="vis">${visual(c.visual)}</div>`);
    stack.appendChild(card);
  });
  setActiveNav(d.key);
}
async function showPage() {
  page.hidden = false; page.scrollTop = 0; root.style.overflow = "hidden";
  void page.offsetWidth; page.classList.add("on"); back.classList.add("on"); updateStack();
  nav.classList.add("darkzone"); cord.classList.add("darkzone");
  setTimeout(() => { veil.classList.remove("on"); busy = false; back.focus({ preventScroll: true }); }, 420);
}
async function closePage() {
  if (busy || page.hidden) return; busy = true;
  page.classList.remove("on"); back.classList.remove("on"); veil.classList.add("on");
  await wait(reduce ? 0 : 520);
  page.hidden = true; deactivate();
  if (!zoomed) { $("#doors").scrollIntoView({ behavior: "instant", block: "center" }); }
  if (zoomed && !reduce) {
    scene.classList.remove("zoom"); scene.classList.add("zoomout"); scene.style.transform = "scale(1)";
    veil.classList.remove("on"); await wait(1000);
    scene.classList.remove("zoomout");
  } else { veil.classList.remove("on"); await wait(reduce ? 0 : 300); }
  scene.style.transform = ""; scene.style.transformOrigin = ""; zoomed = false;
  root.style.overflow = ""; busy = false; updateNavState();
  const s = slots[openIdx]; if (s) s.focus({ preventScroll: true });
}
back.addEventListener("click", closePage);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !page.hidden) closePage(); });

/* nav buttons and footer links open a door page directly */
$$("[data-door]").forEach(b => b.addEventListener("click", async () => {
  const i = DOORS.findIndex(d => d.key === b.dataset.door);
  if (i < 0 || busy) return;
  if (!page.hidden) { busy = true; buildPage(i); page.scrollTop = 0; openIdx = i; busy = false; updateStack(); return; }
  busy = true; openIdx = i; zoomed = false; veil.classList.add("on"); await wait(reduce ? 0 : 420);
  buildPage(i); await showPage();
  nav.classList.remove("open"); $("#menu").setAttribute("aria-expanded", "false");
}));

/* visuals for page cards */
function visual(v) {
  if (!v) return "";
  if (v.t === "phone") return `<div class="phone"><div class="nt"></div><div class="q">Speak or type a symptom</div>
    <div class="res g"><span>Green</span><span>Home care</span></div><div class="res y"><span>Yellow</span><span>See a doctor</span></div><div class="res r"><span>Red</span><span>Urgent care</span></div>
    <div class="q">Nearest facility</div><div class="sos">Call 108</div></div>`;
  if (v.t === "modules") return `<div class="modules"><div><b>LiveTrail</b><span>Community-reported fares and crowd levels</span></div><div><b>TrustRadar</b><span>Area safety and vetted local guides</span></div><div><b>Auto-heal</b><span>Rebuilds your day after a disruption</span></div><div><b>Ground Truth</b><span>Stays verified by geotagged guest photos</span></div></div>`;
  if (v.t === "stats") return `<div class="stats3">${v.items.map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("")}</div>`;
  if (v.t === "phases") return `<div class="phases">${[1, 2, 3, 4, 5].map(n => `<div><span>Phase ${n}</span><span class="mono" style="opacity:.6">GTM</span></div>`).join("")}<div><span>60 days</span><span>50 enrollments</span></div></div>`;
  if (v.t === "drift") return `<div class="drift"><svg viewBox="0 0 320 150" role="img" aria-label="Drift detection chart"><line x1="0" y1="52" x2="320" y2="52" stroke="#e6bf63" stroke-dasharray="5 5" opacity=".7"/><polyline fill="none" stroke="#9be3bc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="6,104 40,98 74,106 108,94 142,100 176,86 210,72 244,50 278,34 314,22"/><circle cx="314" cy="22" r="5" fill="#e5484d"/><text x="6" y="40" fill="#a8aba8" font-size="11" font-family="DM Mono,monospace">drift threshold</text><text x="6" y="140" fill="#a8aba8" font-size="11" font-family="DM Mono,monospace">model metric over time</text></svg></div>`;
  if (v.t === "badge") return `<div class="badge"><div class="big">${v.big}</div><div class="small">${v.small}</div><span class="seal">${v.seal}</span></div>`;
  if (v.t === "cloud") return `<div class="cloud">${v.items.map(x => `<span>${x}</span>`).join("")}</div>`;
  return "";
}

/* stacking effect: earlier cards sink as the next one slides over */
function updateStack() {
  const cards = $$(".pcard");
  cards.forEach((c, i) => {
    const nx = cards[i + 1]; if (!nx) { c.style.transform = ""; c.style.filter = ""; return; }
    const cr = c.getBoundingClientRect(), nt = nx.getBoundingClientRect().top;
    const o = clamp((cr.bottom - nt) / cr.height, 0, 1) * (cr.top < 140 ? 1 : 0);
    c.style.transform = o ? `scale(${1 - o * 0.06})` : ""; c.style.filter = o ? `brightness(${1 - o * 0.5})` : "";
  });
}
page.addEventListener("scroll", () => requestAnimationFrame(updateStack), { passive: true });

/* =============== story: pinned timeline =============== */
const story = $("#story"), track = $("#track"), rail = $("#rail"), rdot = $("#rdot");
STORY.forEach(s => track.appendChild(el("article", "ent", `<div class="when mono">${s.range}</div><h3>${s.title}</h3><div class="org">${s.org}</div><ul>${s.pts.map(p => `<li>${p}</li>`).join("")}</ul>`)));
const ents = $$(".ent", track);
const yearEl = $("#year"), digits = [];
for (let i = 0; i < 4; i++) { const g = el("span", "dg"), s = el("i"); s.innerHTML = Array.from({ length: 10 }, (_, k) => `<b>${k}</b>`).join(""); g.appendChild(s); yearEl.appendChild(g); digits.push(s); }
function setYear(y, instant) {
  String(y).split("").forEach((ch, i) => {
    const s = digits[i]; if (instant) s.style.transition = "none";
    s.style.transform = `translateY(-${ch}em)`; if (instant) { void s.offsetWidth; s.style.transition = ""; }
  });
}
function scramble(node, finalText, dur) {
  if (reduce) { node.textContent = finalText; return Promise.resolve(); }
  const set = "abcdefghijklmnopqrstuvwxyz#%&*+?", t0 = performance.now(), n = finalText.length;
  return new Promise(res => {
    const f = t => {
      const k = clamp((t - t0) / dur, 0, 1); let out = "";
      for (let i = 0; i < n; i++) { const c = finalText[i]; out += (c === " " || k >= 0.12 + 0.88 * (i / n)) ? c : set[Math.floor(Math.random() * set.length)]; }
      node.textContent = out; if (k < 1) requestAnimationFrame(f); else res();
    };
    requestAnimationFrame(f);
  });
}
let cur = -1;
function setStory(i, first) {
  if (i === cur) return; cur = i; const s = STORY[i];
  ents.forEach((e, k) => e.classList.toggle("on", k === i));
  setYear(s.year, first); $("#range").textContent = s.range.toUpperCase();
  $("#pcount").textContent = `${String(i + 1).padStart(2, "0")} / ${String(STORY.length).padStart(2, "0")}`;
  $("#pbar").style.width = ((i + 1) / STORY.length * 100) + "%";
  $("#glow").style.setProperty("--glow", s.glow); story.style.setProperty("--glow", s.glow);
  if (!isMobile()) {
    const e = ents[i]; rdot.style.top = "40%";
    track.style.transform = `translateY(${Math.round(rail.clientHeight * 0.4 - e.offsetTop - 14)}px)`;
    if (!first) { const h = $("h3", e), final = STORY[i].title; scramble(h, final, 520); }
  }
}
function sizeStory() {
  if (isMobile()) { story.style.height = ""; track.style.transform = ""; return; }
  story.style.height = Math.round(innerHeight * (1 + (STORY.length - 1) * 0.55)) + "px";
}
function storyScroll() {
  if (isMobile()) return;
  const r = story.getBoundingClientRect(), total = story.offsetHeight - innerHeight;
  const p = clamp(-r.top / Math.max(1, total), 0, 1);
  setStory(Math.min(STORY.length - 1, Math.floor(p * STORY.length)));
}
const mio = new IntersectionObserver(es => { if (!isMobile()) return; es.forEach(e => { if (e.isIntersecting) setStory(ents.indexOf(e.target)); }); }, { rootMargin: "-45% 0px -45% 0px" });
ents.forEach(e => mio.observe(e));
sizeStory(); setStory(0, true); storyScroll();
let rz; addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => { sizeStory(); cur = -1; setStory(isMobile() ? 0 : cur < 0 ? 0 : cur, true); storyScroll(); resizeDust(); }, 150); });

/* ember dust behind the story */
const cv = $("#dust"), cx = cv.getContext("2d"); let dust = [], visible = false, dprr = 1;
function resizeDust() { dprr = Math.min(2, devicePixelRatio || 1); cv.width = cv.clientWidth * dprr; cv.height = cv.clientHeight * dprr; }
function seedDust() { dust = Array.from({ length: 46 }, () => ({ x: Math.random(), y: Math.random(), r: 0.5 + Math.random() * 1.6, v: 0.015 + Math.random() * 0.05, a: 0.15 + Math.random() * 0.55, p: Math.random() * 6 })); }
function drawDust(t) {
  if (!visible) return;
  cx.clearRect(0, 0, cv.width, cv.height);
  dust.forEach(d => {
    d.y -= d.v / 60; if (d.y < -0.02) { d.y = 1.02; d.x = Math.random(); }
    const x = (d.x + Math.sin(t / 2400 + d.p) * 0.01) * cv.width, y = d.y * cv.height;
    cx.globalAlpha = d.a * (0.6 + 0.4 * Math.sin(t / 700 + d.p)); cx.fillStyle = "#ffd98a"; cx.beginPath(); cx.arc(x, y, d.r * dprr, 0, 6.283); cx.fill();
  });
  requestAnimationFrame(drawDust);
}
if (!reduce) {
  seedDust(); resizeDust();
  new IntersectionObserver(es => { const v = es[0].isIntersecting; if (v && !visible) { visible = true; requestAnimationFrame(drawDust); } visible = v; }).observe(story);
}

/* =============== contact: scrambling headline =============== */
(function () {
  const l1 = $("#cl1"), l2 = $("#cl2"), h = $("#contact-h"), t1 = l1.textContent, t2 = l2.textContent;
  const map = document.getElementById("warpmap");
  let cur = 0, target = 0, raf = null;
  const step = () => { cur += (target - cur) * 0.12; if (map) map.setAttribute("scale", cur.toFixed(1));
    if (Math.abs(target - cur) > 0.3) raf = requestAnimationFrame(step); else { raf = null; if (!target) h.style.filter = ""; } };
  const warp = t => { if (reduce || !map) return; target = t; if (t) h.style.filter = "url(#warp)"; if (!raf) raf = requestAnimationFrame(step); };
  h.addEventListener("pointerenter", () => warp(24)); h.addEventListener("pointerleave", () => warp(0));
  if (reduce) return;
  new IntersectionObserver((es, ob) => { if (!es[0].isIntersecting) return; ob.disconnect(); cur = 46; warp(0); scramble(l1, t1, 700); setTimeout(() => scramble(l2, t2, 900), 180); }, { threshold: 0.6 }).observe(h);
  l1.textContent = ""; l2.textContent = ""; setTimeout(() => { if (!l1.textContent) { l1.textContent = t1; l2.textContent = t2; } }, 6000);
})();

/* =============== nav =============== */
const nav = $("#nav");
function setActiveNav(doorKey) {
  $$(".nav [data-nav]").forEach(a => a.classList.remove("on"));
  $$(".nav [data-door]").forEach(b => b.classList.toggle("on", b.dataset.door === doorKey));
}
function updateNavState() {
  if (!page.hidden) return;
  const y = scrollY + innerHeight * 0.4, hero = $("#top").offsetHeight;
  const which = y >= $("#contact").offsetTop - 200 ? "contact" : y >= $("#resume").offsetTop - 200 ? "resume" : y >= story.offsetTop ? "story" : "home";
  $$(".nav [data-door]").forEach(b => b.classList.remove("on"));
  $$(".nav [data-nav]").forEach(a => a.classList.toggle("on", a.dataset.nav === which));
  const dz = scrollY > hero - 70; nav.classList.toggle("darkzone", dz); cord.classList.toggle("darkzone", dz);
}
let ticking = false;
addEventListener("scroll", () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { updateNavState(); storyScroll(); ticking = false; }); }, { passive: true });
updateNavState();
$("#menu").addEventListener("click", () => { const o = nav.classList.toggle("open"); $("#menu").setAttribute("aria-expanded", String(o)); });
$$("[data-go]").forEach(b => b.addEventListener("click", () => { const t = $(b.dataset.go); if (t) t.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); }));
$$(".nav a[href^='#']").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); $("#menu").setAttribute("aria-expanded", "false"); }));
})();
