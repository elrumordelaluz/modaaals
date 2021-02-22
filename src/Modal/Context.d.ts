import React from 'react'
import { ComponentsMap, ModalOptions, StylesObj, ExtraProps } from './Modal'
interface ContextProps {
  modal: ModalOptions
  openModal: (options: ModalOptions) => void
  closeModal: () => void
  setDisabled: (val: true | false) => void
  isDisabled: true | false
}
declare const ModalContext: React.Context<ContextProps>
declare const ModalProvider: React.FC<ProviderProps>
export default ModalContext
export { ModalProvider }
declare type ProviderProps = ExtraProps & {
  children?: React.ReactNode
  defaultModal?: string
  modals?: ComponentsMap
  classNames?: object
  styles?: StylesObj
}
