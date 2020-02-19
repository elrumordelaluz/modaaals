/// <reference types="react" />
declare function ModalLauncher({ modal, label, ...props }: {
    [x: string]: any;
    modal: any;
    label?: string | undefined;
}): JSX.Element;
export default ModalLauncher;
