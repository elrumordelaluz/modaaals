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

import { useRef } from 'react'

const safeDocument: Document = document

/**
 * Usage:
 * const [blockScroll, allowScroll] = useScrollBlock();
 * Source: https://gist.github.com/reecelucas/2f510e6b8504008deaaa52732202d2da
 */
export const useScrollBlock = (): [() => void, () => void] => {
  const scrollBlocked = useRef(false)
  const html = safeDocument.documentElement
  const { body } = safeDocument

  const blockScroll = (): void => {
    if (!body || !body.style || scrollBlocked.current) return
    if (document == undefined) return

    const scrollBarWidth = window.innerWidth - html.clientWidth
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue('padding-right')
      ) || 0

    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */
    html.style.position = 'relative' /* [1] */
    html.style.overflow = 'hidden' /* [2] */
    // body.style.position = 'relative' /* [1] */
    body.style.overflow = 'hidden' /* [2] */
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`

    scrollBlocked.current = true
  }

  const allowScroll = (): void => {
    if (!body || !body.style || !scrollBlocked.current) return

    html.style.position = ''
    html.style.overflow = ''
    body.style.position = ''
    body.style.overflow = ''
    body.style.paddingRight = ''

    scrollBlocked.current = false
  }

  return [blockScroll, allowScroll]
}
