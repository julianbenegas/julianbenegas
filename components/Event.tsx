import Link from 'next/link'
import { FullEvent } from '../interfaces/event'

export const Event = ({
  event,
  isInPinned = false
}: {
  event: FullEvent
  isInPinned?: boolean
}) => (
  <>
    {event.isLink ? (
      <Link href={event.url}>
        <a>
          {event.date && <span>{event.displayDate}</span>}
          <h1>{event.name}</h1>
          {!isInPinned && <p>{event.description}</p>}
        </a>
      </Link>
    ) : (
      <a>
        {event.date && <span>{event.displayDate}</span>}
        <h1>{event.name}</h1>
        {!isInPinned && <p>{event.description}</p>}
      </a>
    )}
    <style jsx>{`
      a {
        text-align: inherit;
        background: transparent;
        border: none;
        cursor: ${event.isLink ? 'pointer' : 'default'};
        display: flex;
        flex-direction: column;
      }
      span {
        color: var(--teal-3);
        font-weight: 500;
        font-size: var(--fs-sm);
        font-size: ${isInPinned ? 'var(--fs-xs)' : 'var(--fs-sm)'};
      }
      h1 {
        font-size: ${isInPinned ? 'var(--fs-md)' : 'var(--fs-xl)'};
        color: var(--grey-8);
        font-weight: 500;
        padding: 0.25rem 0 0.1rem;
      }
      p {
        font-size: var(--fs-sm);
        color: var(--grey-6);
        line-height: var(--lh-tight);
      }

      @media screen and (max-width: 620px) {
        h1 {
          font-size: var(--fs-lg);
        }
        span,
        p {
          font-size: var(--fs-xs);
        }
      }
    `}</style>
  </>
)
