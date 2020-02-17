import React, { useEffect } from 'react'
import { useOpenClose } from '../utils'
import Modal, { ComponentsMap, ModalOptions } from './Modal'

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

const ModalContext = React.createContext<ContextProps>(defaultState)

const ModalProvider: React.FC<ProviderProps> = ({
  children,
  defaultModal,
  modals,
}) => {
  const [modal, openModal] = useOpenClose(false)
  useEffect(() => {
    if (defaultModal) {
      openModal(defaultModal)
    } else {
      openModal(null)
    }
  }, [openModal, defaultModal])

  function closeModal() {
    openModal(null)
  }

  return (
    <ModalContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
      }}
    >
      <Modal modals={modals} modal={modal} closeModal={closeModal} />
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext

export { ModalProvider }

interface ProviderProps {
  children?: React.ReactNode
  defaultModal?: string
  modals?: ComponentsMap
}
