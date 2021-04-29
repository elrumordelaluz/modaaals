import React, { useEffect, useState } from 'react'
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
  setDisabled: () => {},
  isDisabled: false,
}

interface ContextProps {
  modal: ModalOptions
  openModal: (options: ModalOptions) => void
  closeModal: () => void
  setDisabled: (val: true | false) => void
  isDisabled: true | false
}

const ModalContext = React.createContext<ContextProps>(defaultState)

const ModalProvider: React.FC<ProviderProps> = ({
  children,
  defaultModal,
  modals,
  styles = defaultStyles,
  portalStyle,
  onCloseModal,
  ...props
}) => {
  const [isDisabled, setDisabled] = useState(false)
  const [modal, openModal] = useOpenClose(false, isDisabled)

  useEffect(() => {
    if (defaultModal) {
      openModal(defaultModal)
    } else {
      openModal(null)
    }
  }, [openModal, defaultModal])

  function closeModal() {
    if (!isDisabled) {
      onCloseModal()
      openModal(null)
    }
  }

  return (
    <ModalContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
        setDisabled,
        isDisabled,
      }}
    >
      <Modal
        modals={modals}
        modal={modal}
        closeModal={closeModal}
        openModal={openModal}
        isDisabled={isDisabled}
        setDisabled={setDisabled}
        styles={styles}
        portalStyle={portalStyle}
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
  // classNames?: object
  styles?: StylesObj
  portalStyle?: React.CSSProperties
  onCloseModal: () => void
}
