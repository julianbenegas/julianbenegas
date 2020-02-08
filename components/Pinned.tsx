import { AiOutlinePushpin } from 'react-icons/ai'
import { FullEvent } from '../interfaces/event'
import { Event } from './Event'

export default ({ pinned }: { pinned: FullEvent[] }) => {
  return (
    <div>
      <h3>Pinned</h3>
      {pinned.map(event => (
        <div className="event-container" key={event.id}>
          <i>
            <AiOutlinePushpin />
          </i>
          <Event event={event} />
        </div>
      ))}
      <style jsx>{`
        h3 {
          font-size: var(--fs-xs);
          text-transform: uppercase;
          color: var(--grey-6);
          margin: 0.85em 0;
        }
        .event-container {
          display: flex;
          margin: 0.85em 0;
        }
        i {
          color: var(--teal-3);
          margin-right: 0.25rem;
        }
      `}</style>
    </div>
  )
}
