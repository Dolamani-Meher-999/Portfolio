import { certifications } from '../data/portfolio'

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-cyan" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

  function CertCard({ name, org, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="card flex items-center gap-4 hover:border-cyan-dim transition-all duration-200 group cursor-pointer no-underline">
      <div className="w-9 h-9 rounded-md bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-cyan/15 transition-colors">
        <StarIcon />
      </div>
      <div className="flex-1">
        <p className="font-mono text-sm text-light font-bold leading-snug group-hover:text-cyan transition-colors">{name}</p>
        <p className="font-mono text-xs text-muted mt-0.5">{org}</p>
      </div>
      <ExternalIcon />
    </a>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <h2 className="section-title">Certifications</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <CertCard key={cert.name} name={cert.name} org={cert.org} link={cert.link} />
        ))}
      </div>
    </section>
  )
}