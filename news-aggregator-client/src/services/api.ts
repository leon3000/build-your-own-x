import axios from 'axios'
import type { Article } from '../types/article'

const client = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function getArticles(): Promise<Article[]> {
  const res = await client.get('/api/articles')
  return res.data as Article[]
}

export async function upvoteArticle(id: string): Promise<Article> {
  const res = await client.post(`/api/articles/${id}/upvote`)
  return res.data as Article
}