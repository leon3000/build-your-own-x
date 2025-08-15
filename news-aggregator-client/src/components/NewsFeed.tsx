import NewsItem, { type Article } from './NewsItem'

type NewsFeedProps = {
  articles: Article[]
  activeSource: string
  onUpvote?: (id: string) => void
}

export default function NewsFeed({ articles, activeSource, onUpvote }: NewsFeedProps) {
  const filtered = activeSource === 'All' ? articles : articles.filter(a => a.source === activeSource)

  return (
    <main className="space-y-3">
      {filtered.map(article => (
        <NewsItem key={article.id} article={article} onUpvote={onUpvote} />
      ))}
      {filtered.length === 0 ? (
        <div className="text-sm text-neutral-400">No articles found.</div>
      ) : null}
    </main>
  )
}