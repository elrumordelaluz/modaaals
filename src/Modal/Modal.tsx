/** @jsx jsx */ import { jsx, InterpolationWithTheme } from '@emotion/core'
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
  styles = {},
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

  const getStyles = (key: string): {} => {
    const base = defaultStyles[key]
    base.boxSizing = 'border-box'
    const custom = styles[key]
    return custom ? custom(base) : base
  }

  return modal ? (
    <Portal skipMotion={skipMotion}>
      <FocusLock autoFocus returnFocus onActivation={onActivationFocusLock}>
        <RemoveScroll enabled={!enabledScroll}>
          <div id="___overlay" onClick={closeModal} css={getStyles('overlay')}>
            <div ref={constraintsRef} css={getStyles('constraints')} />
          </div>

          <ModalContent
            skipMotion={skipMotion}
            constraints={dragConstraints}
            constraintsRef={constraintsRef}
            styles={getStyles('contentOuter')}
            drag={drag}
          >
            <button css={getStyles('closeButton')} onClick={closeModal}>
              <CloseIcon />
            </button>
            {isValidElement(modal) ? (
              modal
            ) : (
              <div css={getStyles('contentInner')}>
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
  styles,
}) => {
  let dragConstraints =
    constraints === undefined
      ? constraintsRef
        ? constraintsRef
        : false
      : constraints

  return skipMotion ? (
    <div css={styles}>{children}</div>
  ) : (
    <motion.div
      css={styles}
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
  styles?: InterpolationWithTheme<any>
}

export type StyleFn = {
  [key: string]: (provided: React.CSSProperties) => React.CSSProperties
}

export type ModalProps = {
  modals?: ComponentsMap
  children?: React.ReactNode
  modal: ModalOptions
  closeModal: () => void
  skipMotion?: boolean
  styles?: StyleFn
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

export const defaultStyles: { [key: string]: any } = {
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(42, 38, 33, 0.5)',
  },
  constraints: {
    position: 'absolute',
    top: '10vh',
    right: '10vh',
    bottom: '10vh',
    left: '10vh',
  },
  contentOuter: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    background: '#fcf7f6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 24,
    boxShadow: '0 10px 60px rgba(0, 0, 0, 0.15)',
  },
  contentInner: {
    overflow: 'auto',
    maxHeight: '60vh',
    margin: '83px 152px 68px',
  },
  closeButton: {
    width: '16px',
    height: '16px',
    border: 0,
    outline: 0,
    background: 'none',
    padding: 0,
    color: '#56595f',
    cursor: 'pointer',
    position: 'absolute',
    top: '38px',
    left: '38px',
    transition: 'color 0.3s',
    '&: hover': {
      color: 'var(--accent)',
    },
  },
}
