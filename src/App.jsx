import { useEffect, useRef, useState } from 'react'
import photo from './assets/photo.png'

// ── DATA ──────────────────────────────────────────────────────────────
const SKILLS = [
  { cat: 'Languages',      items: ['Python','Java','JavaScript ES6+','HTML & CSS','SQL'] },
  { cat: 'Frameworks',     items: ['React','FastAPI','Spring Boot','uvicorn','Groq SDK','SpeechRecognition','psutil'] },
  { cat: 'DevOps & Cloud', items: ['Docker','Git & GitHub','AWS EC2','AWS S3','AWS RDS','IAM','VPC'] },
  { cat: 'Core CS',        items: ['Data Structures','Algorithms','OOP','DBMS','Operating Systems','Computer Networks'] },
  { cat: 'Backend',        items: ['FastAPI','REST APIs','PostgreSQL','Docker'] }
]

const PROJECTS = [
  {
    index: '01',
    name: 'Adaptive System — Reliability Monitoring & Adaptive Recovery Platform',
    sub: 'github.com/Riyadpatel24/adaptive_system',
    href: 'https://github.com/Riyadpatel24/adaptive_system',
    desc: 'Built a reliability-focused monitoring platform that ingests telemetry, classifies system health, and applies adaptive recovery policies based on runtime conditions. The platform performs signal normalization, failure-risk analysis, and automated response actions while supporting fault-injection testing through CPU and memory stress simulations.',
    stack: [
      'FastAPI',
      'Python',
      'Telemetry',
      'Monitoring',
      'Fault Injection',
      'REST APIs'
    ],
  },

  {
    index: '02',
    name: 'Sudoku Masters — Puzzle Generation & Competitive Gameplay Platform',
    sub: 'github.com/Riyadpatel24/sudoku-master',
    href: 'https://github.com/Riyadpatel24/sudoku-master',
    desc: 'Developed a browser-based Sudoku platform featuring puzzle generation, validation, solving logic, note-taking support, competitive timed gameplay, daily streak tracking, and leaderboard functionality. Implemented a modular architecture separating game logic, puzzle algorithms, and UI components for maintainability and scalability.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Puzzle Generation',
      'Algorithm Design'
    ],
  },

  {
    index: '03',
    name: 'VoiceNotes Organizer — AI Audio-to-Notes Pipeline',
    sub: 'github.com/Riyadpatel24/voicenotes-organizer',
    href: 'https://github.com/Riyadpatel24/voicenotes-organizer',
    desc: 'Built a full-stack audio processing pipeline that converts spoken input into structured notes, summaries, action items, and decisions. Designed a modular architecture separating transcription and content structuring stages, enabling AI models to be replaced without affecting downstream workflows.',
    stack: [
      'React',
      'FastAPI',
      'Groq SDK',
      'Whisper',
      'JSON Processing',
      'REST APIs'
    ],
  },
]
const EDUCATION = [
  { year:'2023 — 2027', title:'B.Tech — Computer Science & Engineering', org:'P P Savani University · Surat, Gujarat · DSA · DBMS · OS · Networks · OOP', badge:'Degree', badgeClass:'badge-degree' },
  { year:'Jun 2025', title:'IBM Java Developer Professional Certificate', org:'Coursera / IBM · 11 courses · Spring Boot, Microservices, Docker, REST APIs, Generative AI', badge:'Certified', badgeClass:'badge-cert' },
  { year:'Nov 2025', title:'AWS Academy Graduate — Cloud Foundations', org:'Amazon Web Services · 20 hrs · EC2, S3, RDS, IAM, VPC, Cloud Security', badge:'Certified', badgeClass:'badge-cert' },
]

const MARQUEE = [
  'Python',
  'Java',
  'FastAPI',
  'React',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Spring Boot',
  'System Design',
  'Distributed Systems',
  'REST APIs',
  'Data Structures',
  'Algorithms',
  'Async Programming'
]

const LANGUAGES = [
  {name:'English',lvl:'C1 Professional'},{name:'Hindi',lvl:'Native'},
  {name:'Gujarati',lvl:'Native'},{name:'German',lvl:'A1'},{name:'Mandarin',lvl:'A2'},
]

const CONTACT_ROWS = [
  {label:'Email',    val:'rdp2245@gmail.com', href:'mailto:rdp2245@gmail.com'},
  {label:'Phone',    val:'+91 9510177953',          href:'tel:+919510177953'},
  {label:'LinkedIn', val:'riya-patel-b00ab42bb',   href:'https://linkedin.com/in/riya-patel-b00ab42bb', blank:true},
  {label:'GitHub',   val:'Riyadpatel24',            href:'https://github.com/Riyadpatel24', blank:true},
  {label:'LeetCode', val:'r_24',                   href:'https://leetcode.com/u/r_24', blank:true},
  {label:'Location', val:'Bharuch, Gujarat, India', href:null},
]

// ── HELPERS ───────────────────────────────────────────────────────────
const smoothScroll = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'})

// ── CANVAS (sparks bg — both themes) ─────────────────────────────────
function useLightCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, animId
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize)

    const COLORS = ['139,124,246','160,140,255','180,160,255','107,94,208','200,180,255']

    // ── Firefly: slow drifting twinklers ──
    class Firefly {
      constructor() { this.reset(true) }
      reset(init=false) {
        this.x = Math.random() * W
        this.y = init ? Math.random() * H : (Math.random() > 0.5 ? -10 : H + 10)
        this.r = Math.random() * 1.8 + 0.4
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.alpha = 0
        this.targetAlpha = Math.random() * 0.5 + 0.15
        this.twinkleSpeed = Math.random() * 0.02 + 0.005
        this.twinklePhase = Math.random() * Math.PI * 2
        this.c = COLORS[Math.floor(Math.random() * COLORS.length)]
        this.life = 0; this.maxLife = 300 + Math.random() * 400
      }
      update(t) {
        this.x += this.vx; this.y += this.vy
        this.life++
        const fade = this.life < 60 ? this.life/60 : this.life > this.maxLife-60 ? (this.maxLife-this.life)/60 : 1
        this.alpha = this.targetAlpha * fade * (0.7 + 0.3 * Math.sin(t * this.twinkleSpeed * 60 + this.twinklePhase))
        if (this.life > this.maxLife) this.reset()
      }
      draw() {
        // glow halo
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 4)
        g.addColorStop(0, `rgba(${this.c},${this.alpha * 0.6})`)
        g.addColorStop(1, `rgba(${this.c},0)`)
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r * 4, 0, Math.PI*2)
        ctx.fillStyle = g; ctx.fill()
        // core dot
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI*2)
        ctx.fillStyle = `rgba(${this.c},${Math.min(this.alpha * 2, 1)})`; ctx.fill()
      }
    }

    // ── Spark: fast shooting streaks ──
    class Spark {
      constructor() { this.reset() }
      reset() {
        // spawn from a random edge or random point
        const edge = Math.floor(Math.random() * 4)
        if      (edge===0) { this.x=Math.random()*W; this.y=-5 }
        else if (edge===1) { this.x=W+5; this.y=Math.random()*H }
        else if (edge===2) { this.x=Math.random()*W; this.y=H+5 }
        else               { this.x=-5; this.y=Math.random()*H }
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 2.5 + 1
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.trail = []
        this.trailLen = Math.floor(Math.random() * 12 + 6)
        this.r = Math.random() * 1.2 + 0.4
        this.alpha = Math.random() * 0.7 + 0.3
        this.c = COLORS[Math.floor(Math.random() * COLORS.length)]
        this.dead = false
        this.life = 0; this.maxLife = Math.floor(Math.random() * 80 + 40)
      }
      update() {
        this.trail.unshift({ x: this.x, y: this.y })
        if (this.trail.length > this.trailLen) this.trail.pop()
        this.vx *= 0.985; this.vy *= 0.985
        this.x += this.vx; this.y += this.vy
        this.life++
        if (this.life > this.maxLife) this.dead = true
      }
      draw() {
        const fade = this.life < 10 ? this.life/10 : this.life > this.maxLife-15 ? (this.maxLife-this.life)/15 : 1
        // draw trail
        for (let i = 0; i < this.trail.length; i++) {
          const t2 = 1 - i / this.trail.length
          const a = this.alpha * t2 * t2 * fade * 0.6
          ctx.beginPath()
          ctx.arc(this.trail[i].x, this.trail[i].y, this.r * t2, 0, Math.PI*2)
          ctx.fillStyle = `rgba(${this.c},${a})`; ctx.fill()
        }
        // draw head with glow
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 5)
        g.addColorStop(0, `rgba(${this.c},${this.alpha * fade * 0.9})`)
        g.addColorStop(0.4, `rgba(${this.c},${this.alpha * fade * 0.3})`)
        g.addColorStop(1, `rgba(${this.c},0)`)
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r * 5, 0, Math.PI*2)
        ctx.fillStyle = g; ctx.fill()
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI*2)
        ctx.fillStyle = `rgba(255,255,255,${this.alpha * fade * 0.9})`; ctx.fill()
      }
    }

    // ── Burst: occasional starburst explosions ──
    class Burst {
      constructor() {
        this.x = Math.random() * W; this.y = Math.random() * H
        this.rays = []
        const count = Math.floor(Math.random() * 6 + 5)
        const c = COLORS[Math.floor(Math.random() * COLORS.length)]
        for (let i = 0; i < count; i++) {
          const a = (i / count) * Math.PI * 2
          const spd = Math.random() * 1.5 + 0.5
          this.rays.push({ vx: Math.cos(a)*spd, vy: Math.sin(a)*spd, x: this.x, y: this.y, c, r: Math.random()*0.8+0.3 })
        }
        this.life = 0; this.maxLife = 60 + Math.random() * 40
      }
      update() {
        this.life++
        this.rays.forEach(r => { r.x += r.vx; r.y += r.vy; r.vx *= 0.94; r.vy *= 0.94 })
      }
      draw() {
        const fade = this.life < 10 ? this.life/10 : (this.maxLife-this.life)/this.maxLife
        this.rays.forEach(r => {
          ctx.beginPath(); ctx.arc(r.x, r.y, r.r, 0, Math.PI*2)
          ctx.fillStyle = `rgba(${r.c},${fade * 0.8})`; ctx.fill()
        })
      }
      get dead() { return this.life > this.maxLife }
    }

    const flies = Array.from({length: 55}, () => new Firefly())
    let sparks = [], bursts = []
    let sparkTimer = 0, burstTimer = 0, t = 0

    function loop() {
      t++
      ctx.clearRect(0, 0, W, H)

      // spawn sparks
      sparkTimer++
      if (sparkTimer > 18) { sparks.push(new Spark()); sparkTimer = 0 }
      sparks = sparks.filter(s => !s.dead)
      sparks.forEach(s => { s.update(); s.draw() })

      // spawn bursts occasionally
      burstTimer++
      if (burstTimer > 220 + Math.random()*80) { bursts.push(new Burst()); burstTimer = 0 }
      bursts = bursts.filter(b => !b.dead)
      bursts.forEach(b => { b.update(); b.draw() })

      // fireflies
      flies.forEach(f => { f.update(t); f.draw() })

      animId = requestAnimationFrame(loop)
    }
    loop()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animId) }
  }, [])
  return ref
}

// ── CURSOR ────────────────────────────────────────────────────────────
function useCursor() {
  const curRef = useRef(null), ringRef = useRef(null)
  useEffect(() => {
    let mx=0,my=0,rx=0,ry=0,id
    const mv = e => {
      mx=e.clientX; my=e.clientY
      if(curRef.current){curRef.current.style.left=mx+'px';curRef.current.style.top=my+'px'}
    }
    document.addEventListener('mousemove',mv)
    const tick = () => {
      rx+=(mx-rx)*.12; ry+=(my-ry)*.12
      if(ringRef.current){ringRef.current.style.left=rx+'px';ringRef.current.style.top=ry+'px'}
      id=requestAnimationFrame(tick)
    }
    tick()
    const on = () => {curRef.current&&(curRef.current.style.transform='translate(-50%,-50%) scale(2.5)');ringRef.current&&(ringRef.current.style.transform='translate(-50%,-50%) scale(1.6)')}
    const off = () => {curRef.current&&(curRef.current.style.transform='translate(-50%,-50%) scale(1)');ringRef.current&&(ringRef.current.style.transform='translate(-50%,-50%) scale(1)')}
    document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',on);el.addEventListener('mouseleave',off)})
    return () => {document.removeEventListener('mousemove',mv);cancelAnimationFrame(id)}
  },[])
  return {curRef,ringRef}
}

// ── REVEAL ────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.08})
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))
    return () => obs.disconnect()
  },[])
}

// ── CONTACT FORM ──────────────────────────────────────────────────────
function ContactForm() {
  const [f,setF] = useState({name:'',email:'',message:''})
  const [sent,setSent] = useState(false)
  const handle = e => setF(p=>({...p,[e.target.name]:e.target.value}))
  const submit = e => {
  e.preventDefault()

  const sub = encodeURIComponent(
    `Portfolio enquiry from ${f.name}`
  )

  const body = encodeURIComponent(
    `Name: ${f.name}\nEmail: ${f.email}\n\nMessage:\n${f.message}`
  )

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=rdp2245@gmail.com&su=${sub}&body=${body}`,
    '_blank'
  )

  setSent(true)
  setTimeout(() => setSent(false), 3000)
}
  return (
    <form className="contact-form" onSubmit={submit}>
      <input  className="form-input" name="name"    type="text"  placeholder="Your Name"    value={f.name}    onChange={handle} required />
      <input  className="form-input" name="email"   type="email" placeholder="Your Email"   value={f.email}   onChange={handle} required />
      <textarea className="form-input form-textarea" name="message" placeholder="Your Message" value={f.message} onChange={handle} required />
      <button type="submit" className="btn-primary btn-full">{sent ? 'Opening Gmail…' : 'Send Message ↗'}</button>
    </form>
  )
}

// ── ROOT ──────────────────────────────────────────────────────────────
export default function App() {
  const [theme,setTheme] = useState(()=>localStorage.getItem('riya-theme')||'dark')
  const canvasRef = useLightCanvas()
  const {curRef,ringRef} = useCursor()
  useReveal()

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme)
    localStorage.setItem('riya-theme',theme)
  },[theme])

  return (
    <>
      <canvas id="light-canvas" ref={canvasRef} />
      <div className="cursor" ref={curRef} />
      <div className="cursor-ring" ref={ringRef} />

      {/* NAV */}
      <nav>
        <div className="nav-left">
          <div className="nav-dot" />
          <span className="nav-name">Riya Patel</span>
          <span className="nav-badge">Available · 2025</span>
        </div>
        <ul className="nav-center">
          {['about','skills','projects','education','contact'].map(s=>(
            <li key={s}><a href={`#${s}`} onClick={e=>{e.preventDefault();smoothScroll(s)}}>{s[0].toUpperCase()+s.slice(1)}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="theme-toggle" onClick={()=>setTheme(t=>t==='dark'?'light':'dark')} aria-label="Toggle theme">
            {theme==='dark'?'🌙':'☀️'}
          </button>
          <a href="https://github.com/Riyadpatel24" target="_blank" rel="noopener noreferrer" className="nav-cta">GitHub ↗</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-eyebrow">Software Engineering · Backend Systems · Distributed Systems</div>
          <div className="hero-layout">
            {/* Photo + Name stacked */}
            <div className="hero-identity">
              <img src={photo} alt="Riya Patel" className="hero-photo" />
              <h1 className="hero-headline">
                Riya<br/>
                <span className="muted">Patel<span className="stroke">.</span></span>
              </h1>
            </div>
            {/* Bio + Buttons */}
            <div className="hero-right">
              <p className="hero-bio">
                B.Tech Computer Science student focused on backend engineering,
                systems design, and distributed systems. Building reliable software
                platforms with Python, FastAPI, PostgreSQL, Docker, and modern web technologies.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn-primary" onClick={e=>{e.preventDefault();smoothScroll('contact')}}>Get in touch ↗</a>
                <a href="https://github.com/Riyadpatel24" target="_blank" rel="noopener noreferrer" className="btn-ghost">View GitHub</a>
                <a href={`${import.meta.env.BASE_URL}RIYA PATEL.pdf`} target="_blank" rel="noopener noreferrer" className="btn-ghost">View Resume ↗</a>
              </div>
              <span className="hero-scroll">↓ scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...MARQUEE,...MARQUEE].map((item,i)=><span className="marquee-item" key={i}>{item}</span>)}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-label reveal"><span className="section-num">00 /</span><h2 className="section-title">About</h2><div className="section-line"/></div>
        <div className="about-strip reveal">
          <div className="about-block"><p className="about-block-label">Current Status</p><p className="about-block-value">B.Tech CSE</p><p className="about-block-sub">P P Savani University, Surat · 2023–2027. Coursework in DSA, DBMS, OS, Networks, OOP.</p></div>
          <div className="about-block"><p className="about-block-label">Specialisation</p><p className="about-block-value">Backend & Systems Engineering</p><p className="about-block-sub">Backend applications, reliability-focused systems, distributed architectures, and developer tooling using Python, FastAPI, PostgreSQL, Docker, and AWS.</p></div>
          <div className="about-block"><p className="about-block-label">Looking For</p><p className="about-block-value">Internships</p><p className="about-block-sub">Open to software engineering, backend development, and systems engineering roles. Available for remote or on-site opportunities across India.</p></div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-label reveal"><span className="section-num">01 /</span><h2 className="section-title">Skills</h2><div className="section-line"/></div>
        <div className="skills-table reveal">
          {SKILLS.map(row=>(
            <div className="skill-row" key={row.cat}>
              <span className="skill-cat">{row.cat}</span>
              <div className="skill-items">{row.items.map(s=><span className="skill-pill" key={s}>{s}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-label reveal"><span className="section-num">02 /</span><h2 className="section-title">Projects</h2><div className="section-line"/></div>
        <div className="projects-list reveal">
          {PROJECTS.map(p=>(
            <a className="project-row" href={p.href} target="_blank" rel="noopener noreferrer" key={p.index}>
              <span className="project-index">{p.index}</span>
              <div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-sub">{p.sub}</p>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">{p.stack.map(t=><span className="stack-tag" key={t}>{t}</span>)}</div>
              </div>
              <span className="project-link">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="section-label reveal"><span className="section-num">03 /</span><h2 className="section-title">Education</h2><div className="section-line"/></div>
        <div className="edu-table reveal">
          {EDUCATION.map(e=>(
            <div className="edu-row" key={e.title}>
              <span className="edu-year">{e.year}</span>
              <div><p className="edu-title">{e.title}</p><p className="edu-org">{e.org}</p></div>
              <span className={`edu-badge ${e.badgeClass}`}>{e.badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="section-label reveal"><span className="section-num">04 /</span><h2 className="section-title">Contact</h2><div className="section-line"/></div>
        <div className="contact-grid">
          {/* LEFT */}
          <div className="reveal">
            <h3 className="contact-headline">Let's build<br/><span>something</span><br/>great.</h3>
            <p className="contact-tagline">I'm actively looking for internship and junior engineering roles. If you think I'd be a good fit for your team, I'd love to hear from you.</p>
            <div className="contact-table">
              {CONTACT_ROWS.map(c=>c.href
                ? <a key={c.label} href={c.href} target={c.blank?'_blank':undefined} rel={c.blank?'noopener noreferrer':undefined} className="contact-row-item">
                    <span className="c-label">{c.label}</span><span className="c-val">{c.val}</span><span className="c-arrow">↗</span>
                  </a>
                : <div key={c.label} className="contact-row-item">
                    <span className="c-label">{c.label}</span><span className="c-val">{c.val}</span><span className="c-arrow" style={{opacity:0}}>↗</span>
                  </div>
              )}
            </div>
            <div className="lang-grid">
              {LANGUAGES.map(l=><div className="lang-item" key={l.name}><p className="lang-name">{l.name}</p><p className="lang-lvl">{l.lvl}</p></div>)}
            </div>
          </div>
          {/* RIGHT: form */}
          <div className="reveal">
            <p className="form-heading">Drop me a message</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-copy">© 2025 Riya Patel — <a href="mailto:rdp2245@gmail.com">rdp2245@gmail.com</a></span>
        <div className="footer-links">
          <a href="https://github.com/Riyadpatel24" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/riya-patel-b00ab42bb" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/r_24" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </footer>
    </>
  )
}
