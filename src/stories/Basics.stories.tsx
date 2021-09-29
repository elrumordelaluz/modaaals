import { css } from '@emotion/react'
import React, { useRef } from 'react'
import { Meta } from '@storybook/react'
import { ModalProvider } from '..'
import {
  StaticModal,
  ExtraPropsModal,
  ParagraphsModal,
  SideEffectsModal,
  ModalLauncher,
} from './Modals'

export default {
  title: 'Modal/Basics',
} as Meta

export const Simple = () => {
  return (
    <ModalProvider modals={{ simple: StaticModal }} className="holaaaa">
      <ModalLauncher modal="simple" label="Open Simple Modal" />
    </ModalProvider>
  )
}
Simple.args = {
  primary: true,
  label: 'Simple',
}

export function ExtraProps() {
  const ref = useRef(null)
  return (
    <ModalProvider modals={{ modal: ExtraPropsModal }}>
      <ModalLauncher
        modal={{
          type: 'modal',
          foo: 'bar',
          another: 'stuff',
          lol: true,
          focusRef: ref,
        }}
        label="Extra Props and focus ref"
      />
    </ModalProvider>
  )
}

ExtraProps.args = {
  primary: true,
  label: 'Extra Props',
}

const textStyles = css`
  padding: 2em;
  width: 20%;
  margin: 0 auto;
  line-height: 2;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export function ScrollContent() {
  return (
    <ModalProvider modals={{ modal: ParagraphsModal }}>
      <ModalLauncher
        modal={{
          type: 'modal',
          enabledScroll: true,
        }}
        label="Overflow and enable body scroll"
      />
      <main css={textStyles}>
        <p>
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
    </ModalProvider>
  )
}

ScrollContent.args = {
  primary: true,
  label: 'Scroll Content',
}

export function SideEffect() {
  return (
    <ModalProvider modals={{ modal: SideEffectsModal }}>
      <ModalLauncher
        modal={{
          type: 'modal',
          side: 'hola',
        }}
        label="Side Effect"
      />
    </ModalProvider>
  )
}

SideEffect.args = {
  label: 'Side Effect',
}

export function Component() {
  return (
    <ModalProvider>
      <ModalLauncher
        modal={
          <div
            css={css`
              background: aquamarine;
              padding: 100px;
            `}
          >
            Hello World
          </div>
        }
        label="Element"
      />
      <ModalLauncher modal={<CustomComponent />} label="Component" />
    </ModalProvider>
  )
}

function CustomComponent({}) {
  return (
    <div
      css={css`
        padding: 100px;
      `}
    >
      <h1>Hello</h1>
      <p>World</p>
    </div>
  )
}

Component.args = {
  label: 'Passing a Component',
}
