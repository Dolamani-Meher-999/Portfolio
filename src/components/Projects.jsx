import { projects } from '../data/portfolio'

function GitHubIcon() {
  return (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

function ProjectCard({ number, date, name, subtitle, tech, description, github, live, featured }) {
  return (
    <div
      className={`card card-hover flex flex-col gap-4 group relative overflow-hidden
        ${featured ? 'border-border hover:border-cyan-dim' : ''}
      `}
    >
      {/* Glow line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-cyan opacity-50 tracking-widest">
            {number} · {date}
          </span>
          <h3 className="font-syne text-lg font-bold mt-1 group-hover:text-cyan transition-colors">
            {name}
          </h3>
          <p className="font-mono text-xs text-cyan-dim mt-0.5">{subtitle}</p>
        </div>
        {featured && (
          <span className="font-mono text-xs text-cyan border border-cyan/30 px-2 py-1 rounded-sm bg-cyan/5 whitespace-nowrap">
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="font-mono text-xs text-muted leading-loose flex-1">{description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs text-cyan-dim bg-cyan/5 border border-cyan/15 px-2 py-0.5 rounded-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-3 border-t border-border">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-cyan transition-colors tracking-wider"
        >
          <GitHubIcon />
          GitHub
        </a>
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs text-cyan hover:text-cyan-dim transition-colors tracking-wider"
        >
          <ExternalIcon />
          Live Demo
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <p className="section-label">// 03 — featured builds</p>
      <h2 className="section-title">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}
