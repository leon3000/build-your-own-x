import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import NewsFeed from './components/NewsFeed'
import type { Article } from './components/NewsItem'

const SOURCES = ['All', 'CNN', 'Fox News', 'BBC', 'The Verge', 'AP']

const SAMPLE_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Global Markets Rally as Tech Stocks Lead Gains',
    source: 'CNN',
    summary: 'Tech giants push indices higher amid positive earnings and cooling inflation data.',
    publishedAt: new Date().toISOString(),
    url: '#',
  },
  {
    id: '2',
    title: 'Policy Debate Heats Up Ahead of Election Cycle',
    source: 'Fox News',
    summary: 'Candidates outline contrasting visions on the economy and national security.',
    publishedAt: new Date().toISOString(),
    url: '#',
  },
  {
    id: '3',
    title: 'Breakthrough in Battery Tech Promises Faster Charging',
    source: 'The Verge',
    summary: 'New materials could enable rapid charging without degrading capacity over time.',
    publishedAt: new Date().toISOString(),
    url: '#',
  },
  {
    id: '4',
    title: 'International Summit Concludes with Climate Accord',
    source: 'BBC',
    summary: 'Nations agree on a framework to accelerate emissions reductions this decade.',
    publishedAt: new Date().toISOString(),
    url: '#',
  },
  {
    id: '5',
    title: 'Agency Releases Updated Economic Outlook',
    source: 'AP',
    summary: 'Forecast points to steady growth with risks from geopolitical tensions.',
    publishedAt: new Date().toISOString(),
    url: '#',
  },
]

function App() {
  const [activeSource, setActiveSource] = useState<string>('All')

  return (
    <div className="min-h-screen bg-[#1a1b26] text-neutral-100 font-mono">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
          <Sidebar
            sources={SOURCES}
            activeSource={activeSource}
            onSelect={setActiveSource}
          />
          <NewsFeed articles={SAMPLE_ARTICLES} activeSource={activeSource} />
        </div>
      </div>
    </div>
  )
}

export default App
