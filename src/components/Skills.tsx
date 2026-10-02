import { skills } from '../content'

export default function Skills() {
  return (
    <section className="py-20" aria-labelledby="skills">
      <h2 id="skills" className="font-display mb-12 text-3xl sm:text-4xl">Skills</h2>
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {skills.map((g) => (
          <div key={g.label} className="reveal border-t border-rule pt-4">
            <h3 className="mb-3 text-sm tracking-widest text-accent uppercase">{g.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded-full border border-rule px-3 py-1 text-sm">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
