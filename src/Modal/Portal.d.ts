import React from 'react';
declare const Portal: React.FC<PortalProps>;
export default Portal;
export declare type PortalProps = {
    children?: React.ReactNode;
    elem?: string;
} & React.HTMLAttributes<HTMLDivElement>;
