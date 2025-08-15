import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import NewsFeed from './components/NewsFeed'
import { ArticleProvider } from './context/ArticleContext'

const SOURCES = ['All', 'CNN', 'Fox News', 'BBC', 'The Verge', 'AP']

function App() {
  const [activeSource, setActiveSource] = useState<string>('All')

  return (
    <div className="min-h-screen bg-[#1a1b26] text-neutral-100 font-mono">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-6">
        <ArticleProvider>
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
            <Sidebar
              sources={SOURCES}
              activeSource={activeSource}
              onSelect={setActiveSource}
            />
            <NewsFeed activeSource={activeSource} />
          </div>
        </ArticleProvider>
      </div>
    </div>
  )
}

export default App
