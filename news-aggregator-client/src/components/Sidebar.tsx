type SidebarProps = {
  sources: string[]
  activeSource: string
  onSelect: (source: string) => void
}

export default function Sidebar({ sources, activeSource, onSelect }: SidebarProps) {
  return (
    <aside className="border-r border-neutral-800 pr-4">
      <h2 className="mb-3 text-xs uppercase tracking-widest text-neutral-500">Sources</h2>
      <nav className="space-y-1">
        {sources.map(source => {
          const isActive = source === activeSource
          return (
            <button
              key={source}
              className={[
                'w-full text-left rounded px-3 py-2 text-sm transition-colors',
                isActive ? 'bg-neutral-800 text-neutral-100' : 'text-neutral-300 hover:bg-neutral-800/60 hover:text-neutral-100',
              ].join(' ')}
              onClick={() => onSelect(source)}
            >
              {source}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}