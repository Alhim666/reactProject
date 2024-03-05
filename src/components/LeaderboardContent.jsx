import { ResultItem } from './ResultItem'

export const LeaderboardContent = ({ playersList, criteria }) => {
  const SortedAndTrimmedResults = playersList
    .sort((a, b) => parseInt(a[criteria]) - parseInt(b[criteria]))
    .slice(0, 10)

  return (
    <div className="leaderboard">
      <div className="leaderboard-row">
        <div className="leaderboard-cell">Placement</div>
        <div className="leaderboard-cell">Name</div>
        <div className="leaderboard-cell">
          {/* Умовний рендеринг */}
          {/* Conditional rendering */}
          {criteria === 'time' ? <span>Time</span> : <span>Attempts</span>}
        </div>
        <div className="leaderboard-cell">Cards</div>
      </div>
      {/* Cписок з елементами */}
      {/* List with Elements */}
      {SortedAndTrimmedResults.map(
        (item, index) =>
          item.point !== null ? (
            <ResultItem
              key={index}
              param1={index + 1}
              param2={item.name}
              param3={
                criteria === 'time' ? item[criteria] + ' sec' : item[criteria]
              }
              param4={item.cards}
            />
          ) : null // Conditional rendering with null. || Умовний рендеринг з null
      )}
    </div>
  )
}

export default LeaderboardContent
