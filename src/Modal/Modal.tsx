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
  const constraintsRef = useRef(null)

  const {
    type: modalType,
    focusRef,
    enabledScroll,
    drag,
    dragConstraints,
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
            <div
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
          <ModalContent
            skipMotion={skipMotion}
            constraints={dragConstraints}
            constraintsRef={constraintsRef}
            drag={drag}
          >
            <button css={closeButtonStyles} onClick={closeModal}>
              <CloseIcon />
            </button>
            {isValidElement(modal) ? (
              modal
            ) : (
              <div
                css={css`
                  overflow: auto;
                  max-height: 60vh;
                  margin: 83px 152px 68px;
                `}
              >
                {modalType && typeof modals[modalType] !== 'undefined'
                  ? createElement(modals[modalType], modalProps)
                  : null}
              </div>
            )}
          </ModalContent>
        </RemoveScroll>
      </FocusLock>
    </Portal>
  ) : null
}

const ModalContent: React.FC<ContentProps> = ({
  skipMotion,
  children,
  constraints,
  constraintsRef,
  drag = true,
}) => {
  let dragConstraints =
    constraints === undefined
      ? constraintsRef
        ? constraintsRef
        : false
      : constraints

  return skipMotion ? (
    <div css={contentStyles}>{children}</div>
  ) : (
    <motion.div
      css={contentStyles}
      animate={{ translateY: '-50%' }}
      initial={{ translateX: '-50%', translateY: '-50%' }}
      dragConstraints={dragConstraints}
      drag={drag}
    >
      {children}
    </motion.div>
  )
}

export type ContentProps = {
  skipMotion?: boolean
  children?: React.ReactNode
  drag?: DragType
  constraints?: DragConstraintsType
  constraintsRef?: React.RefObject<any>
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
  drag?: DragType
  dragConstraints?: DragConstraintsType
}

export type DragType = boolean | 'x' | 'y' | undefined
export type DragConstraintsType =
  | false
  | {
      top?: number | undefined
      right?: number | undefined
      bottom?: number | undefined
      left?: number | undefined
    }
  | React.RefObject<Element>
  | undefined

export default Modal

const contentStyles = css`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  background-color: #fcf7f6;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.15);
`
const closeButtonStyles = css`
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
`
