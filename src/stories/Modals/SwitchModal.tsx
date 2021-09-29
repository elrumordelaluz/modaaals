import React from 'react'

export default function StaticModal({ openModal }) {
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => openModal('another')}>Switch to Another</button>
    </>
  )
}
