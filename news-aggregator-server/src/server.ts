import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import articlesRouter from './routes/articles.routes'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.use(articlesRouter)

app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`)
})