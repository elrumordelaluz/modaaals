/** @jsx jsx */ import { InterpolationWithTheme } from '@emotion/core'
import React, { Dispatch, SetStateAction } from 'react'
import { AnimationControls, TargetAndTransition } from 'framer-motion'
declare const Modal: React.FC<ModalProps>
export declare type ContentProps = ExtraProps & {
  children?: React.ReactNode
  constraintsRef?: React.RefObject<any>
  styles?: InterpolationWithTheme<any>
}
export declare type StyleFn = (
  provided: React.CSSProperties
) => React.CSSProperties
export declare type StylesKeys =
  | 'overlay'
  | 'constraints'
  | 'contentOuter'
  | 'contentInner'
  | 'closeButton'
export declare type StylesObj = {
  [key in StylesKeys]?: StyleFn
}
export declare type ModalProps = ExtraProps & {
  modals?: ComponentsMap
  children?: React.ReactNode
  modal: ModalOptions
  closeModal: () => void
  isDisabled: boolean
  setDisabled: Dispatch<SetStateAction<boolean>>
  styles: StylesObj
}
export declare type ExtraProps = {
  skipMotion?: boolean
  drag?: DragType
  dragConstraints?: DragConstraintsType
  enabledScroll?: boolean
  motionProps?: MotionProps
}
export declare type MotionProps = {
  animate?:
    | string
    | AnimationControls
    | TargetAndTransition
    | string[]
    | undefined
  initial?: any
}
export declare type ModalOptions = null | string | {}
export interface ComponentsMap {
  [key: string]: any
}
export declare type SingleModalType = ExtraProps & {
  type?: string | null
  focusRef?: React.RefObject<any>
}
export declare type DragType = boolean | 'x' | 'y' | undefined
export declare type DragConstraintsType =
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
export declare const defaultStyles: {
  [key: string]: any
}
