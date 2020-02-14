import React, { useEffect } from 'react'
import { useOpenClose } from '../utils'

const defaultState = {
  modal: null,
  openModal: () => {},
  closeModal: () => {},
}

interface ContextProps {
  modal: ModalOptions
  openModal: (options: ModalOptions) => void
  closeModal: () => void
}

type ModalOptions = null | string | {}

const ModalContext = React.createContext<ContextProps>(defaultState)

const ModalProvider: React.FC<ProviderProps> = ({ children, defaultModal }) => {
  const [modal, openModal] = useOpenClose(false)
  useEffect(() => {
    if (defaultModal) {
      openModal(defaultModal)
    } else {
      openModal(null)
    }
  }, [openModal, defaultModal])

  return (
    <ModalContext.Provider
      value={{
        modal,
        openModal,
        closeModal: () => openModal(null),
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext

export { ModalProvider }

interface ProviderProps {
  children?: React.ReactNode
  defaultModal?: string
}
