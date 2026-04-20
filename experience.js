// Experience data — single source of truth. Add new roles at the top.
// HTML structure is rendered by renderExperience() below.

const experienceData = [
    {
        id: "exp-1",
        dateStart: "2025-07",
        dateEnd: null,
        dateLabel: "Jul 2025 — Present",
        company: "Redica Systems",
        location: "Bengaluru, India",
        role: "Data Engineer",
        duration: null,
        summaryHtml:
            "Building scalable data acquisition pipelines on <strong>AWS + Snowflake</strong> that onboard global regulatory datasets — powering high-fidelity compliance intelligence for leading pharmaceutical clients.",
        skills: [
            "Data Acquisition",
            "AWS",
            "DynamoDB",
            "Astronomer",
            "Scrapy",
            "Playwright",
            "Snowflake",
            "CursorAI",
            "Apify",
            "Python",
        ],
    },
    {
        id: "exp-2",
        dateStart: "2024-11",
        dateEnd: "2025-07",
        dateLabel: "Nov 2024 — Jul 2025",
        company: "BT Group",
        location: "Bengaluru, India",
        role: "Data Engineer",
        duration: "9 months",
        summaryHtml:
            "Spearheaded enterprise <strong>Oracle EDW → GCP</strong> migration with <strong>BigQuery, Cloud Composer &amp; Terraform</strong>, and built a deletion framework purging <strong>100K+ stale records/month</strong> — modernizing infrastructure and keeping Adobe Marketo campaigns in sync.",
        skills: [
            "Database Migration",
            "GCP",
            "ETL",
            "Airflow (Cloud Composer)",
            "BigQuery",
            "Terraform",
            "Python",
        ],
    },
    {
        id: "exp-3",
        dateStart: "2022-07",
        dateEnd: "2024-10",
        dateLabel: "Jul 2022 — Oct 2024",
        company: "Incedo Inc.",
        location: "Gurugram, India",
        role: "Senior Software Engineer — Lighthouse™ (Data)",
        duration: "2 years 4 months",
        summaryHtml:
            "Led a <strong>RASA + LLM</strong> conversational AI chatbot for KPI-Tree creation that drove a <strong>40% efficiency improvement</strong> in decision-making, alongside a <strong>PostgreSQL → OracleDB</strong> migration with <strong>99.9% data accuracy</strong>.",
        skills: [
            "Python",
            "PySpark",
            "Gen-AI",
            "RASA",
            "Java",
            "SpringBoot",
            "Airflow",
            "PostgreSQL",
            "OracleDB",
            "Redash",
            "SonarQube",
        ],
    },
    {
        id: "exp-4",
        dateStart: "2021-11",
        dateEnd: "2022-08",
        dateLabel: "Nov 2021 — Aug 2022",
        company: "Scaler",
        location: "Remote",
        role: "Freelance Technical Content Writer",
        duration: "10 months",
        summaryHtml:
            'Demystified <strong>OOP, design patterns &amp; DSA</strong> through <strong>27</strong> engaging articles — empowering <strong>24K+</strong> learners on the <a href="https://www.scaler.com/topics/author/vaibhav-gulati/" target="_blank" rel="noopener noreferrer">Scaler Topics platform</a>.',
        skills: [
            "Technical Writing",
            "OOP",
            "Design Patterns",
            "SQL",
            "Java",
            "Data Structures & Algorithms",
        ],
    },
];

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    })[c]);
}

function renderExperience(data) {
    const list = document.querySelector(".exp-list");
    if (!list) return;

    list.innerHTML = data
        .map((exp) => {
            const dateHtml = exp.dateEnd
                ? `<time datetime="${exp.dateStart}">${exp.dateLabel.split(" — ")[0]}</time> — <time datetime="${exp.dateEnd}">${exp.dateLabel.split(" — ")[1]}</time>`
                : `<time datetime="${exp.dateStart}">${exp.dateLabel.split(" — ")[0]}</time> — Present`;

            const durationHtml = exp.duration
                ? ` <span class="exp-duration">· ${escapeHtml(exp.duration)}</span>`
                : "";

            const skillsHtml = exp.skills.join(" · ");

            return `
<li class="exp-item">
    <button class="exp-header" aria-expanded="false" aria-controls="${exp.id}" type="button">
        <span class="exp-date">${dateHtml}</span>
        <span class="exp-meta">
            <strong class="exp-company">${escapeHtml(exp.company)}${durationHtml}</strong>
            <span class="exp-role">${escapeHtml(exp.role)} · ${escapeHtml(exp.location)}</span>
        </span>
        <span class="exp-chevron" aria-hidden="true"></span>
    </button>
    <div id="${exp.id}" class="exp-body" hidden>
        <ul class="exp-bullets">
            <li>${exp.summaryHtml}</li>
        </ul>
        <p class="exp-skills"><strong>Skills:</strong> ${escapeHtml(skillsHtml)}</p>
    </div>
</li>`;
        })
        .join("");
}

document.addEventListener("DOMContentLoaded", () => renderExperience(experienceData));
