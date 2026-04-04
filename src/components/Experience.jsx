import { experience } from '../data/portfolio'

function ExperienceCard({ role, company, duration, description, tags }) {
  return (
    <div className="card border-l-2 border-l-cyan hover:border-l-cyan transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <h3 className="font-syne text-lg font-semibold text-light group-hover:text-cyan transition-colors">
            {role}
          </h3>
          <p className="font-mono text-xs text-cyan mt-1 tracking-wider">{company}</p>
        </div>
        <span className="font-mono text-xs text-muted bg-surface2 border border-border px-3 py-1.5 rounded-sm whitespace-nowrap self-start">
          {duration}
        </span>
      </div>

      <p className="font-mono text-xs text-muted leading-loose mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-cyan-dim bg-cyan/5 border border-cyan/20 px-2.5 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>

      <div className="flex flex-col gap-6">
        {experience.map((exp) => (
          <ExperienceCard key={exp.role} {...exp} />
        ))}
      </div>
    </section>
  )
}
