import { useEffect, useState } from 'react'
import { CardContent } from './CardContent'
import useCardsStore from '../stores/cardsStore'

export const CardItem = ({ id, title, image, isActive }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [isBlocked, setIsBlocked] = useState(true)

  const {
    setOpenedCards,
    currentAttempts,
    incrementCurrentAttempts,
    decrementCurrentAttempts,
    incrementGeneralAttempts,
  } = useCardsStore()

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false)
      setIsBlocked(false)
    }, 2000)
  }, [setIsOpen, setIsBlocked])

  const handleClick = () => {
    if (!isBlocked) {
      if (currentAttempts !== 2 && !isOpen) {
        if (currentAttempts === 1) {
          incrementGeneralAttempts()
        }
        setOpenedCards(id, isOpen)
        incrementCurrentAttempts()
        setIsOpen((isOpen) => !isOpen)
      } else {
        if (isOpen) {
          setOpenedCards(id, isOpen)
          decrementCurrentAttempts()
          setIsOpen(false)
        }
      }
    }
  }

  if (isActive) {
    return (
      <div className="card-item" onClick={() => handleClick()}>
        {isOpen ? (
          <CardContent title={title} image={image} />
        ) : (
          <p className="closed">?</p>
        )}
      </div>
    )
  } else {
    return (
      <div className="card-item guessed">
        <CardContent title={title} image={image} />
      </div>
    )
  }
}
