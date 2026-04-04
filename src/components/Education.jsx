import { education } from '../data/portfolio'

function EducationCard({ institution, degree, duration, score }) {
  return (
    <div className="card border-l-2 border-l-cyan flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 group hover:bg-surface2 transition-colors duration-200">
      <div>
        <h3 className="font-syne text-base font-semibold text-light group-hover:text-cyan transition-colors">
          {institution}
        </h3>
        <p className="font-mono text-xs text-muted mt-1 tracking-wider">{degree}</p>
        {duration && (
          <p className="font-mono text-xs text-muted/60 mt-1">{duration}</p>
        )}
      </div>
      <div className="font-mono text-xl font-bold text-cyan shrink-0">{score}</div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>

      <div className="flex flex-col gap-4">
        {education.map((edu) => (
          <EducationCard key={edu.institution} {...edu} />
        ))}
      </div>
    </section>
  )
}
