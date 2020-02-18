import React, { useEffect, useState } from 'react'

export default function SideEffectsModal({ closeModal, side, ...rest }) {
  const [str, setStr] = useState('loading…')
  useEffect(() => {
    setTimeout(() => setStr(side), 1600)
  }, [side])
  return (
    <>
      <p>{str}</p>
      <pre>
        <code>{JSON.stringify(rest, null, 2)}</code>
      </pre>
    </>
  )
}
