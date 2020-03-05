import React, { useContext, useState, useRef, useEffect } from 'react'
import { ModalContext } from '../../src'

function ModalLauncher({ modal, label = 'Open Modal!', ...props }) {
  const { openModal } = useContext(ModalContext)
  return (
    <>
      <button onClick={() => openModal(modal)} {...props}>
        {label}
      </button>
    </>
  )
}

export function ModalLauncherWithTimer({
  modal,
  label = 'Open Modal!',
  time = 5000,
  ...props
}) {
  const { openModal, isDisabled, setDisabled } = useContext(ModalContext)
  useTimeout(() => setDisabled(false), time)

  return (
    <>
      <button
        onClick={() => {
          openModal(modal)
          setDisabled(true)
        }}
        {...props}
        disabled={isDisabled}
      >
        {label} {isDisabled ? ' (DISABLED)' : 'ENABLED'}
      </button>
    </>
  )
}

export default ModalLauncher

// from https://github.com/siddharthkp/use-timeout
function useTimeout(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay)
      return () => clearTimeout(id)
    }
  }, [delay])
}
