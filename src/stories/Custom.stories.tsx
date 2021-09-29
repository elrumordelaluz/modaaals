import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import { ModalProvider } from '..'
import {
  ModalLauncher,
  ModalLauncherWithTimer,
  StaticModal,
  ExtraPropsModal,
  DisableModal,
  SwitchModal,
  AnotherModal,
} from './Modals'

export default {
  title: 'Modal/Custom',
} as Meta

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

SkipMotionGlobal.args = {
  label: 'Skip Motion Globally',
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

SkipMotionLocally.args = {
  label: 'Skip Motion Locally',
}

export function CustomDragGlobally() {
  const [drag, setDrag] = useState<'x' | 'y' | boolean>()
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

CustomDragGlobally.args = {
  label: 'Custom Drag Globally',
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

CustomDragLocally.args = {
  label: 'Custom Drag Locally',
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

CleanInnerAnimations.args = {
  label: 'Clean Inner Animations Props Globally',
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

CustomAnimate.args = {
  label: 'Custom Animate Props Globally',
}

export function DisableCloseFromLauncher() {
  return (
    <ModalProvider modals={{ modal: StaticModal }}>
      <ModalLauncherWithTimer
        time={10000}
        modal={{ type: 'modal' }}
        label="Modal"
      />
    </ModalProvider>
  )
}

DisableCloseFromLauncher.args = {
  label: 'Disable Close From Launcher',
}

export function DisableCloseFromModal() {
  return (
    <ModalProvider modals={{ modal: DisableModal }}>
      <ModalLauncher modal={{ type: 'modal' }} label="Modal " />
    </ModalProvider>
  )
}

DisableCloseFromModal.args = {
  label: 'Disable Close From Inner Modal',
}

export function LaunchAnother() {
  return (
    <ModalProvider modals={{ switch: SwitchModal, another: AnotherModal }}>
      <ModalLauncher modal={{ type: 'switch' }} label="Modal " />
    </ModalProvider>
  )
}

LaunchAnother.args = {
  label: 'Launch another Modal from inside Modal',
}
