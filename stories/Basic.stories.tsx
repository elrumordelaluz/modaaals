import React, { useContext, lazy } from 'react'
import { Modal, ModalProvider, ModalContext } from '../src'
import { HelloModal } from './Modals'

export default {
  title: 'Modal',
}

export const Basic = () => (
  <ModalProvider modals={modals}>
    <ExampleButtons />
  </ModalProvider>
)

const ExampleButtons = () => {
  const { openModal } = useContext(ModalContext)
  return (
    <>
      <button onClick={() => openModal('hello')}>open hello</button>
      <button onClick={() => openModal('list')}>open list</button>
      <button onClick={() => openModal({ type: 'f', hola: 1 })}>open f</button>
      <button onClick={() => openModal('empty')}>open empty</button>
    </>
  )
}

const modals = {
  hello: HelloModal,
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
