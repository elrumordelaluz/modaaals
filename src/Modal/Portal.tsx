import React, { useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

const Portal: React.FC<PortalProps> = ({
  children,
  id = 'portal',
  elem = 'modal-portal',
  className,
}) => {
  const [isVisible, setVisible] = useState(false)
  let ref = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    if (ref.current === null) {
      ref.current = document.createElement(elem)
      ref.current.setAttribute('id', id)
    }

    document.body.appendChild(ref.current)
    setVisible(true)
    return () => {
      if (ref.current) {
        setVisible(false)
        document.body.removeChild(ref.current)
      }
    }
  }, [elem])

  return ref.current
    ? createPortal(
        <motion.div
          className={className}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>,
        ref.current
      )
    : null
}

export default Portal

export type PortalProps = {
  children?: React.ReactNode
  elem?: string
} & React.HTMLAttributes<HTMLDivElement>
