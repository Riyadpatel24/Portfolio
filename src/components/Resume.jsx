import { useState } from 'react'
import './Resume.css'

const resumeData = {
  skills: [
    { cat: 'Languages', pills: ['Python', 'Java', 'JavaScript ES6+', 'HTML & CSS', 'SQL'] },
    { cat: 'Frameworks', pills: ['React', 'FastAPI', 'Spring Boot', 'Groq SDK', 'Docker', 'uvicorn', 'pytest', 'SpeechRecognition', 'psutil'] },
    { cat: 'Cloud & DevOps', pills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'IAM', 'VPC', 'Git & GitHub', 'REST APIs', 'Microservices'] },
    { cat: 'Concepts', pills: ['Agentic AI Systems', 'Async & Multithreading', 'Chaos Engineering', 'TDD', 'NoSQL'] },
  ],
  projects: [
    {
      index: '01',
      name: 'VoiceOS — AI Desktop Assistant',
      github: 'github.com/Riyadpatel24',
      href: 'https://github.com/Riyadpatel24',
      bullets: [
        'Agentic tool-use loop with ThreadPoolExecutor — read-only tools run in parallel, state-mutating tools sequentially, keeping UI fully responsive during multi-step AI reasoning',
        '3-tier security sandbox (SAFE / MODERATE / BLOCKED) using regex; file I/O locked to safe directories, system-critical commands permanently rejected at the guard layer',
        '95%+ pytest coverage across 30+ test cases; crash-safe persistent memory via atomic file replacement retains session history and tool logs across restarts',
        'Exponential backoff retry on rate limits and 5xx errors; integrated STT/TTS voice control, screenshot capture, and live system metrics',
      ],
    },
    {
      index: '02',
      name: 'Adaptive System — Autonomous SRE Platform',
      github: 'github.com/Riyadpatel24/adaptive_system',
      href: 'https://github.com/Riyadpatel24/adaptive_system',
      bullets: [
        'Self-healing SRE loop: telemetry ingestion → signal normalisation → health classification → LOCKDOWN/THROTTLE actions via safety guard and cooldown manager',
        'Failure prediction from rolling risk histories and root cause analysis via DependencyGraph; PolicyEngine adapts timeout and retry limits based on live failure rates',
        'Chaos engineering via CPU spike & memory leak fault injection; FastAPI daemon thread serves live snapshots at /snapshot for real-time observability',
      ],
    },
    {
      index: '03',
      name: 'VoiceNotes Organizer — AI Audio-to-Notes Pipeline',
      github: 'github.com/Riyadpatel24/voicenotes-organizer',
      href: 'https://github.com/Riyadpatel24/voicenotes-organizer',
      bullets: [
        'React + FastAPI pipeline: audio transcribed via Groq Whisper Large V3, then structured by LLaMA 3.3 70B into summaries, action items, deadlines, and decisions in JSON',
        'Modular architecture cleanly separates transcription and structuring layers — AI models swappable without changing any downstream logic',
      ],
    },
  ],
  education: [
    {
      year: '2023 — 2027',
      title: 'B.Tech — Computer Science & Engineering',
      org: 'P P Savani University · Surat, Gujarat',
      coursework: ['DSA', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'],
      badge: 'Degree',
      badgeClass: 'badge-degree',
    },
  ],
  certifications: [
    {
      year: 'Jun 2025',
      title: 'IBM Java Developer Professional Certificate',
      org: 'Coursera / IBM · 11 courses · Spring Boot, Microservices, Docker, REST APIs, NoSQL/SQL, Generative AI',
      badge: 'Certified',
      badgeClass: 'badge-cert',
    },
    {
      year: 'Nov 2025',
      title: 'AWS Academy Graduate — Cloud Foundations',
      org: 'Amazon Web Services · 20 hrs · EC2, S3, RDS, IAM, VPC, cloud security fundamentals',
      badge: 'Certified',
      badgeClass: 'badge-cert',
    },
  ],
}

const TABS = ['skills', 'projects', 'education', 'certifications']

export default function Resume() {
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section className="section" id="resume">

      {/* Section label — same pattern as all other sections */}
      <div className="section-label reveal">
        <span className="section-num">04 /</span>
        <h2 className="section-title">Resume</h2>
        <div className="section-line" />
        <a
          href="/RIYA_PATEL.pdf"
          download="Riya_Patel_Resume.pdf"
          className="resume-dl-btn"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </a>
      </div>

      {/* Tab bar */}
      <div className="resume-tabs reveal">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`resume-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* SKILLS — reuses your existing .skills-table / .skill-row classes */}
      {activeTab === 'skills' && (
        <div className="resume-content skills-table reveal">
          {resumeData.skills.map(row => (
            <div className="skill-row" key={row.cat}>
              <span className="skill-cat">{row.cat}</span>
              <div className="skill-items">
                {row.pills.map(p => <span className="skill-pill" key={p}>{p}</span>)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PROJECTS — reuses your existing .projects-list / .project-row classes */}
      {activeTab === 'projects' && (
        <div className="resume-content projects-list reveal">
          {resumeData.projects.map(p => (
            <a
              key={p.index}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row"
            >
              <span className="project-index">{p.index}</span>
              <div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-sub">{p.github}</p>
                <ul className="resume-bullets">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              <span className="project-link">↗</span>
            </a>
          ))}
        </div>
      )}

      {/* EDUCATION — reuses your existing .edu-table / .edu-row classes */}
      {activeTab === 'education' && (
        <div className="resume-content edu-table reveal">
          {resumeData.education.map(e => (
            <div className="edu-row edu-row--tall" key={e.title}>
              <span className="edu-year">{e.year}</span>
              <div>
                <p className="edu-title">{e.title}</p>
                <p className="edu-org">{e.org}</p>
                <div className="edu-coursework">
                  {e.coursework.map(c => (
                    <span className="stack-tag" key={c}>{c}</span>
                  ))}
                </div>
              </div>
              <span className={`edu-badge ${e.badgeClass}`}>{e.badge}</span>
            </div>
          ))}
        </div>
      )}

      {/* CERTIFICATIONS — reuses .edu-table / .edu-row classes */}
      {activeTab === 'certifications' && (
        <div className="resume-content edu-table reveal">
          {resumeData.certifications.map(c => (
            <div className="edu-row" key={c.title}>
              <span className="edu-year">{c.year}</span>
              <div>
                <p className="edu-title">{c.title}</p>
                <p className="edu-org">{c.org}</p>
              </div>
              <span className={`edu-badge ${c.badgeClass}`}>{c.badge}</span>
            </div>
          ))}
        </div>
      )}

    </section>
  )
}