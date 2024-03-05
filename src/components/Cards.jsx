import { useEffect } from 'react'
import { CardItem } from './CardItem'
import { useSearchParams } from 'react-router-dom'
import useCardsStore from '../stores/cardsStore'
import { Modal } from './Modal'
import useModal from '../hooks/useModal'
import useRecordStore from '../stores/recordStore'
import { v4 as uuidv4 } from 'uuid'

const FAKE_API_URL = 'http://localhost:3000'

export default function Cards() {
  const [search] = useSearchParams()
  const { openModal, showModal, closeModal } = useModal()
  const {
    cards,
    openedCards,
    fetchCards,
    compareTwoCards,
    generalAttempts,
    seconds,
    addSeconds,
  } = useCardsStore()
  const { addRecord } = useRecordStore()

  let url = ''
  if (search.get('limit')) {
    url = `${FAKE_API_URL}/${search.get('type')}?_limit=${search.get('limit')}`
  } else if (search.get('type')) {
    url = `${FAKE_API_URL}/${search.get('type')}?_limit=10`
  } else {
    url = `${FAKE_API_URL}/fruits?_limit=10`
  }

  useEffect(() => {
    fetchCards(url)
  }, [fetchCards, url])

  const count = cards?.reduce((accumular, currentValue) => {
    {
      return accumular + Number(currentValue.active)
    }
  }, 0)

  useEffect(() => {
    setTimeout(() => {
      compareTwoCards()
    }, 500)
  }, [compareTwoCards, openedCards])

  useEffect(() => {
    let intervalId
    if (count !== 0) {
      intervalId = setInterval(() => {
        addSeconds()
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [addSeconds, count])

  useEffect(() => {
    if (count === 0 && cards.length !== 0) {
      showModal()
      addRecord(`${FAKE_API_URL}/results`, {
        id: uuidv4(),
        name: localStorage.getItem('name') || 'Guest',
        time: seconds - 2,
        attempts: generalAttempts,
        cards: cards.length,
      })
    }
  }, [count, cards, addRecord, generalAttempts, seconds])

  return (
    <>
      <section className="container col">
        <div className="cards">
          {cards &&
            cards.map((card, index) => (
              <CardItem
                key={index}
                id={card.id}
                title={card.title}
                image={card.url}
                isActive={card.active}
              />
            ))}
        </div>
      </section>
      <Modal isOpen={openModal} closeModal={closeModal} />
    </>
  )
}
