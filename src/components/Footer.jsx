import { profile } from '../data/portfolio'

function EmailIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const contactLinks = [
  {
    href: `mailto:${profile.email}`,
    icon: <EmailIcon />,
    label: profile.email,
    external: false,
  },
  {
    href: `tel:${profile.phone}`,
    icon: <PhoneIcon />,
    label: profile.phone,
    external: false,
  },
  {
    href: profile.github,
    icon: <GitHubIcon />,
    label: 'GitHub',
    external: true,
  },
  {
    href: profile.linkedin,
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    external: true,
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="section-label justify-center mb-4">// 06 — let's connect</p>

        <h2 className="font-syne text-4xl font-extrabold mb-3">
          Get In <span className="text-cyan">Touch</span>
        </h2>

        <p className="font-mono text-sm text-muted leading-loose mb-10 max-w-md mx-auto">
          Open to internships, collaborations, and full-time opportunities.
          <br />
          Drop a message — I'll get back to you soon.
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="flex items-center gap-2.5 border border-border text-muted font-mono text-xs px-5 py-3 rounded-sm hover:border-cyan hover:text-cyan transition-all duration-200 tracking-wider"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="font-mono text-xs text-border tracking-widest uppercase">
            © 2026 Dolamani Meher · {profile.location} · Built with React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
