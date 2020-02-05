const GradientSVG = () => (
  <div>
    <style jsx>{`
      div {
        background: var(--jb-gradient);
        width: 22px;
        height: 22px;
        border-radius: 4px;
      }
    `}</style>
  </div>
)

export default () => {
  return (
    <div>
      <GradientSVG />
      <h1>Julián Benegas</h1>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
        }
        h1 {
          color: var(--grey-9);
          margin-left: 8px;
          font-size: var(--fs-2xl);
          line-height: 1;
        }
      `}</style>
    </div>
  )
}
