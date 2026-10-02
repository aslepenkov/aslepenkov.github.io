import { profile } from '../content'
import HeroAside from './HeroAside'

const link =
  'underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'

export default function Hero() {
  return (
    <header className="grid gap-16 border-b border-rule py-20 sm:py-32 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
      <div>
      <p className="mb-6 text-sm tracking-widest text-muted uppercase">{profile.title}</p>
      <h1 className="font-display text-5xl leading-[1.05] font-normal break-words sm:text-7xl md:text-8xl">
        {profile.name}
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{profile.summary}</p>

      <dl className="mt-14 grid gap-8 sm:grid-cols-3">
        {profile.metrics.map((m) => (
          <div key={m.value} className="border-t border-rule pt-4">
            <dt className="font-display text-4xl text-accent">{m.value}</dt>
            <dd className="mt-1 text-sm text-muted">{m.label}</dd>
          </div>
        ))}
      </dl>

      <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium">
        <a className={link} href={`mailto:${profile.email}`}>Email</a>
        <a className={link} href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className={link} href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
      </div>
      <HeroAside />
    </header>
  )
}
