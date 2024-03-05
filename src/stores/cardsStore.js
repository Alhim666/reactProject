import { create } from 'zustand'

const useCardsStore = create((set) => ({
  cards: [],
  openedCards: { first: 0, second: 0 },
  currentAttempts: 0,
  generalAttempts: 0,
  seconds: 0,
  fetchCards: async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    const shuffledCards = [...data, ...data]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    set(() => ({
      cards: shuffledCards,
    }))
  },
  compareTwoCards: () =>
    set((state) => ({
      cards:
        state.openedCards.first === state.openedCards.second &&
        state.currentAttempts !== 0
          ? state.cards.map((card) =>
              card.id === state.openedCards.first
                ? { ...card, active: false }
                : card
            )
          : state.cards,
      openedCards:
        state.openedCards.first === state.openedCards.second &&
        state.currentAttempts !== 0
          ? { first: 0, second: 0 }
          : state.openedCards,
      currentAttempts:
        state.openedCards.first === state.openedCards.second &&
        state.currentAttempts !== 0
          ? 0
          : state.currentAttempts,
    })),
  refreshGeneralAttempts: () =>
    set(() => ({
      generalAttempts: 0,
    })),
  setOpenedCards: (id, isOpen) =>
    set((state) => ({
      openedCards: isOpen
        ? state.openedCards.first === id
          ? {
              ...state.openedCards,
              first: 0,
            }
          : {
              ...state.openedCards,
              second: 0,
            }
        : state.openedCards.first !== 0
          ? {
              ...state.openedCards,
              second: id,
            }
          : { ...state.openedCards, first: id },
    })),
  incrementCurrentAttempts: () =>
    set((state) => ({
      currentAttempts: state.currentAttempts + 1,
    })),
  decrementCurrentAttempts: () =>
    set((state) => ({
      currentAttempts: state.currentAttempts - 1,
    })),
  incrementGeneralAttempts: () =>
    set((state) => ({
      generalAttempts: state.generalAttempts + 1,
    })),
  addSeconds: () =>
    set((state) => ({
      seconds: state.seconds + 1,
    })),
}))

export default useCardsStore
