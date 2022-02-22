/** @jsxRuntime classic */ /** @jsx jsx */ import { jsx } from '@emotion/react'
import React, {
  useRef,
  createElement,
  isValidElement,
  Dispatch,
  SetStateAction,
} from 'react'
import {
  motion,
  AnimatePresence,
  AnimationControls,
  TargetAndTransition,
} from 'framer-motion'
import { FocusScope } from '@react-aria/focus'
import { RemoveScroll } from 'react-remove-scroll'
import { defaultStyles, stylesMatcher, StylesObj } from './styles'
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
    styles: stylesOverride,
    onClick: onClickOverride,
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

  const stls = { ...styles, ...stylesOverride }
  const getStyles = stylesMatcher(stls)

  const dragValue =
    dragOverride !== undefined ? dragOverride : drag !== undefined ? drag : true

  function onClick() {
    if (onClickOverride) {
      onClickOverride()
    } else {
      closeModal()
    }
  }

  return modal ? (
    <Portal skipMotion={skipMotion || skipMotionOverride} style={portalStyle}>
      <FocusScope contain autoFocus restoreFocus>
        <RemoveScroll enabled={!enabledScroll || !enabledScrollOverride}>
          <div onClick={onClick} css={getStyles('overlay', {})}>
            <div ref={constraintsRef} css={getStyles('constraints', {})} />
          </div>

          <ModalContent
            skipMotion={skipMotion || skipMotionOverride}
            drag={dragValue}
            dragConstraints={dragConstraints || dragConstraintsOverride}
            constraintsRef={constraintsRef}
            styles={stls}
            motionProps={motionProps || motionProspOverride}
            className={className}
          >
            <button css={getStyles('closeButton', {})} onClick={onClick}>
              <CloseIcon />
            </button>
            {isValidElement(modal) ? (
              modal
            ) : (
              <div css={getStyles('contentInner', {})}>
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

  const getStyles = stylesMatcher(styles)

  return skipMotion ? (
    <div css={getStyles('contentOuter', {})} className={className}>
      {children}
    </div>
  ) : (
    <AnimatePresence>
      <motion.div
        css={getStyles('contentOuter', {})}
        dragConstraints={customDragConstraints}
        drag={drag}
        className={className}
        {...motionProps}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export type ContentProps = ExtraProps & {
  children?: React.ReactNode
  constraintsRef?: React.RefObject<any>
  styles: StylesObj
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
  styles?: StylesObj
  onClick?: () => void
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
