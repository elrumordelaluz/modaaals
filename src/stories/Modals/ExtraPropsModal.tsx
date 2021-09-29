import React from 'react'

export default function ExtraPropsModal({ closeModal, focusRef, ...rest }) {
  return (
    <>
      <pre>
        <code>{JSON.stringify(rest, null, 2)}</code>
      </pre>
      <button ref={focusRef} onClick={closeModal}>
        close
      </button>
    </>
  )
}
