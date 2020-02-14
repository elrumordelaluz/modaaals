import React, { useContext, Suspense } from 'react'
import { motion } from 'framer-motion'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import Portal from './Portal'

import ModalContext from './Context'

const Modal: React.FC<ModalProps> = ({ modals = {} }) => {
  const { modal, closeModal } = useContext(ModalContext)

  const { type: modalType, ...restProps }: ModalType = modal
    ? typeof modal === 'string'
      ? { type: modal }
      : modal
    : { type: null }

  let modalProps = { closeModal, ...restProps }

  return modal ? (
    <Portal id="___modal" className="portal">
      <FocusLock autoFocus returnFocus>
        <RemoveScroll>
          <motion.div className="modal">
            <button className="closeButton" onClick={closeModal}>
              x
            </button>
            <Suspense fallback={<div>Loading...</div>}>
              {modalType && modals[modalType]
                ? typeof modals[modalType] === 'function'
                  ? modals[modalType]({ ...modalProps })
                  : modals[modalType]
                : null}
            </Suspense>
          </motion.div>
        </RemoveScroll>
      </FocusLock>
    </Portal>
  ) : null
}

export type ModalProps = {
  // isOpen?: boolean
  modals?: ComponentsMap
  // onDismiss?: (event?: React.SyntheticEvent) => void
  children?: React.ReactNode
  // initialFocusRef?: React.RefObject<any>
}

export interface ComponentsMap {
  [key: string]: any
}

export interface ModalType {
  type?: string | null
}

export default Modal
