import React, { useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Portal: React.FC<PortalProps> = ({
  children,
  id = 'portaaal',
  elem = 'modaaal',
  skipMotion = false,
}) => {
  const [, setVisible] = useState(false)
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
  }, [elem, id])

  let toRender = skipMotion ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )

  return ref.current ? createPortal(toRender, ref.current) : null
}

export default Portal

export type PortalProps = {
  id?: string
  children?: React.ReactNode
  elem?: string
  skipMotion?: boolean
}
