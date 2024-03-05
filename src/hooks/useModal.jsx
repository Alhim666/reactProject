import { useState } from 'react'

const useModal = () => {
  const [openModal, setOpenModal] = useState(false)

  const showModal = () => {
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  return { openModal, showModal, closeModal }
}

export default useModal
