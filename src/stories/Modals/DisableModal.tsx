import React, { useEffect } from 'react'

export default function DisableModal({ setDisabled, isDisabled, time = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false)
    }, time)
    return () => clearTimeout(timer)
  }, [isDisabled])
  return (
    <>
      <p>
        {isDisabled
          ? `You coudln't close the modal while the transaction is sending…`
          : 'Ready. Try sending request…'}
      </p>
      <button onClick={() => setDisabled(true)}>Send request</button>
    </>
  )
}
