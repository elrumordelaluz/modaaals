/** @jsx jsx */ import { jsx, InterpolationWithTheme } from '@emotion/core'
import React, {
  useRef,
  createElement,
  isValidElement,
  Dispatch,
  SetStateAction,
} from 'react'
import { motion, AnimationControls, TargetAndTransition } from 'framer-motion'
import { FocusScope } from '@react-aria/focus'
import { RemoveScroll } from 'react-remove-scroll'

import Portal from './Portal'
import CloseIcon from './CloseIcon'

const Modal: React.FC<ModalProps> = ({
  modals = {},
  modal,
  openModal,
  closeModal,
  isDisabled,
  setDisabled,
  skipMotion,
  drag,
  dragConstraints,
  enabledScroll,
  motionProps,
  styles = defaultStyles,
  portalStyle,
  className,
}) => {
  const constraintsRef = useRef(null)

  const {
    type: modalType,
    focusRef,
    skipMotion: skipMotionOverride,
    drag: dragOverride,
    dragConstraints: dragConstraintsOverride,
    enabledScroll: enabledScrollOverride,
    motionProps: motionProspOverride,
    ...restProps
  }: SingleModalType = modal
    ? typeof modal === 'string'
      ? { type: modal }
      : modal
    : { type: null }

  let modalProps = {
    openModal,
    closeModal,
    isDisabled,
    setDisabled,
    focusRef,
    ...restProps,
  }

  const getStyles = (key: StylesKeys): {} => {
    const base = defaultStyles[key]()
    base.boxSizing = 'border-box'
    if (styles[key]) {
      return styles[key](base)
    }
    return base
  }

  const dragValue =
    dragOverride !== undefined ? dragOverride : drag !== undefined ? drag : true
  return modal ? (
    <Portal skipMotion={skipMotion || skipMotionOverride} style={portalStyle}>
      <FocusScope contain autoFocus restoreFocus>
        <RemoveScroll enabled={!enabledScroll || !enabledScrollOverride}>
          <div onClick={closeModal} css={getStyles('overlay')}>
            <div ref={constraintsRef} css={getStyles('constraints')} />
          </div>

          <ModalContent
            skipMotion={skipMotion || skipMotionOverride}
            drag={dragValue}
            dragConstraints={dragConstraints || dragConstraintsOverride}
            constraintsRef={constraintsRef}
            styles={getStyles('contentOuter')}
            motionProps={motionProps || motionProspOverride}
            className={className}
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
      </FocusScope>
    </Portal>
  ) : null
}

const ModalContent: React.FC<ContentProps> = ({
  skipMotion,
  children,
  dragConstraints,
  constraintsRef,
  drag,
  styles,
  className,
  motionProps = {
    animate: { translateY: '-50%' },
    initial: { translateX: '-50%', translateY: '-43%' },
  },
}) => {
  let customDragConstraints =
    dragConstraints === undefined
      ? constraintsRef
        ? constraintsRef
        : false
      : dragConstraints

  return skipMotion ? (
    <div css={styles} className={className}>
      {children}
    </div>
  ) : (
    <motion.div
      css={styles}
      dragConstraints={customDragConstraints}
      drag={drag}
      className={className}
      initial
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

export type ContentProps = ExtraProps & {
  children?: React.ReactNode
  constraintsRef?: React.RefObject<any>
  styles?: InterpolationWithTheme<any>
}

export type StyleFn = (provided: React.CSSProperties) => React.CSSProperties

export type StylesKeys =
  | 'overlay'
  | 'constraints'
  | 'contentOuter'
  | 'contentInner'
  | 'closeButton'

export type StylesObj = {
  [key in StylesKeys]?: StyleFn
}

export type ModalProps = ExtraProps & {
  modals?: ComponentsMap
  children?: React.ReactNode
  modal: ModalOptions
  closeModal: () => void
  openModal: () => void
  isDisabled: boolean
  setDisabled: Dispatch<SetStateAction<boolean>>
  styles: StylesObj
  portalStyle?: React.CSSProperties
}

export type ExtraProps = {
  skipMotion?: boolean
  drag?: DragType
  dragConstraints?: DragConstraintsType
  enabledScroll?: boolean
  motionProps?: MotionProps
  className?: string
}

export type MotionProps = {
  animate?:
    | string
    | AnimationControls
    | TargetAndTransition
    | string[]
    | undefined
  initial?: any
}

export type ModalOptions = null | string | {}

export interface ComponentsMap {
  [key: string]: any
}

export type SingleModalType = ExtraProps & {
  type?: string | null
  focusRef?: React.RefObject<any>
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
  overlay: () => ({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(42, 38, 33, 0.5)',
  }),
  constraints: () => ({
    position: 'absolute',
    top: '10vh',
    right: '10vh',
    bottom: '10vh',
    left: '10vh',
  }),
  contentOuter: () => ({
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
  }),
  contentInner: () => ({
    overflow: 'auto',
    maxHeight: '60vh',
    margin: '83px 152px 68px',
  }),
  closeButton: () => ({
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
  }),
}
