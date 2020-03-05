import React, { useState } from 'react'
import { ModalProvider } from '../src'
import { ModalLauncher, StaticModal, ExtraPropsModal } from './Modals'

export default {
  title: 'Custom Modals',
}

SkipMotionGlobal.story = {
  name: 'Skip Motion Globally',
}

export function SkipMotionGlobal() {
  return (
    <ModalProvider modals={{ 1: StaticModal, 2: ExtraPropsModal }} skipMotion>
      <ModalLauncher
        modal={{
          type: 1,
        }}
        label="Modal 1"
      />
      <ModalLauncher
        modal={{
          type: 2,
        }}
        label="Modal 2"
      />
    </ModalProvider>
  )
}

SkipMotionLocally.story = {
  name: 'Skip Motion Locally',
}

export function SkipMotionLocally() {
  return (
    <ModalProvider modals={{ 1: StaticModal, 2: ExtraPropsModal }}>
      <ModalLauncher
        modal={{
          type: 1,
        }}
        label="Modal with Motion"
      />
      <ModalLauncher
        modal={{
          type: 2,
          skipMotion: true,
        }}
        label="Modal without Motion"
      />
    </ModalProvider>
  )
}

CustomDragGlobally.story = {
  name: 'Custom Drag Globally',
}

export function CustomDragGlobally() {
  const [drag, setDrag] = useState()
  return (
    <>
      Global Drag Values:{' '}
      <label>
        <input
          type="radio"
          onChange={e => setDrag(false)}
          checked={drag === false}
        />{' '}
        <code>false</code>
      </label>
      <label>
        <input
          type="radio"
          onChange={e => setDrag('x')}
          checked={drag === 'x'}
        />{' '}
        <code>x</code>
      </label>
      <label>
        <input
          type="radio"
          onChange={e => setDrag('y')}
          checked={drag === 'y'}
        />{' '}
        <code>y</code>
      </label>
      <label>
        <input
          type="radio"
          onChange={e => setDrag(undefined)}
          checked={drag === undefined}
        />{' '}
        <code>undefined</code>
      </label>
      <br />
      <ModalProvider modals={{ modal: StaticModal }} drag={drag}>
        <ModalLauncher modal="modal" label="Modal with Custom Drag" />
      </ModalProvider>
    </>
  )
}

CustomDragLocally.story = {
  name: 'Custom Drag Locally',
}

export function CustomDragLocally() {
  return (
    <ModalProvider modals={{ modal: StaticModal }}>
      <ModalLauncher
        modal={{ type: 'modal' }}
        label="Modal With Default Drag"
      />
      <ModalLauncher
        modal={{ type: 'modal', drag: false }}
        label="Modal Without Drag"
      />
      <ModalLauncher
        modal={{ type: 'modal', drag: 'x' }}
        label="Modal With Drag horizontally"
      />
      <ModalLauncher
        modal={{ type: 'modal', drag: 'y' }}
        label="Modal With Drag vertically"
      />
    </ModalProvider>
  )
}

CleanInnerAnimations.story = {
  name: 'Clean Inner Animations Props Globally',
}

export function CleanInnerAnimations() {
  return (
    <ModalProvider
      motionProps={{}}
      modals={{ modal: StaticModal }}
      styles={{
        contentOuter: base => {
          return {
            ...base,
            transform: 'translate(-50%, -50%)!important',
          }
        },
      }}
    >
      <ModalLauncher modal={{ type: 'modal' }} label="Modal " />
    </ModalProvider>
  )
}

CustomAnimate.story = {
  name: 'Custom Animate Props Globally',
}

export function CustomAnimate() {
  return (
    <ModalProvider
      motionProps={{
        animate: { top: '0', scale: 1, opacity: 1 },
        initial: { top: '100px', translateX: '-50%', scale: 3, opacity: 0 },
      }}
      modals={{ modal: StaticModal }}
    >
      <ModalLauncher modal={{ type: 'modal' }} label="Modal " />
    </ModalProvider>
  )
}
