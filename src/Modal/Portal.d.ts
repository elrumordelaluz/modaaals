import React from 'react'
declare const Portal: React.FC<PortalProps>
export default Portal
export declare type PortalProps = {
  id?: string
  children?: React.ReactNode
  elem?: string
  skipMotion?: boolean
}
