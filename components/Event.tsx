import Link from 'next/link'
import moment from 'moment'
import { FullEvent } from '../interfaces/event'

export const Event = ({ event }: { event: FullEvent }) => (
  <Link href={event.url}>
    <a>
      {event.date && <span>{moment(event.date).format('MMMM Do, YYYY')}</span>}
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <style jsx>{`
        a {
          text-align: inherit;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        span {
          color: var(--teal-3);
          font-weight: 500;
          font-size: var(--fs-sm);
        }
        h1 {
          font-size: var(--fs-xl);
          color: var(--grey-8);
          font-weight: 500;
          margin: 0.25rem 0 0.1rem;
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
    </a>
  </Link>
)
