import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Article } from '../types/article'
import { getArticles, upvoteArticle as apiUpvoteArticle } from '../services/api'

type ArticleContextValue = {
  articles: Article[]
  isLoading: boolean
  error: string | null
  fetchArticles: () => Promise<void>
  upvoteArticle: (id: string) => Promise<void>
}

const ArticleContext = createContext<ArticleContextValue | undefined>(undefined)

export function ArticleProvider({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchArticles = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getArticles()
      setArticles(data)
    } catch (err) {
      setError('Failed to fetch articles')
    } finally {
      setIsLoading(false)
    }
  }

  const upvoteArticle = async (id: string) => {
    try {
      const updated = await apiUpvoteArticle(id)
      setArticles(prev => prev.map(a => (a.id === updated.id ? { ...a, ...updated } : a)))
    } catch (err) {
      // noop for now; could set error state or toast
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  const value: ArticleContextValue = useMemo(() => ({
    articles,
    isLoading,
    error,
    fetchArticles,
    upvoteArticle,
  }), [articles, isLoading, error])

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  )
}

export function useArticles(): ArticleContextValue {
  const ctx = useContext(ArticleContext)
  if (!ctx) throw new Error('useArticles must be used within an ArticleProvider')
  return ctx
}