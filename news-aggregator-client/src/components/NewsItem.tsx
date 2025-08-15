import { ArrowUp } from 'lucide-react'
import type { Article } from '../types/article'

type NewsItemProps = {
  article: Article
  onUpvote?: (id: string) => void
}

export default function NewsItem({ article, onUpvote }: NewsItemProps) {
  const upvoteCount = article.upvotes ?? 0

  return (
    <article className="rounded border border-neutral-800 bg-neutral-900/40 p-4 hover:border-neutral-700 transition-colors">
      <div className="flex items-start gap-3">
        <span className="text-neutral-500 select-none">&gt;</span>
        <div className="flex-1">
          <div className="text-sm leading-6">
            <span className="text-emerald-400">[{article.source}]</span>{' '}
            <a
              href={article.url ?? '#'}
              target={article.url ? '_blank' : undefined}
              rel={article.url ? 'noreferrer' : undefined}
              className="text-neutral-100 hover:text-emerald-400 underline-offset-2 hover:underline"
            >
              {article.title}
            </a>
            <span className="text-neutral-500"> {' || '} </span>
            <span className="text-neutral-300">Upvotes: {upvoteCount}</span>
            <button
              type="button"
              aria-label="Upvote"
              className="ml-2 inline-flex items-center gap-1 rounded border border-neutral-800 bg-neutral-900 px-2 py-1 text-xs text-neutral-300 hover:text-emerald-400 hover:border-neutral-700"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onUpvote?.(article.id)
              }}
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Upvote
            </button>
          </div>
          {article.summary ? (
            <p className="mt-1 pl-0 text-xs sm:text-sm text-neutral-300 uppercase tracking-wide">
              {article.summary}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  )
}