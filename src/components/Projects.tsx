import { projects } from '../content'

export default function Projects() {
  return (
    <section className="border-b border-rule py-20" aria-labelledby="projects">
      <h2 id="projects" className="font-display mb-12 text-3xl sm:text-4xl">Projects</h2>
      <ul className="divide-y divide-rule border-y border-rule">
        {projects.map((p) => (
          <li key={p.name} className="reveal">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-4 py-8 transition-transform duration-300 hover:translate-x-2 md:grid-cols-[1fr_2fr]"
            >
              <h3 className="font-display text-2xl break-words group-hover:text-accent">
                {p.name} <span aria-hidden="true">→</span>
              </h3>
              <div>
                <p className="leading-relaxed text-muted">{p.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-rule px-3 py-1 text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
