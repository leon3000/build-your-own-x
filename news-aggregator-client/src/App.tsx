import { Terminal } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <Terminal className="h-6 w-6 text-emerald-400" />
          <h1 className="text-2xl font-semibold tracking-tight">news-aggregator-client</h1>
        </div>
        <div className="rounded border border-neutral-700 bg-neutral-900/60 p-4">
          <pre className="text-sm text-neutral-300">$ ready: vite + react + ts + tailwind + axios + lucide-react</pre>
        </div>
      </div>
    </div>
  )
}

export default App
