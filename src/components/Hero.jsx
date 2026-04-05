import { useEffect, useState } from 'react'
import { profile, stats } from '../data/portfolio'

const roles = [
  'Full Stack Developer',
  'ML Engineer',
  'Blockchain Developer',
  'DevOps Enthusiast',
]

function StatItem({ number, label }) {
  return (
    <div className="flex-1 text-center px-2 py-3 border-r border-border last:border-r-0">
      <div className="font-mono text-base font-bold text-cyan leading-none">{number}</div>
      <div className="font-mono text-[9px] text-muted tracking-wide mt-1 leading-tight">{label}</div>
    </div>
  )
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const target = roles[roleIdx]
    let timeout

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIdx((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-14 relative overflow-hidden section-container"
    >
      {/* Background decorative elements */}
      <div className="absolute -left-10 bottom-20 w-52 h-52 rounded-full border border-border opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full border border-border opacity-5 pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — Text */}
        <div className="animate-fade-up order-2 md:order-1">
          {profile.available && (
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan border border-cyan-dim px-3 py-1.5 rounded-sm mb-6 tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              Available for new opportunities
            </div>
          )}

          {/* Name with Playfair Display — elegant serif */}
          <h1 className="leading-[1.05] mb-4 tracking-tight">
            <span
              className="block text-5xl md:text-6xl text-light"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
            >
              {profile.name.split(' ')[0]}
            </span>
            <span
              className="block text-5xl md:text-6xl text-cyan"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontStyle: 'italic' }}
            >
              {profile.name.split(' ')[1]}
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="font-mono text-sm text-muted mb-6 h-6 tracking-wider">
            {displayed}
            <span className="animate-blink border-r-2 border-cyan ml-0.5" />
          </div>

          <p className="font-mono text-sm text-muted leading-loose mb-8 max-w-md">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-outline">GitHub ↗</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>

        {/* RIGHT — Photo + Stats */}
        <div className="flex flex-col items-center gap-5 animate-fade-in order-1 md:order-2">

          {/* Photo with glowing circular frame */}
          <div className="relative">
            {/* Ambient glow */}
            <div
              className="absolute inset-0 rounded-full opacity-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)',
                transform: 'scale(1.3)',
                filter: 'blur(24px)',
              }}
            />
            {/* Outer decorative ring */}
            <div className="absolute rounded-full border border-cyan/20"
              style={{ inset: '-16px' }} />
            {/* Middle ring */}
            <div className="absolute rounded-full border border-border/60"
              style={{ inset: '-28px' }} />

            {/* Photo circle */}
            <div className="relative w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-cyan/50 bg-surface2 shadow-lg">
              {!imgError ? (
                <img
                  src="/Myimage.jpg"
                  alt="Dolamani Meher"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface2">
                  <span
                    className="text-5xl font-bold text-cyan"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    DM
                  </span>
                </div>
              )}
            </div>

            {/* Accent dots */}
            <div className="absolute top-3 -right-2 w-3 h-3 rounded-full bg-cyan opacity-80" />
            <div className="absolute bottom-6 -left-3 w-2 h-2 rounded-full bg-cyan opacity-50" />
            <div className="absolute top-1/2 -right-5 w-1.5 h-1.5 rounded-full bg-cyan opacity-30" />
          </div>

          {/* Hello greeting like reference */}
          <div className="text-center">
            <p className="font-mono text-xs text-muted tracking-widest flex items-center justify-center gap-2">
              <svg className="w-3 h-3 fill-cyan opacity-70" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {profile.location}
            </p>
          </div>

          {/* Stats strip — compact under photo */}
          <div className="w-full max-w-xs bg-surface border border-border rounded-lg flex overflow-hidden">
            {stats.map((s) => (
              <StatItem key={s.label} number={s.number} label={s.label} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-mono text-xs tracking-widest">scroll</span>
        <div className="w-px h-8 bg-muted animate-pulse" />
      </div> */}
    </section>
  )
}
