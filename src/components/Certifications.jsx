import { certifications } from '../data/portfolio'

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-cyan" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function CertCard({ name, org }) {
  return (
    <div className="card flex items-center gap-4 hover:border-cyan-dim transition-colors duration-200 group">
      <div className="w-9 h-9 rounded-md bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-cyan/15 transition-colors">
        <StarIcon />
      </div>
      <div>
        <p className="font-mono text-sm text-light font-bold leading-snug">{name}</p>
        <p className="font-mono text-xs text-muted mt-0.5">{org}</p>
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <h2 className="section-title">Certifications</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <CertCard key={cert.name} name={cert.name} org={cert.org} />
        ))}
      </div>
    </section>
  )
}
