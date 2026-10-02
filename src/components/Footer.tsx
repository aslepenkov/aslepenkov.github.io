import { profile } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-rule py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 sm:flex-row sm:flex-wrap sm:justify-between sm:px-8">
        <p>{profile.location} · Open to remote &amp; relocation</p>
        <p className="flex flex-wrap gap-x-6 gap-y-1">
          <a className="hover:text-accent" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="hover:text-accent" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hover:text-accent" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </footer>
  )
}
