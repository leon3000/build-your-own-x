export default function Header() {
  return (
    <header className="w-full border-b border-neutral-800 bg-[#14151f]">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="text-emerald-400 font-mono text-sm sm:text-base">
          [user@news-aggregator ~]$ ./fetch-headlines
        </div>
      </div>
    </header>
  )
}