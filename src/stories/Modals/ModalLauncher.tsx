import React, { useContext, useEffect } from 'react'
import { ModalContext } from '../..'

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
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false)
    }, time)
    return () => clearTimeout(timer)
  }, [isDisabled])

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
