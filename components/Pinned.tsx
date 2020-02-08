import { AiOutlinePushpin } from 'react-icons/ai'
import { FullEvent } from '../interfaces/event'

const PinnedEvent = ({ event }: { event: FullEvent }) => (
  <div className="container">
    <i>
      <AiOutlinePushpin />
    </i>
    <div>
      <p>October 25th, 2010</p>
      <h1>{event.name}</h1>
      <p className="description">{event.description}</p>
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

export default ({ pinned }: { pinned: FullEvent[] }) => {
  return (
    <div>
      <h3>Pinned</h3>
      {pinned.map(event => (
        <PinnedEvent key={event.id} event={event} />
      ))}
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
