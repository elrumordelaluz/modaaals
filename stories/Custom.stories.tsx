/** @jsx jsx */ import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import { ModalProvider, ModalContext } from '../src'

export default {
  title: 'Custom Modals',
}

Styles.story = {
  name: 'Chat example',
}

export function Styles() {
  return (
    <ModalProvider
      styles={{
        contentOuter: base => {
          return {
            ...base,
            top: 0,
            right: 0,
            bottom: 0,
            transform: 'translate(0, 0)',
            borderRadius: 0,
          }
        },
        overlay: base => {
          return {
            ...base,
            backgroundColor: 'rgba(255,0,0,.5)',
          }
        },
        closeButton: base => ({
          ...base,
          color: 'white',
        }),
      }}
      skipMotion
    >
      <ExampleTrigger />
    </ModalProvider>
  )
}

function ExampleTrigger() {
  const { openModal } = useContext(ModalContext)
  return (
    <button
      onClick={() =>
        openModal(
          <div
            css={css`
              background: red;
              padding: 100px;
            `}
          >
            hola
          </div>
        )
      }
    >
      open
    </button>
  )
}
