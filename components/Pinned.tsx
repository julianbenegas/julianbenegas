import { AiOutlinePushpin } from 'react-icons/ai'

const PinnedEvent = () => (
  <div className="container">
    <i>
      <AiOutlinePushpin />
    </i>
    <div>
      <p>October 25th, 2010</p>
      <h1>La Derecha Diario</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        mollitia facere ut.
      </p>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        margin: 0.85em 0;
      }
      i {
        color: var(--teal-3);
        margin-right: 0.25rem;
      }
      p {
        font-size: var(--fs-sm);
        color: var(--teal-3);
        margin-bottom: 0.25rem;
        font-weight: 500;
      }
      h1 {
        font-size: var(--fs-lg);
        color: var(--grey-8);
        margin-bottom: 0.15rem;
      }
      p.description {
        font-size: 13px;
        color: var(--grey-6);
        font-weight: 400;
        line-height: var(--lh-tight);
      }
    `}</style>
  </div>
)

export default () => {
  return (
    <div>
      <h3>Pinned</h3>
      <PinnedEvent />
      <PinnedEvent />
      <PinnedEvent />
      <style jsx>{`
        h3 {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          color: var(--grey-6);
          margin: 0.85em 0;
        }
      `}</style>
    </div>
  )
}
