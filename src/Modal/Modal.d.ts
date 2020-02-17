import React from 'react';
declare const Modal: React.FC<ModalProps>;
export declare type ModalProps = {
    modals?: ComponentsMap;
    children?: React.ReactNode;
    modal: ModalOptions;
    closeModal: () => void;
};
export declare type ModalOptions = null | string | {};
export interface ComponentsMap {
    [key: string]: any;
}
export interface ModalType {
    type?: string | null;
    focusRef?: React.RefObject<any>;
    enabledScroll?: boolean;
}
export default Modal;
