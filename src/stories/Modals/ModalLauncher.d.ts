declare function ModalLauncher({ modal, label, ...props }: {
    [x: string]: any;
    modal: any;
    label?: string | undefined;
}): JSX.Element;
export declare function ModalLauncherWithTimer({ modal, label, time, ...props }: {
    [x: string]: any;
    modal: any;
    label?: string | undefined;
    time?: number | undefined;
}): JSX.Element;
export default ModalLauncher;
