import React, { useContext } from 'react'
import { Modal, ModalProvider, ModalContext } from '../src'

export default {
  title: 'Modal',
}

export const Basic = () => (
  <ModalProvider>
    <Modal modals={modals} />
    <Component />
  </ModalProvider>
)

const Component = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <>
      <button onClick={() => openModal('hello')}>open hello</button>
      <button onClick={() => openModal('list')}>open list</button>
      <button onClick={() => openModal({ type: 'f', hola: 1 })}>open f</button>
    </>
  )
}

const modals = {
  hello: <div>hello!</div>,
  list: (
    <ul>
      {['a', 'b', 'c'].map(_ => (
        <li key={_}>{_}</li>
      ))}
    </ul>
  ),
  f({ closeModal, ...rest }) {
    return (
      <>
        <code>{JSON.stringify(rest, null, 2)}</code>
        <button onClick={closeModal}>close</button>
      </>
    )
  },
}

Basic.story = {
  name: 'Basic',
}
