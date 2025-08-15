export type Article = {
  id: string
  title: string
  source: string
  summary?: string
  publishedAt?: string
  url?: string
}

type NewsItemProps = {
  article: Article
}

export default function NewsItem({ article }: NewsItemProps) {
  return (
    <article className="rounded border border-neutral-800 bg-neutral-900/40 p-4 hover:border-neutral-700 transition-colors">
      <a
        href={article.url ?? '#'}
        target={article.url ? '_blank' : undefined}
        rel={article.url ? 'noreferrer' : undefined}
        className="block text-neutral-100 hover:text-emerald-400 font-medium"
      >
        {article.title}
      </a>
      <div className="mt-2 text-xs text-neutral-400">
        <span>{article.source}</span>
        {article.publishedAt ? <span> • {new Date(article.publishedAt).toLocaleString()}</span> : null}
      </div>
      {article.summary ? (
        <p className="mt-3 text-sm text-neutral-300">
          {article.summary}
        </p>
      ) : null}
    </article>
  )
}