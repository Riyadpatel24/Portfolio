import { useEffect, useRef } from 'react'
import heroPhoto from './assets/photo.png'
import './index.css'

const EMAIL = 'rdp2245@gmail.com' // ← Replace with your real email

const marqueeItems = [
  'Python', 'Agentic AI', 'FastAPI', 'React', 'Docker', 'AWS',
  'Spring Boot', 'Chaos Engineering', 'Microservices', 'TDD',
  'Groq SDK', 'LLaMA 3.3', 'Whisper', 'Async Programming',
]

const skills = [
  { cat: 'Languages', pills: ['Python', 'Java', 'JavaScript ES6+', 'HTML & CSS', 'SQL'] },
  { cat: 'Frameworks', pills: ['React', 'FastAPI', 'Spring Boot', 'uvicorn', 'Groq SDK', 'SpeechRecognition', 'psutil'] },
  { cat: 'DevOps & Cloud', pills: ['Docker', 'Git & GitHub', 'AWS EC2', 'AWS S3', 'AWS RDS', 'IAM', 'VPC'] },
  { cat: 'Concepts', pills: ['Agentic AI', 'Microservices', 'REST APIs', 'Chaos Engineering', 'TDD', 'NoSQL', 'Async & Multithreading', 'pytest'] },
]

const projects = [
  {
    index: '01',
    name: 'VoiceOS — AI Desktop Assistant',
    sub: 'github.com/Riyadpatel24',
    href: 'https://github.com/Riyadpatel24',
    desc: 'Voice-controlled AI assistant with async execution and a 3-tier security sandbox (SAFE / MODERATE / BLOCKED) built with regex guards. Read-only tools run in parallel via ThreadPoolExecutor, state-mutating tools sequentially — keeping UI fully responsive during multi-step AI reasoning. Crash-safe persistent memory via atomic file replacement, 95%+ pytest coverage across 30+ test cases.',
    stack: ['Python', 'Agentic AI', 'ThreadPoolExecutor', 'STT / TTS', 'pytest', 'psutil', 'Exponential Backoff'],
  },
  {
    index: '02',
    name: 'Adaptive System — Autonomous SRE Platform',
    sub: 'github.com/Riyadpatel24/adaptive_system',
    href: 'https://github.com/Riyadpatel24/adaptive_system',
    desc: 'Self-tuning SRE loop: telemetry ingestion → signal normalisation → health classification → LOCKDOWN/THROTTLE actions via safety guard and cooldown manager. Failure prediction from rolling risk histories, root cause analysis via DependencyGraph, PolicyEngine adapting timeout and retry limits based on live failure rates. Chaos engineering via CPU spike & memory leak injection.',
    stack: ['FastAPI', 'Python', 'Chaos Engineering', 'SRE', 'Microservices', 'Telemetry'],
  },
  {
    index: '03',
    name: 'VoiceNotes Organizer — AI Audio-to-Notes Pipeline',
    sub: 'github.com/Riyadpatel24/voicenotes-organizer',
    href: 'https://github.com/Riyadpatel24/voicenotes-organizer',
    desc: 'Full-stack pipeline: audio upload → Groq Whisper Large V3 transcription → LLaMA 3.3 70B structures output into summaries, action items, deadlines, and decisions as JSON. Modular architecture cleanly separates transcription and structuring layers — AI models swappable without changing any downstream logic.',
    stack: ['React', 'FastAPI', 'Groq SDK', 'Whisper Large V3', 'LLaMA 3.3 70B', 'JSON'],
  },
]

const education = [
  {
    year: '2023 — 2027',
    title: 'B.Tech — Computer Science & Engineering',
    org: 'P P Savani University · Surat, Gujarat · DSA · DBMS · OS · Networks · OOP',
    badge: 'Degree',
    badgeClass: 'badge-degree',
  },
  {
    year: 'Jun 2025',
    title: 'IBM Java Developer Professional Certificate',
    org: 'Coursera / IBM · 11 courses · Spring Boot, Microservices, Docker, REST APIs, Generative AI',
    badge: 'Certified',
    badgeClass: 'badge-cert',
  },
  {
    year: 'Nov 2025',
    title: 'AWS Academy Graduate — Cloud Foundations',
    org: 'Amazon Web Services · 20 hrs · EC2, S3, RDS, IAM, VPC, Cloud Security',
    badge: 'Certified',
    badgeClass: 'badge-cert',
  },
]

const contactLinks = [
  { label: 'Email', val: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Phone', val: '+91 9510177953', href: 'tel:+919510177953' },
  { label: 'LinkedIn', val: 'riya-patel-b00ab42bb', href: 'https://linkedin.com/in/riya-patel-b00ab42bb', external: true },
  { label: 'GitHub', val: 'Riyadpatel24', href: 'https://github.com/Riyadpatel24', external: true },
  { label: 'LeetCode', val: 'r_24', href: 'https://leetcode.com/u/r_24', external: true },
]

const languages = [
  { name: 'English', lvl: 'C1 Professional' },
  { name: 'Hindi', lvl: 'Native' },
  { name: 'Gujarati', lvl: 'Native' },
  { name: 'German', lvl: 'A1' },
  { name: 'Mandarin', lvl: 'A2' },
]

export default function App() {
  const curRef = useRef(null)
  const ringRef = useRef(null)
  const mx = useRef(0), my = useRef(0)
  const rx = useRef(0), ry = useRef(0)
  const rafRef = useRef(null)

  // Custom cursor
  useEffect(() => {
    const onMove = (e) => {
      mx.current = e.clientX
      my.current = e.clientY
      if (curRef.current) {
        curRef.current.style.left = (e.clientX - 4) + 'px'
        curRef.current.style.top = (e.clientY - 4) + 'px'
      }
    }
    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = (rx.current - 16) + 'px'
        ringRef.current.style.top = (ry.current - 16) + 'px'
      }
      rafRef.current = requestAnimationFrame(animRing)
    }
    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animRing)

    const onEnter = () => {
      if (curRef.current) curRef.current.style.transform = 'scale(2)'
      if (ringRef.current) ringRef.current.style.transform = 'scale(1.5)'
    }
    const onLeave = () => {
      if (curRef.current) curRef.current.style.transform = 'scale(1)'
      if (ringRef.current) ringRef.current.style.transform = 'scale(1)'
    }
    const addHover = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    addHover()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="cursor" ref={curRef} />
      <div className="cursor-ring" ref={ringRef} />

      {/* NAV */}
      <nav>
        <div className="nav-left">
          <div className="nav-dot" />
          <span className="nav-name">Riya Patel</span>
          <span className="nav-status">Open to opportunities</span>
        </div>
        <ul className="nav-links">
          {['about', 'skills', 'projects', 'education', 'contact'].map(s => (
            <li key={s}><a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <a href={`mailto:${EMAIL}`}>Hire me →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-photo-wrap">
            <img src={heroPhoto} alt="Riya Patel" className="hero-photo" />
            <div>
              <div className="hero-tag" style={{ marginBottom: '0.8rem' }}>
                Software Engineer · AI Systems · Bharuch, India
              </div>
              <h1 className="hero-headline" style={{ fontSize: 'clamp(2.8rem,7vw,6rem)' }}>
                Riya<br />
                <span className="line2">Patel<span className="accent">.</span></span>
              </h1>
            </div>
          </div>
          <div className="hero-bottom">
            <p className="hero-bio">
              B.Tech CSE student building <strong>agentic AI systems</strong>, self-healing SRE
              platforms, and full-stack pipelines. Passionate about systems that are intelligent,
              reliable, and production-ready.
            </p>
            <div className="hero-actions">
              <a href={`mailto:${EMAIL}`} className="btn-primary">Get in touch ↗</a>
              <a href="https://github.com/Riyadpatel24" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                View GitHub
              </a>
              <span className="hero-scroll">↓ scroll to explore</span>
            </div>
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

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-label reveal">
          <span className="section-num">00 /</span>
          <h2 className="section-title">About</h2>
          <div className="section-line" />
        </div>
        <div className="about-strip reveal">
          <div className="about-block">
            <p className="about-block-label">Current Status</p>
            <p className="about-block-value">B.Tech CSE</p>
            <p className="about-block-sub">P P Savani University, Surat · 2023–2027. Coursework in DSA, DBMS, OS, Networks, OOP.</p>
          </div>
          <div className="about-block">
            <p className="about-block-label">Specialisation</p>
            <p className="about-block-value">AI & Systems</p>
            <p className="about-block-sub">Agentic AI systems, autonomous SRE platforms, full-stack AI pipelines. Production-grade with TDD and 95%+ test coverage.</p>
          </div>
          <div className="about-block">
            <p className="about-block-label">Looking For</p>
            <p className="about-block-value">Internships</p>
            <p className="about-block-sub">Open to software engineering, AI/ML, or backend roles. Available for remote or on-site opportunities across India.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-label reveal">
          <span className="section-num">01 /</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>
        <div className="skills-table reveal">
          {skills.map(row => (
            <div className="skill-row" key={row.cat}>
              <span className="skill-cat">{row.cat}</span>
              <div className="skill-items">
                {row.pills.map(p => <span className="skill-pill" key={p}>{p}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-label reveal">
          <span className="section-num">02 /</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>
        <div className="projects-list reveal">
          {projects.map(p => (
            <a href={p.href} target="_blank" rel="noopener noreferrer" className="project-row" key={p.index}>
              <span className="project-index">{p.index}</span>
              <div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-sub">{p.sub}</p>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map(t => <span className="stack-tag" key={t}>{t}</span>)}
                </div>
              </div>
              <span className="project-link">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="section-label reveal">
          <span className="section-num">03 /</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>
        <div className="edu-table reveal">
          {education.map(e => (
            <div className="edu-row" key={e.title}>
              <span className="edu-year">{e.year}</span>
              <div>
                <p className="edu-title">{e.title}</p>
                <p className="edu-org">{e.org}</p>
              </div>
              <span className={`edu-badge ${e.badgeClass}`}>{e.badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="section-label reveal">
          <span className="section-num">04 /</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>
        <div className="contact-grid">
          <div className="reveal">
            <h3 className="contact-headline">
              Let's build<br /><span>something</span><br />great.
            </h3>
            <p className="contact-tagline">
              I'm actively looking for internship and junior engineering roles. If you think I'd be a good fit for your team, I'd love to hear from you.
            </p>
            <a href={`mailto:${EMAIL}`} className="btn-primary">Send me an email ↗</a>
            <div className="lang-grid" style={{ marginTop: '2rem' }}>
              {languages.map(l => (
                <div className="lang-item" key={l.name}>
                  <p className="lang-name">{l.name}</p>
                  <p className="lang-lvl">{l.lvl}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="contact-table">
              {contactLinks.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="contact-row-item"
                >
                  <span className="c-label">{c.label}</span>
                  <span className="c-val">{c.val}</span>
                  <span className="c-arrow">↗</span>
                </a>
              ))}
              <div className="contact-row-item" style={{ cursor: 'default' }}>
                <span className="c-label">Location</span>
                <span className="c-val">Bharuch, Gujarat, India</span>
                <span className="c-arrow" style={{ opacity: 0 }}>↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-copy">
          © 2025 Riya Patel — <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </span>
        <div className="footer-links">
          <a href="https://github.com/Riyadpatel24" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/riya-patel-b00ab42bb" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/r_24" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </footer>
    </>
  )
}