import React, { useEffect, useState, useContext } from 'react'
import { useOpenClose } from '../utils'
import Modal, { ComponentsMap, ModalOptions, ExtraProps } from './Modal'
import { StylesObj, defaultStyles } from './styles'
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
      if (onCloseModal && typeof onCloseModal === 'function') {
        onCloseModal(modal)
      }
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

export function useModaaals() {
  return useContext(ModalContext)
}

type ProviderProps = ExtraProps & {
  children?: React.ReactNode
  defaultModal?: string
  modals?: ComponentsMap
  // classNames?: object
  styles?: StylesObj
  portalStyle?: React.CSSProperties
  onCloseModal?: (modal?: ComponentsMap) => void
}
