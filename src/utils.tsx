import { useState, useEffect } from 'react'
import { KEY_ESCAPE } from 'keycode-js'

export function useOpenClose(
  initialValue: any = false,
  disabled: boolean = false
) {
  const [isOpen, setOpen] = useState(initialValue)

  useEffect(() => {
    const handleEvent = (e: KeyboardEvent) => {
      if (e.keyCode === KEY_ESCAPE && !disabled) {
        e.preventDefault()
        setOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEvent)
    }
    return () => {
      document.removeEventListener('keydown', handleEvent)
    }
  }, [isOpen, disabled])

  return [isOpen, setOpen]
}
