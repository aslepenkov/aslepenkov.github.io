import { roles } from '../content'

export default function Experience() {
  return (
    <section className="border-b border-rule py-20" aria-labelledby="experience">
      <h2 id="experience" className="font-display mb-12 text-3xl sm:text-4xl">Experience</h2>
      <ol className="space-y-12 border-l border-rule pl-6 sm:pl-10">
        {roles.map((r) => (
          <li key={`${r.company}-${r.period}`} className="reveal relative">
            <span className="absolute top-2 -left-[1.9rem] h-2 w-2 rounded-full bg-accent sm:-left-[2.9rem]" aria-hidden="true" />
            <p className="text-sm text-muted">{r.period}</p>
            <h3 className="font-display mt-1 text-xl sm:text-2xl">
              {r.title}, {r.company}
            </h3>
            <p className="text-sm text-muted">{r.location}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-accent">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
