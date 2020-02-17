import React, { useEffect } from 'react'

export default function SideEffectsModal({
  closeModal,
  focusRef,
  side,
  ...rest
}) {
  useEffect(() => {
    console.log({ side })
  }, [side])
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
