
const navItems = [
  ["Home", "index.html", "⌂"],
  ["Adommo Teachers", "adommo-teachers.html", "♙"],
  ["Previous Tournaments", "previous-tournaments.html", "▣"],
  ["Adommo Classroom", "adommo-classroom.html", "▤"],
  ["Player List", "players.html", "♟"],
  ["Teams", "teams.html", "⚽"],
  ["Points Table", "points-table.html", "▥"],
  ["Player Registration", "registration.html", "＋"]
];

const currentPage =
  location.pathname.split("/").pop() || "index.html";

const host = document.getElementById("site-header");

if (host) {
  host.innerHTML = `
    <button class="menu-toggle" id="menu-toggle">☰</button>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>

    <aside class="site-header" id="sidebar">
      <a class="brand" href="index.html">
        <div class="brand-mark">⚽</div>
        <div>
          <div class="brand-name">ADOMMO</div>
          <div class="brand-sub">TOURNAMENT 2026</div>
        </div>
      </a>

      <div class="nav-label">TOURNAMENT MENU</div>

      <nav class="side-nav">
        ${navItems.map(item => `
          <a href="${item[1]}"
             class="${currentPage === item[1] ? "active" : ""}">
            <span class="nav-icon">${item[2]}</span>
            <span>${item[0]}</span>
          </a>
        `).join("")}
      </nav>

      <div class="sidebar-bottom">
        <strong>ADOMMO TOURNAMENT 2026</strong>
        One dream. One team. One champion.
      </div>
    </aside>
  `;

  const toggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  function closeMenu() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  }

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", closeMenu);

  sidebar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

const form = document.getElementById("registration-form");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    document.getElementById("form-message").textContent =
      "Demo only: data has NOT been saved. Database connection will be added next.";
  });
}

const pageTitle = document.getElementById("page-title");
const pageContent = document.getElementById("page-content");
const menuLinks = document.querySelectorAll(".menu a");
const sidebar = document.querySelector(".sidebar");
const menuToggle = document.getElementById("menu-toggle");

const pages = {
  
home: {
  title: "Home",
  content: `
    <div class="home-page">

      <div class="welcome-banner">
        <div class="welcome-text">
          <span class="season-label">★ THE ULTIMATE BATTLE</span>
          <h1>ADOMMO<br><span>TOURNAMENT 2026</span></h1>
          <p>One Tournament. One Champion. Unlimited Glory.</p>
          <button class="home-cta" onclick="document.querySelector('[data-page=registration]').click()">
            Register as Player ↗
          </button>
        </div>
        <div class="trophy-art">🏆</div>
        <div class="banner-orb"></div>
      </div>

      <div class="section-heading">
        <div>
          <span class="eyebrow">TOURNAMENT OVERVIEW</span>
          <h2>Dashboard</h2>
        </div>
        <span class="live-badge"><span></span> SEASON 2026</span>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon blue-icon">♟</div>
          <p>Total Players</p>
          <h3>--</h3>
          <small>Player data coming soon</small>
        </div>

        <div class="stat-card">
          <div class="stat-icon purple-icon">🛡️</div>
          <p>Total Teams</p>
          <h3>--</h3>
          <small>Team data coming soon</small>
        </div>

        <div class="stat-card">
          <div class="stat-icon gold-icon">🏆</div>
          <p>Matches Played</p>
          <h3>--</h3>
          <small>Match data coming soon</small>
        </div>

        <div class="stat-card">
          <div class="stat-icon green-icon">📊</div>
          <p>Points Table</p>
          <h3>View</h3>
          <small>Check team standings</small>
          <button class="text-link" onclick="document.querySelector('[data-page=points]').click()">
            Open standings →
          </button>
        </div>
      </div>

      <div class="home-bottom-grid">
        <div class="home-panel">
          <div class="panel-heading">
            <div>
              <span class="eyebrow">ON THE FIELD</span>
              <h2>Upcoming Matches</h2>
            </div>
            <span class="panel-emoji">⚽</span>
          </div>
          <div class="empty-state">
            <div class="empty-icon">📅</div>
            <h3>Fixtures Coming Soon</h3>
            <p>Match schedules will appear here when they are announced.</p>
          </div>
        </div>

        <div class="home-panel quick-panel">
          <div class="panel-heading">
            <div>
              <span class="eyebrow">GET STARTED</span>
              <h2>Quick Access</h2>
            </div>
            <span class="panel-emoji">⚡</span>
          </div>

          <button class="quick-link" onclick="document.querySelector('[data-page=players]').click()">
            <span class="quick-icon">👥</span>
            <span><b>Player List</b><small>Explore the players</small></span>
            <span class="quick-arrow">↗</span>
          </button>

          <button class="quick-link" onclick="document.querySelector('[data-page=teams]').click()">
            <span class="quick-icon">🛡️</span>
            <span><b>Explore Teams</b><small>Meet the competitors</small></span>
            <span class="quick-arrow">↗</span>
          </button>

          <button class="quick-link" onclick="document.querySelector('[data-page=registration]').click()">
            <span class="quick-icon">📝</span>
            <span><b>Player Registration</b><small>Join the tournament</small></span>
            <span class="quick-arrow">↗</span>
          </button>
        </div>
      </div>

      <div class="home-footer">
        <span>ADOMMO TOURNAMENT 2026</span>
        <span>PLAY WITH PRIDE. PLAY TO WIN.</span>
      </div>

    </div>
  `
},
  teachers: {
  title: "Adommo Teachers",
  content: `
    <div class="teachers-page">

      <div class="teachers-heading">
        <h1>Meet Our Teachers</h1>
        <p>Learn from the best minds of Adommo</p>
      </div>

      <div class="teachers-grid">

        <div class="teacher-card">
          <img src="teacher1.png" alt="Ashfaq Ahmed">
          <div class="teacher-info">
            <h2>Ashfaq Ahmed</h2>
            <p><strong>University:</strong> CUET</p>
            <p><strong>Department:</strong> ME</p>
            <div class="teacher-subject">
              <span>Physics</span>
            </div>
          </div>
        </div>

        <div class="teacher-card">
          <img src="teacher2.png" alt="Rabiul Islam Pulock">
          <div class="teacher-info">
            <h2>Rabiul Islam Pulock</h2>
            <p><strong>University:</strong> CU</p>
            <p><strong>Department:</strong> Pharmacy</p>
            <div class="teacher-subject">
              <span>Chemistry</span>
              <span>Biology</span>
            </div>
          </div>
        </div>

        <div class="teacher-card">
          <img src="teacher3.png" alt="Habibur Rahman">
          <div class="teacher-info">
            <h2>Habibur Rahman</h2>
            <p><strong>University:</strong> Tejgaon</p>
            <p><strong>Department:</strong> Biochemistry</p>
            <div class="teacher-subject">
              <span>English</span>
            </div>
          </div>
        </div>

        <div class="teacher-card">
          <img src="teacher4.png" alt="Jahid Hasan">
          <div class="teacher-info">
            <h2>Jahid Hasan</h2>
            <p><strong>University:</strong> CVC</p>
            <p><strong>Department:</strong> Mathematics</p>
            <div class="teacher-subject">
              <span>Math</span>
              <span>ICT</span>
            </div>
          </div>
        </div>

        <div class="teacher-card">
          <img src="teacher5.png" alt="Nahid Hasan">
          <div class="teacher-info">
            <h2>Nahid Hasan</h2>
            <p><strong>University:</strong> CVC</p>
            <p><strong>Department:</strong> English</p>
            <div class="teacher-subject">
              <span>English</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
},
  previous: {
    title: "Previous Tournaments",
    content: `
      <h1>Previous Tournaments</h1>
      <p>Previous tournament information will appear here.</p>
    `
  },
  classroom: {
    title: "Adommo Classroom",
    content: `
      <h1>Adommo Classroom</h1>
      <p>Classroom information will appear here.</p>
    `
  },
  players: {
    title: "Player List",
    content: `
      <h1>Player List</h1>
      <p>Registered players will appear here.</p>
    `
  },
  teams: {
    title: "Teams",
    content: `
      <h1>Teams</h1>
      <p>Tournament teams will appear here.</p>
    `
  },
  points: {
    title: "Points Table",
    content: `
      <h1>Points Table</h1>
      <p>Team points and rankings will appear here.</p>
    `
  },
  
registration: {
  title: "Player Registration",
  content: `
    <div class="registration-banner">
      <div>
        <span class="reg-eyebrow">ADOMMO TOURNAMENT 2026</span>
        <h1>Join The Battle!</h1>
        <p>Show your skills. Represent your team. Make history.</p>
      </div>
      <div class="reg-trophy">🏆</div>
    </div>

    <div class="registration-layout">

      <div class="registration-form-card">
        <div class="reg-heading">
          <div class="reg-heading-icon">📝</div>
          <div>
            <h2>Player Registration</h2>
            <p>Ready to become a part of Adommo Tournament 2026?</p>
          </div>
        </div>

        <div class="reg-divider"></div>

        <div style="text-align:center;padding:25px 10px;">
          <div style="font-size:65px;margin-bottom:15px;">⚽</div>

          <h2 style="color:#123c75;margin-bottom:12px;">
            Register Yourself Now!
          </h2>

          <p style="color:#64748b;font-size:13px;line-height:1.8;margin-bottom:25px;">
            Click the button below and complete your player registration
            through our official Google Form.
          </p>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLScKf-cLKyRaLR395Cw4HfFnre_hY_WK5773nkUfif-8J2GgZg/viewform"
   target="_blank"
   rel="noopener noreferrer">
   REGISTER NOW ↗
</a>
     <p style="margin-top:18px;color:#94a3b8;font-size:11px;">
            Official Adommo Tournament 2026 Registration
          </p>
        </div>
      </div>

      <aside class="registration-info">
        <div class="reg-info-icon">🏆</div>
        <span class="reg-eyebrow">READY TO PLAY?</span>
        <h2>Your Journey Starts Here.</h2>
        <p>Become a part of the ultimate Adommo Tournament experience.</p>

        <div class="reg-benefit">
          <span>✓</span>
          <div>
            <div class="reg-benefit">
          <span>✓</span>
          <div>
            <b>Represent Your Team</b>
            <small>Show your skills and team spirit.</small>
          </div>
        </div>

        <div class="reg-benefit">
          <span>✓</span>
          <div>
            <b>Play With Pride</b>
            <small>Be part of Adommo 2026.</small>
          </div>
        </div>

        <div class="reg-info-footer">
          ADOMMO TOURNAMENT<br>2026
        </div>
      </aside>

    </div>
  `
},
};

menuLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const page = link.dataset.page;
    const selectedPage = pages[page];

    if (!selectedPage) return;

    pageTitle.textContent = selectedPage.title;
    pageContent.innerHTML = selectedPage.content;

    menuLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");

    sidebar.classList.remove("open");
  });
});

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

const welcomeScreen = document.getElementById("welcome-screen");
const enterButton = document.getElementById("enter-tournament");

enterButton.addEventListener("click", () => {
  welcomeScreen.classList.add("hide-welcome");

  setTimeout(() => {
    welcomeScreen.style.display = "none";
  }, 900);
});

document.getElementById("page-content").addEventListener("submit", function (event) {
  if (event.target.id !== "player-registration-form") return;

  event.preventDefault();

  const form = event.target;
  const message = document.getElementById("registration-message");

  if (!form.reportValidity()) return;

  const phone = form.elements.phone.value.trim();

  if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
    message.className = "show-message error";
    message.textContent = "Please enter a valid phone number.";
    return;
  }

  message.className = "show-message success";
  message.textContent =
    "Form checked successfully! Database is not connected yet, so your registration has NOT been saved.";

  // Database connect korar por ekhane save korar code add hobe.
});
