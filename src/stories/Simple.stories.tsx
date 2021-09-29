import React, { useContext } from 'react'
import { Meta } from '@storybook/react'
import { ModalProvider, ModalContext } from '..'

export default {
  title: 'Modal/Super Simple',
} as Meta

export const SuperSimple = () => {
  return (
    <ModalProvider modals={{ simple: Modal }} className="holaaaa">
      <App />
    </ModalProvider>
  )
}

function App() {
  const { openModal } = useContext(ModalContext)
  return (
    <button
      onClick={() =>
        openModal({
          type: 'simple',
          styles: {
            closeButton: (base: any) => ({
              ...base,
              color: 'red',
              left: '1.5em',
              right: 'auto',
              top: '2em',
            }),
          },
        })
      }
    >
      Open
    </button>
  )
}

function Modal() {
  return 'Modal!'
}

SuperSimple.args = {
  primary: true,
  label: 'Super Simple',
}
