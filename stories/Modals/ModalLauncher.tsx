import React, { useContext } from 'react'
import { ModalContext } from '../../src'

function ModalLauncher({ modal, label = 'Open Modal!', ...props }) {
  const { openModal } = useContext(ModalContext)
  return (
    <button onClick={() => openModal(modal)} {...props}>
      {label}
    </button>
  )
}

export default ModalLauncher
