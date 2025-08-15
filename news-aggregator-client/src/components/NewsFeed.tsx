import NewsItem from './NewsItem'
import type { Article } from '../types/article'
import { useArticles } from '../context/ArticleContext'

type NewsFeedProps = {
  activeSource: string
}

export default function NewsFeed({ activeSource }: NewsFeedProps) {
  const { articles, upvoteArticle } = useArticles()
  const filtered: Article[] = activeSource === 'All' ? articles : articles.filter(a => a.source === activeSource)

  return (
    <main className="space-y-3">
      {filtered.map(article => (
        <NewsItem key={article.id} article={article} onUpvote={upvoteArticle} />
      ))}
      {filtered.length === 0 ? (
        <div className="text-sm text-neutral-400">No articles found.</div>
      ) : null}
    </main>
  )
}