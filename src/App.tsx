import { useState } from 'react'
import LandingPage from './components/LandingPage'
import ResumeBuilder from './components/ResumeBuilder'

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'builder'>('landing')

  return (
    <div>
      {currentPage === 'landing' ? (
        <LandingPage onGetStarted={() => setCurrentPage('builder')} />
      ) : (
        <ResumeBuilder onBack={() => setCurrentPage('landing')} />
      )}
    </div>
  )
}

export default App
