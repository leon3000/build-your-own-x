import { prisma } from '../prisma/client';
export async function getArticles(req, res) {
    try {
        const articles = await prisma.article.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json(articles);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
}
export async function upvoteArticle(req, res) {
    const { id } = req.params;
    const articleId = Number(id);
    if (Number.isNaN(articleId)) {
        return res.status(400).json({ error: 'Invalid article id' });
    }
    try {
        const updated = await prisma.article.update({
            where: { id: articleId },
            data: { upvotes: { increment: 1 } },
        });
        res.json(updated);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to upvote article' });
    }
}
