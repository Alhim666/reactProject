import { List } from 'react-virtualized/dist/es/List'
import { ResultItem } from './ResultItem'
import useLeaderboardData from '../hooks/useLeaderboardData'

export const AllResults = () => {
  const { leaderboardData, isLoading } = useLeaderboardData()

  const rowRenderer = ({ index, key, style }) => {
    const item = leaderboardData[index]
    return (
      <div key={key} style={style}>
        <ResultItem
          param1={item.name}
          param2={item.time + ' sec'}
          param3={item.attempts}
          param4={item.cards}
        />
      </div>
    )
  }

  return (
    <div className="leaderboard-cont">
      <h1 className="leaderboard-header">All results</h1>
      <div className="leaderboard">
        <div className="leaderboard-row">
          <div className="leaderboard-cell">Name</div>
          <div className="leaderboard-cell">Time</div>
          <div className="leaderboard-cell">Attempts</div>
          <div className="leaderboard-cell">Cards</div>
        </div>
        <List
          width={510}
          height={450}
          rowCount={leaderboardData.length}
          rowHeight={30}
          rowRenderer={rowRenderer}
        />
        {isLoading && <div>Loading...</div>}
      </div>
    </div>
  )
}
