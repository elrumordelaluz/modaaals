/** @jsx jsx */ import { css, jsx } from '@emotion/core'
import { useContext, useRef } from 'react'
import { ModalProvider, ModalContext } from '../src'
import {
  StaticModal,
  ExtraPropsModal,
  ParagraphsModal,
  SideEffectsModal,
} from './Modals'

export default {
  title: 'Modal',
}

export function Basic() {
  return (
    <ModalProvider modals={modals}>
      <ExampleButtons />
    </ModalProvider>
  )
}

function ExampleButtons() {
  const { openModal } = useContext(ModalContext)
  const ref = useRef(null)
  return (
    <div
      css={css`
        padding: 1em;
        border: 5px solid pink;
        min-height: 100vh;
      `}
    >
      <header
        css={css`
          padding: 1em;
          border: 5px solid pink;
        `}
      >
        <button onClick={() => openModal('static')}>open hello</button>
        <button
          onClick={() =>
            openModal({
              type: 'extra-props',
              hola: 1,
              another: 'stuff',
              focusRef: ref,
            })
          }
        >
          open f
        </button>
        <button
          onClick={() =>
            openModal({ type: 'p', focusRef: ref, enabledScroll: true })
          }
        >
          open paragraphs
        </button>
        <button onClick={() => openModal('empty')}>open empty</button>
        <button
          onClick={() => openModal({ type: 'side-effects', side: 'hola' })}
        >
          open side effects
        </button>
      </header>
      <main>
        <p
          css={css`
            line-height: 2;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
          `}
        >
          Nulla auctor purus pretium, tristique nibh fringilla, interdum mauris.
          Praesent est enim, ultrices pretium sapien ut, sollicitudin efficitur
          augue. Maecenas risus felis, vehicula vel rhoncus ut, maximus vel
          nisl. Nulla et laoreet libero. Quisque vehicula purus eget quam
          ultricies, id malesuada urna faucibus. Maecenas sodales scelerisque
          ligula, id fermentum nisi blandit id. Pellentesque blandit arcu vitae
          diam molestie, a lobortis turpis condimentum. Suspendisse cursus augue
          nisl. Fusce vel neque at nulla consequat convallis a eget nibh.
        </p>

        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Maecenas cursus sed nisi id pretium.
          Suspendisse potenti. Proin ut mattis est, blandit ullamcorper quam.
          Nam sapien massa, vestibulum sit amet arcu non, condimentum pharetra
          nisl. Sed suscipit tincidunt maximus. Proin feugiat velit vel ex
          gravida, nec consequat magna bibendum. Vestibulum lacinia semper eros
          quis euismod. Quisque eget tincidunt magna, quis consequat justo.
          Integer condimentum tempor nunc, at hendrerit metus fringilla ac.
          Donec orci tortor, iaculis molestie magna at, pulvinar pellentesque
          nisl. Vestibulum non elit massa.
        </p>

        <p>
          Vestibulum finibus lacinia nibh, id laoreet odio pellentesque non.
          Curabitur tempor odio a nisi condimentum tempor. Sed sem metus,
          faucibus sit amet consectetur ac, molestie at enim. Nunc luctus orci
          sit amet euismod pulvinar. Sed a gravida elit. Curabitur non elementum
          ligula. Nam efficitur volutpat tellus, tempor pellentesque metus
          aliquam ac. Nam nec mattis arcu, et ullamcorper nisl. Aliquam erat
          volutpat. Nullam non pellentesque nibh.{' '}
        </p>
      </main>
    </div>
  )
}

const modals = {
  static: StaticModal,
  'extra-props': ExtraPropsModal,
  p: ParagraphsModal,
  'side-effects': SideEffectsModal,
}

Basic.story = {
  name: 'Basic',
}

export function Types() {
  return (
    <ModalProvider skipMotion={false}>
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
