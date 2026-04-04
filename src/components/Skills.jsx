import { skillGroups } from '../data/portfolio'

function SkillTag({ name }) {
  return <span className="tag">{name}</span>
}

function SkillGroup({ title, skills }) {
  return (
    <div className="card">
      <h3 className="font-mono text-xs text-cyan tracking-widest uppercase mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill} name={skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills - Technical Arsenal</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} title={group.title} skills={group.skills} />
        ))}
      </div>
    </section>
  )
}
