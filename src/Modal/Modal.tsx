/** @jsx jsx */ import { css, jsx } from '@emotion/core'
import React, {
  useRef,
  useCallback,
  createElement,
  isValidElement,
} from 'react'
import { motion } from 'framer-motion'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'

import Portal from './Portal'
import CloseIcon from './CloseIcon'

const Modal: React.FC<ModalProps> = ({
  modals = {},
  modal,
  closeModal,
  skipMotion,
}) => {
  const contentRef = useRef(null)
  const constraintsRef = useRef(null)

  const {
    type: modalType,
    focusRef,
    enabledScroll,
    ...restProps
  }: ModalType = modal
    ? typeof modal === 'string'
      ? { type: modal }
      : modal
    : { type: null }

  let modalProps = { closeModal, focusRef, ...restProps }

  const onActivationFocusLock = useCallback(() => {
    if (focusRef && focusRef.current) {
      focusRef.current.focus()
    }
  }, [focusRef])

  return modal ? (
    <Portal skipMotion={skipMotion}>
      <FocusLock autoFocus returnFocus onActivation={onActivationFocusLock}>
        <RemoveScroll enabled={!enabledScroll}>
          <div
            id="___overlay"
            onClick={closeModal}
            css={css`
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: rgba(42, 38, 33, 0.5);
            `}
          >
            <motion.div
              ref={constraintsRef}
              css={css`
                position: absolute;
                top: 10vh;
                right: 10vh;
                bottom: 10vh;
                left: 10vh;
              `}
            />
          </div>
          <motion.div
            id="___content"
            css={css`
              position: fixed;
              border: 1px solid rgba(0, 0, 0, 0.2);
              left: 50%;
              top: 50%;
              background-color: #fcf7f6;
              overflow: auto;
              border-radius: 24px;
              box-shadow: 0 10px 60px rgba(0, 0, 0, 0.15);
            `}
            ref={contentRef}
            animate={{ translateY: '-50%' }}
            initial={{ translateX: '-50%', translateY: '-50%' }}
            dragConstraints={constraintsRef}
            drag
          >
            <button
              css={css`
                width: 16px;
                height: 16px;
                border: 0;
                outline: 0;
                background: none;
                padding: 0;
                color: #56595f;
                cursor: pointer;
                position: absolute;
                top: 38px;
                left: 38px;
                transition: color 0.3s;
                outline: 0 !important;
                &:hover {
                  color: var(--accent);
                }
              `}
              onClick={closeModal}
            >
              <CloseIcon />
            </button>
            {isValidElement(modal) ? (
              modal
            ) : (
              <div
                css={css`
                  padding: 83px 152px 68px;
                  max-height: 60vh;
                  overflow: auto;
                `}
              >
                {modalType && typeof modals[modalType] !== 'undefined'
                  ? createElement(modals[modalType], modalProps)
                  : null}
              </div>
            )}
          </motion.div>
        </RemoveScroll>
      </FocusLock>
    </Portal>
  ) : null
}

export type ModalProps = {
  modals?: ComponentsMap
  children?: React.ReactNode
  modal: ModalOptions
  closeModal: () => void
  skipMotion?: boolean
}

export type ModalOptions = null | string | {}

export interface ComponentsMap {
  [key: string]: any
}

export interface ModalType {
  type?: string | null
  focusRef?: React.RefObject<any>
  enabledScroll?: boolean
}

export default Modal
