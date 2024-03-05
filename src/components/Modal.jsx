import { useNavigate } from 'react-router-dom'
import useCardsStore from '../stores/cardsStore'
import { useClickAway } from '@uidotdev/usehooks'

export const Modal = ({ isOpen, closeModal }) => {
  const navigate = useNavigate()
  const { generalAttempts, refreshGeneralAttempts, seconds } = useCardsStore()

  const ref = useClickAway(() => {
    closeModal()
    refreshGeneralAttempts()
    navigate(0)
  })

  if (!isOpen) return null

  const handlePlayAgain = () => {
    closeModal()
    refreshGeneralAttempts()
    navigate(0)
  }

  return (
    <div className="modal">
      <div className="modal-content" ref={ref}>
        <p className="modal-info">
          You guessed all the cards. Congratulations!
        </p>
        <p>You have made {generalAttempts} attempts</p>
        <p>You have managed to do it in {seconds} seconds</p>
        <div className="modal-buttons">
          <button className="button wrapped" onClick={handlePlayAgain}>
            Play again
          </button>
          <button
            className="button wrapped"
            onClick={() =>
              navigate({
                pathname: '/leaderboard',
              })
            }
          >
            Show scoreboard
          </button>
        </div>
      </div>
    </div>
  )
}
