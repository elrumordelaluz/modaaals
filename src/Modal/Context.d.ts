import React from 'react';
import { ComponentsMap, ModalOptions } from './Modal';
interface ContextProps {
    modal: ModalOptions;
    openModal: (options: ModalOptions) => void;
    closeModal: () => void;
}
declare const ModalContext: React.Context<ContextProps>;
declare const ModalProvider: React.FC<ProviderProps>;
export default ModalContext;
export { ModalProvider };
interface ProviderProps {
    children?: React.ReactNode;
    defaultModal?: string;
    modals?: ComponentsMap;
}
