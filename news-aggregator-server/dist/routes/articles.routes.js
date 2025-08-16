import { Router } from 'express';
import { getArticles, upvoteArticle } from '../controllers/articles.controller';
const router = Router();
// GET /api/articles - Fetch all articles sorted by createdAt desc
router.get('/api/articles', getArticles);
// POST /api/articles/:id/upvote - Increment upvotes for a specific article
router.post('/api/articles/:id/upvote', upvoteArticle);
export default router;
