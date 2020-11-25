interface Props {
  status: string
  title: string
  description: string
}

export default ({ status, title, description }: Props) => {
  let background
  let color
  switch (status) {
    case 'success':
      background = 'var(--teal-2)'
      color = 'white'
      break
    case 'warning':
      background = '#E1A815'
      color = 'white'
      break
    case 'error':
      background = '#ED3F3F'
      color = 'white'
      break
    default:
      background = 'white'
      color = 'var(--grey-800)'
      break
  }
  return (
    <div className="container">
      <div className="words">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <style jsx>{`
        .container {
          background: ${background};
          padding: 12px 32px;
          color: ${color};
          display: flex;
          align-items: flex-start;
          justify-content: center;
          border-radius: 4px;
          margin-top: 20px;
          position: relative;
          box-shadow: var(--bs-notion-lighter);
        }
        .words {
          text-align: left;
        }
        h3 {
          font-size: var(--fs-md);
          font-weight: 600;
          margin-bottom: 2px;
        }
        p {
          font-size: var(--fs-md);
          margin-right: 20px;
          font-weight: 300;
        }
        button {
          border: none;
          color: ${color};
          background: transparent;
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: var(--fs-md);
        }
      `}</style>
    </div>
  )
}
