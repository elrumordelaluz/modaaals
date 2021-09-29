export type StylesKeys =
  | 'overlay'
  | 'constraints'
  | 'contentOuter'
  | 'contentInner'
  | 'closeButton'

export type StylesObj = {
  [key in StylesKeys]?: StyleFn
}

export type StyleFn = (
  props: { [key: string]: any },
  state?: { [key: string]: any }
) => React.CSSProperties

export type Styles = {
  overlay: StyleFn
  constraints: StyleFn
  contentOuter: StyleFn
  contentInner: StyleFn
  closeButton: StyleFn
}

export type StyleKey = keyof Styles

export const defaultStyles: Styles = {
  overlay: () => ({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(42, 38, 33, 0.5)',
  }),
  constraints: () => ({
    position: 'absolute',
    top: '10vh',
    right: '10vh',
    bottom: '10vh',
    left: '10vh',
  }),
  contentOuter: () => ({
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    background: '#fcf7f6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 24,
    boxShadow: '0 10px 60px rgba(0, 0, 0, 0.15)',
  }),
  contentInner: () => ({
    overflow: 'auto',
    maxHeight: '60vh',
    margin: '83px 152px 68px',
  }),
  closeButton: () => ({
    width: '16px',
    height: '16px',
    border: 0,
    outline: 0,
    background: 'none',
    padding: 0,
    color: '#56595f',
    cursor: 'pointer',
    position: 'absolute',
    top: '38px',
    left: '38px',
    transition: 'color 0.3s',
    '&: hover': {
      color: 'var(--accent)',
    },
  }),
}

export type getStylesType = (key: StylesKeys, extra?: any) => {}

export function stylesMatcher(styles: StylesObj) {
  return (key: StyleKey, state: {}): {} => {
    const base = defaultStyles[key](state)
    const custom = styles[key]
    return custom ? custom(base, state) : base
  }
}
