import { useState, lazy, Suspense } from 'react'
import useLeaderboardData from '../hooks/useLeaderboardData.jsx'

const LeaderboardContent = lazy(() => import('./LeaderboardContent'))

export const Leaderboard = () => {
  const [criteria, setCriteria] = useState('time')

  const { leaderboardData, isLoading, error } = useLeaderboardData()

  const handleButtonClick = (newCriteria) => {
    setCriteria(newCriteria)
  }

  return (
    <div className="leaderboard-cont">
      <h1 className="leaderboard-header">Leaderboard</h1>
      <div className="leaderboard-btns">
        <button
          className={`button ${criteria === 'time' ? 'active' : ''}`}
          onClick={() => handleButtonClick('time')}
        >
          Time
        </button>
        <button
          className={`button ${criteria === 'attempts' ? 'active' : ''}`}
          onClick={() => handleButtonClick('attempts')}
        >
          Attempts
        </button>
      </div>
      <div className="leaderboard">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <LeaderboardContent
              playersList={leaderboardData}
              criteria={criteria}
            />
          </Suspense>
        )}
      </div>
    </div>
  )
}
