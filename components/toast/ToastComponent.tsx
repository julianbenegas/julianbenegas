import { MdClose, MdDone, MdWarning, MdError, MdInfo } from 'react-icons/md'

interface Props {
  onClose: () => void
  status: string
  title: string
  description: string
}

export default ({ onClose, status, title, description }: Props) => {
  let background
  let color
  let icon
  switch (status) {
    case 'success':
      background = 'var(--teal-2)'
      color = 'white'
      icon = <MdDone />
      break
    case 'warning':
      background = '#E1A815'
      color = 'white'
      icon = <MdWarning />
      break
    case 'error':
      background = '#ED3F3F'
      color = 'white'
      icon = <MdError />
      break
    default:
      background = 'white'
      color = 'var(--grey-800)'
      icon = <MdInfo />
      break
  }
  return (
    <div className="container">
      <i>{icon}</i>
      <div className="words">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button onClick={onClose}>
        <MdClose />
      </button>
      <style jsx>{`
        .container {
          background: ${background};
          padding: 12px 32px 12px 18px;
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
          margin: 0 20px 0 10px;
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
