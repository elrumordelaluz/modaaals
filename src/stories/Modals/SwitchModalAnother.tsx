import React from 'react'

export default function StaticModal({ openModal }) {
  return (
    <>
      <h1>Another</h1>
      <button onClick={() => openModal('switch')}>Switch back</button>
    </>
  )
}
