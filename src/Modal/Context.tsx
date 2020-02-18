import React, { useEffect } from 'react'
import { useOpenClose } from '../utils'
import Modal, {
  ComponentsMap,
  ModalOptions,
  StylesObj,
  defaultStyles,
  ExtraProps,
} from './Modal'

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
  styles = defaultStyles,
  ...props
}) => {
  console.log({ props })
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
      <Modal
        modals={modals}
        modal={modal}
        closeModal={closeModal}
        styles={styles}
        {...props}
      />
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext

export { ModalProvider }

type ProviderProps = ExtraProps & {
  children?: React.ReactNode
  defaultModal?: string
  modals?: ComponentsMap
  classNames?: object
  styles?: StylesObj
}
