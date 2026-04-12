import { useEffect, useRef, useState } from 'react'
import heroPhoto from './assets/photo.png'
import './index.css'

const EMAIL = 'rdp2245@gmail.com'

const marqueeItems = [
  'Python', 'Agentic AI', 'FastAPI', 'React', 'Docker', 'AWS',
  'Spring Boot', 'Chaos Engineering', 'Microservices', 'TDD',
  'Groq SDK', 'LLaMA 3.3', 'Whisper', 'Async Programming',
]

// ─── DATA ──────────────────────────────────────────────────────────
const skillGroups = [
  {
    label: 'Languages',
    tags: ['Python', 'Java', 'JavaScript ES6+', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Frameworks & Tools',
    tags: ['React', 'FastAPI', 'Spring Boot', 'Docker', 'Groq SDK', 'pytest', 'uvicorn', 'SpeechRecognition', 'Git & GitHub'],
  },
  {
    label: 'Cloud & Concepts',
    tags: ['AWS EC2', 'AWS S3', 'AWS RDS', 'IAM & VPC', 'REST APIs', 'Microservices', 'Agentic AI', 'Chaos Engineering', 'TDD', 'NoSQL', 'Async & Multithreading'],
  },
]

const projects = [
  {
    num: 'Project 01',
    name: 'VoiceOS — AI Desktop Assistant',
    tagline: 'github.com/Riyadpatel24',
    href: 'https://github.com/Riyadpatel24',
    desc: 'Voice-controlled AI assistant with async execution and a 3-tier security sandbox (SAFE / MODERATE / BLOCKED). Read-only tools run in parallel via ThreadPoolExecutor; state-mutating tools run sequentially — keeping UI responsive during multi-step AI reasoning. Crash-safe persistent memory via atomic file replacement, 95%+ pytest coverage across 30+ test cases.',
    chips: ['Python', 'Agentic AI', 'ThreadPoolExecutor', 'STT / TTS', 'pytest', 'psutil'],
    bullets: [
      'Agentic tool-use loop with ThreadPoolExecutor — read-only tools in parallel, state-mutating tools sequentially',
      '3-tier security sandbox (SAFE / MODERATE / BLOCKED) with regex; system-critical commands permanently rejected at guard layer',
      '95%+ pytest coverage across 30+ test cases; crash-safe persistent memory via atomic file replacement',
      'Exponential backoff retry on rate limits; integrated STT/TTS voice control and live system metrics',
    ],
  },
  {
    num: 'Project 02',
    name: 'Adaptive System — Autonomous SRE Platform',
    tagline: 'github.com/Riyadpatel24/adaptive_system',
    href: 'https://github.com/Riyadpatel24/adaptive_system',
    desc: 'Self-tuning SRE platform with real-time telemetry, failure prediction via DependencyGraph, and chaos engineering via CPU spike & memory leak injection. PolicyEngine adapts timeout and retry limits based on live failure rates, with a FastAPI daemon serving live snapshots at /snapshot.',
    chips: ['FastAPI', 'Python', 'Chaos Engineering', 'Microservices', 'SRE'],
    bullets: [
      'Self-healing SRE loop: telemetry ingestion → signal normalisation → health classification → LOCKDOWN/THROTTLE actions',
      'Failure prediction from rolling risk histories; PolicyEngine adapts timeout/retry limits on live failure rates',
      'Chaos engineering via CPU spike & memory leak fault injection; FastAPI daemon for real-time observability',
    ],
  },
  {
    num: 'Project 03',
    name: 'VoiceNotes Organizer — AI Audio-to-Notes Pipeline',
    tagline: 'github.com/Riyadpatel24/voicenotes-organizer',
    href: 'https://github.com/Riyadpatel24/voicenotes-organizer',
    desc: 'Full-stack pipeline: audio upload → Groq Whisper Large V3 transcription → LLaMA 3.3 70B structures output into summaries, action items, deadlines, and decisions as JSON. Modular architecture keeps AI models swappable without changing any downstream logic.',
    chips: ['React', 'FastAPI', 'Groq SDK', 'LLaMA 3.3 70B', 'Whisper Large V3'],
    bullets: [
      'React + FastAPI pipeline: audio transcribed via Groq Whisper Large V3, structured by LLaMA 3.3 70B into JSON',
      'Modular architecture separates transcription and structuring — AI models swappable without changing downstream logic',
    ],
  },
]

const educationCards = [
  {
    period: '2023 — 2027',
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'P P Savani University, Surat, Gujarat',
    courses: 'Data Structures & Algorithms · DBMS · Operating Systems · Computer Networks · OOP',
    courseTags: ['DSA', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'],
    type: 'degree',
  },
  {
    period: 'Jun 2025',
    degree: 'IBM Java Developer Professional Certificate',
    school: 'Coursera / IBM · 11 Courses',
    courses: 'Spring Boot · Microservices · Docker · REST APIs · NoSQL/SQL · Generative AI',
    type: 'cert',
  },
  {
    period: 'Nov 2025',
    degree: 'AWS Academy Graduate — Cloud Foundations',
    school: 'Amazon Web Services · 20 Hours',
    courses: 'EC2 · S3 · RDS · IAM · VPC · Cloud Security Fundamentals',
    type: 'cert',
  },
  {
    period: 'Languages',
    degree: 'Multilingual',
    school: 'Spoken & written proficiency',
    type: 'lang',
    langs: [
      { name: 'English', lvl: 'C1' },
      { name: 'Hindi', lvl: 'Native' },
      { name: 'Gujarati', lvl: 'Native' },
      { name: 'German', lvl: 'A1' },
      { name: 'Mandarin', lvl: 'A2' },
    ],
  },
]

const contactLinks = [
  { label: 'Email', val: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Phone', val: '+91 9510177953', href: 'tel:+919510177953' },
  { label: 'LinkedIn', val: 'riya-patel-b00ab42bb', href: 'https://linkedin.com/in/riya-patel-b00ab42bb', external: true },
  { label: 'GitHub', val: 'Riyadpatel24', href: 'https://github.com/Riyadpatel24', external: true },
  { label: 'LeetCode', val: 'r_24', href: 'https://leetcode.com/u/r_24', external: true },
]

// ─── RESUME SECTION ──────────────────────────────────────────────
const RESUME_TABS = ['skills', 'projects', 'education', 'certifications']

function ResumeSection() {
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section className="section" id="resume">
      <div className="section-header reveal">
        <span className="section-num">04</span>
        <h2 className="section-title">Resume</h2>
        <div className="section-line" />
        <a href="/RIYA_PATEL.pdf" download="Riya_Patel_Resume.pdf" className="resume-dl-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </a>
      </div>

      <div className="resume-tabs reveal">
        {RESUME_TABS.map(tab => (
          <button
            key={tab}
            className={`resume-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'skills' && (
        <div className="resume-content skills-wrapper">
          {skillGroups.map(group => (
            <div className="reveal" key={group.label}>
              <p className="skill-group-label">{group.label}</p>
              <div className="skill-tags">
                {group.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'projects' && (
        <div className="resume-content projects-grid">
          {projects.map(p => (
            <a key={p.num} href={p.href} target="_blank" rel="noopener noreferrer" className="project-item reveal">
              <div className="project-inner">
                <div>
                  <p className="project-num">{p.num}</p>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-tagline">{p.tagline}</p>
                  <ul className="resume-bullets">
                    {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                  <div className="project-chips" style={{ marginTop: '1rem' }}>
                    {p.chips.map(c => <span className="project-chip" key={c}>{c}</span>)}
                  </div>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      )}

      {activeTab === 'education' && (
        <div className="resume-content edu-grid">
          <div className="edu-card reveal" style={{ gridColumn: '1 / -1' }}>
            <p className="edu-period">{educationCards[0].period}</p>
            <h3 className="edu-degree">{educationCards[0].degree}</h3>
            <p className="edu-school">{educationCards[0].school}</p>
            <p className="edu-courses">{educationCards[0].courses}</p>
            <div className="edu-card-coursework">
              {educationCards[0].courseTags.map(t => <span className="edu-chip" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'certifications' && (
        <div className="resume-content edu-grid">
          {[educationCards[1], educationCards[2]].map(c => (
            <div key={c.degree} className="edu-card reveal">
              <p className="edu-period">{c.period}</p>
              <h3 className="edu-degree">{c.degree}</h3>
              <p className="edu-school">{c.school}</p>
              <p className="edu-courses">{c.courses}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

// ─── MAIN APP ────────────────────────────────────────────────────
export default function App() {
  const canvasRef = useRef(null)

  // ── Particle + connection line canvas ──
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight
    let mouse = { x: W / 2, y: H / 2 }

    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    const onMouse = e => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouse)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.35 + 0.08,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(196,98,45,${0.07 * (1 - d / 130)})`
            ctx.lineWidth = 0.7
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        // mouse proximity lines
        const mdx = a.x - mouse.x, mdy = a.y - mouse.y
        const md = Math.sqrt(mdx * mdx + mdy * mdy)
        if (md < 110) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(196,98,45,${0.18 * (1 - md / 110)})`
          ctx.lineWidth = 1
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }

      // move & draw dots
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(196,98,45,${p.opacity})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  // ── Scroll reveal ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Background */}
      <canvas ref={canvasRef} id="bg-canvas" />
      <div className="bg-dots" />
      <div className="bg-grain" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      {/* NAV */}
      <nav>
        <span className="nav-logo">riya.patel</span>
        <ul className="nav-links">
          {['about', 'skills', 'projects', 'education', 'resume', 'contact'].map(s => (
            <li key={s}><a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
          ))}
        </ul>
        <a href={`mailto:${EMAIL}`} className="nav-hire">Hire me →</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="about">
        <div className="hero-text">
          <p className="hero-eyebrow">Software Developer &amp; AI Builder</p>
          <h1 className="hero-name">
            Riya<br />
            <span className="hero-name-italic">Patel.</span>
          </h1>
          <p className="hero-role">B.Tech CSE · PP Savani University · 2023–2027</p>
          <p className="hero-bio">
            I build agentic AI systems, self-healing platforms, and full-stack pipelines.
            Passionate about the intersection of AI and systems engineering — crafting software
            that's reliable, intelligent, and genuinely useful.
          </p>
          <div className="hero-cta">
            <a href={`mailto:${EMAIL}`} className="btn btn-fill">Get in touch →</a>
            <a href="https://github.com/Riyadpatel24" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-frame">
            <img src={heroPhoto} alt="Riya Patel" />
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="stat-num">3</div><div className="stat-label">Projects</div></div>
            <div className="stat"><div className="stat-num">2</div><div className="stat-label">Certifications</div></div>
            <div className="stat"><div className="stat-num">5</div><div className="stat-label">Languages</div></div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="marquee-item" key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-header reveal">
          <span className="section-num">01</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>
        <div className="skills-wrapper">
          {skillGroups.map(group => (
            <div className="reveal" key={group.label}>
              <p className="skill-group-label">{group.label}</p>
              <div className="skill-tags">
                {group.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-header reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {projects.map(p => (
            <a key={p.num} href={p.href} target="_blank" rel="noopener noreferrer" className="project-item reveal">
              <div className="project-inner">
                <div>
                  <p className="project-num">{p.num}</p>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-tagline">{p.tagline}</p>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-chips">
                    {p.chips.map(c => <span className="project-chip" key={c}>{c}</span>)}
                  </div>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="section-header reveal">
          <span className="section-num">03</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>
        <div className="edu-grid">
          {educationCards.map(e => (
            <div
              key={e.degree}
              className="edu-card reveal"
              style={e.type === 'lang' ? { background: 'var(--cream)' } : {}}
            >
              <p className="edu-period">{e.period}</p>
              <h3 className="edu-degree">{e.degree}</h3>
              <p className="edu-school">{e.school}</p>
              {e.courses && <p className="edu-courses">{e.courses}</p>}
              {e.type === 'lang' && (
                <div className="lang-row">
                  {e.langs.map(l => (
                    <span className="lang-badge" key={l.name}>
                      {l.name} <span className="lang-level">{l.lvl}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <ResumeSection />

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="section-header reveal">
          <span className="section-num">05</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>
        <div className="contact-layout">
          <div className="reveal">
            <p className="contact-quote">"Let's build something intelligent together."</p>
            <p className="contact-intro">
              I'm currently open to internships, collaborations, and interesting projects.
              Whether you have a question or just want to say hi — my inbox is always open.
            </p>
            <a href={`mailto:${EMAIL}`} className="btn btn-fill" style={{ display: 'inline-flex' }}>
              Send me an email →
            </a>
          </div>
          <div className="contact-links reveal">
            {contactLinks.map(c => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="contact-link"
              >
                <span className="contact-link-label">{c.label}</span>
                <span className="contact-link-val">{c.val}</span>
              </a>
            ))}
            <div className="contact-link" style={{ cursor: 'default' }}>
              <span className="contact-link-label">Location</span>
              <span className="contact-link-val">Bharuch, Gujarat, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-copy">© 2025 Riya Patel — Built with love &amp; code</span>
        <div className="footer-links">
          <a href="https://github.com/Riyadpatel24" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/riya-patel-b00ab42bb" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/r_24" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </footer>
    </>
  )
}