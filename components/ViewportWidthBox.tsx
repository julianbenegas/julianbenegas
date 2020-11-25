import { forwardRef } from 'react'

const ViewportWidthBox = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'>
>((props, ref) => (
  <div
    {...props}
    ref={ref}
    style={{
      overflow: 'hidden',
      position: 'relative',
      width: 'calc(var(--vw, 1vw) * 100)',
      left: '50%',
      transform: 'translateX(-50%)',
      ...props.style
    }}
  />
))

export default ViewportWidthBox
