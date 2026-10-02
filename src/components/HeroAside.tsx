const lines = [
  '$ agent run --spec portfolio.md',
  'plan        ✓ 3 tasks',
  'implement   ✓ worktree/a1',
  'review      ✓ clean context',
  'verify      ✓ build + tests',
]

export default function HeroAside() {
  return (
    <aside className="lg:pt-10" aria-hidden="true">
      <div className="overflow-hidden rounded-lg border border-rule font-mono text-[13px]">
        <div className="flex gap-1.5 border-b border-rule px-4 py-3">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full bg-rule" />
          ))}
        </div>
        <div className="space-y-2 p-5">
          {lines.map((l, i) => (
            <p
              key={l}
              className={`anim ${i === 0 ? '' : 'text-muted'}`}
              style={{ animation: 'line-in .4s both', animationDelay: `${i * 0.7}s` }}
            >
              {l}
            </p>
          ))}
          <span
            className="anim inline-block h-4 w-2 bg-accent align-middle"
            style={{ animation: 'blink 1s steps(1) infinite' }}
          />
        </div>
      </div>
    </aside>
  )
}
