/** @jsx jsx */ import { css, jsx } from '@emotion/core'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

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
        <AnimatePresence>
          <motion.div
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={css`
              position: fixed;
              z-index: 2000;
              top: 0;
              left: 0;
              user-select: none;
            `}
          >
            {children}
          </motion.div>
        </AnimatePresence>,
        ref.current
      )
    : null
}

export default Portal

export type PortalProps = {
  children?: React.ReactNode
  elem?: string
} & React.HTMLAttributes<HTMLDivElement>
