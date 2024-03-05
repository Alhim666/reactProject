import { useNavigate } from 'react-router-dom'
import { HomeForm } from './HomeForm'

export const Home = () => {
  const navigate = useNavigate()

  const redirectToGame = ({ type, limit }) => {
    navigate({
      pathname: '/game',
      search: `type=${type}&limit=${limit}`,
    })
  }

  return (
    <div className="container col">
      <div className="home-info">
        <div className="home-info-importance">
          <h1>Why is it important to play memory games</h1>
          <p>
            Playing memory games can improve other brain functions, such as
            attention, concentration, and focus. Memory games give space to
            critical thinking and that helps children nurture their attention to
            detail.
          </p>
          <p>
            Memory games can improve visual recognition. With many memory games
            based on spotting differences, or linking two related images,
            children improve their visual discrimination. This will lead to an
            acceleration in distinguishing images from one and another.
          </p>
          <p>
            Short-term memory is key to playing memory games and playing them
            often will improve function in this area. A good short-term memory
            can improve a person's long-term memory too. Both are linked and
            being able to move things from your short-term memory into long-term
            will improve learning in other areas.
          </p>
          <p>
            Though memory games are a short-term boost, players have to plan
            their moves as they go. From revealing a card to plotting their next
            move, children can learn the importance of thinking ahead and
            plotting their next choice.
          </p>
        </div>
        <div>
          <h1>How to play</h1>
          <p>
            There are cards on the page, which you can click on and "reverse".
          </p>
          <p>
            Maximum number of "opened" cards at the moment is 2. You can click
            them back in order to close them.
          </p>
          <p>If you manage to match 2 same cards, then they become unactive.</p>
          <p>Game ends when there is no more cards left to match.</p>
        </div>
        <div className="home-settings">
          <div>
            <h1>Settings</h1>
          </div>
          <HomeForm redirectToGame={redirectToGame} />
        </div>
      </div>
    </div>
  )
}
