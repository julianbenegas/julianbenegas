type Props = {
  duration?: number
  children: React.ReactNode
  copies?: number
  reverse?: boolean
}

const Slider = ({ duration, children, copies = 2, reverse }: Props) => (
  <div className="slider-container">
    <div className="slider-content-wrapper">
      {[...Array(copies).keys()].map((n) => (
        <div key={n}>{children}</div>
      ))}
    </div>
    <style jsx>{`
      .slider-container {
        overflow: hidden;
        white-space: nowrap;
      }

      .slider-content-wrapper {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        animation: slide ${duration ? `${duration * 2}s` : '10s'} linear
          infinite ${reverse ? 'reverse' : ''};
      }

      .slider-content-wrapper > div {
        display: inline-block;
      }

      @keyframes slide {
        from {
          transform: translate3d(0, 0, 0);
        }
        to {
          transform: translate3d(-50%, 0, 0);
        }
      }
    `}</style>
  </div>
)

export default Slider
