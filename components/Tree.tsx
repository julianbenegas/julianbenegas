import { FullEvent } from '../interfaces/event'
import { Event } from './Event'

interface EventObj {
  event: FullEvent
  index: number
  isNow: false
}

interface Now {
  event: {
    name: string
    description: string
    date: undefined
    url: undefined
  }
  index: undefined
  isNow: true
}

type EventContainerProps = EventObj | Now

const EventContainer = ({
  event,
  index,
  isNow = false
}: EventContainerProps) => {
  const alignment = isNow ? 'center' : index && index % 2 ? 'right' : 'left'

  let textAlignment = 'center'
  if (alignment === 'left') textAlignment = 'right'
  else if (alignment === 'right') textAlignment = 'left'

  return (
    <div className="container">
      <div className="dot" />
      {event.url ? (
        <div className="event-container">
          <Event event={event} />
        </div>
      ) : (
        <div className="event-container">
          <h1>Now</h1>
          <p>All there is.</p>
        </div>
      )}
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          position: relative;
          text-align: ${textAlignment};
          margin-bottom: 20px;
          z-index: ${isNow ? '10' : 'initial'};
          justify-content: ${alignment === 'right'
            ? 'flex-end'
            : alignment === 'left'
            ? 'flex-start'
            : 'center'};
          align-items: ${isNow ? 'flex-end' : 'initial'};
        }
        .dot {
          min-width: 24px;
          max-width: 24px;
          width: 24px;
          min-height: 24px;
          max-height: 24px;
          height: 24px;
          border: 6px solid var(--background-color);
          background: var(--teal-3);
          border-radius: 50%;
          z-index: 10;
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0);
        }
        .event-container {
          text-align: inherit;
          background: var(--background-color);
          border: none;
          max-width: 50%;
          padding: 3px
            ${alignment === 'right'
              ? '0 0 30px'
              : alignment === 'left'
              ? '30px 0 0'
              : '0 26px 0'};
        }
        h1 {
          font-size: var(--fs-2xl);
          color: var(--grey-8);
          font-weight: 600;
          margin: 0.25rem 0 0.1rem;
        }
        p {
          font-size: var(--fs-sm);
          color: var(--grey-6);
          line-height: var(--lh-tight);
        }

        @media screen and (max-width: 900px) {
          .container {
            justify-content: ${isNow ? 'center' : 'flex-end'};
            text-align: ${isNow ? 'center' : 'left'};
          }
          .event-container {
            padding: 3px ${isNow ? '0 26px 0' : '0 0 30px'};
          }
        }
        @media screen and (max-width: 620px) {
          .container {
            text-align: ${textAlignment};
            justify-content: ${alignment === 'right'
              ? 'flex-end'
              : alignment === 'left'
              ? 'flex-start'
              : 'center'};
          }
          .event-container {
            padding: 3px
              ${alignment === 'right'
                ? '0 0 30px'
                : alignment === 'left'
                ? '30px 0 0'
                : '0 26px 0'};
          }
          h1 {
            font-size: var(--fs-xl);
          }
          p {
            font-size: var(--fs-xs);
          }
        }
        @media screen and (max-width: 400px) {
          .container {
            justify-content: ${isNow ? 'center' : 'flex-end'};
            text-align: ${isNow ? 'center' : 'left'};
          }
          .event-container {
            padding: 3px ${isNow ? '0 26px 0' : '0 0 30px'};
          }
        }
      `}</style>
    </div>
  )
}

export default ({ events }: { events: FullEvent[] }) => {
  return (
    <div className="container">
      <div className="tree">
        <div className="root" />
        <EventContainer
          isNow
          index={undefined}
          event={{
            name: 'Now.',
            description: 'All there is.',
            date: undefined,
            url: undefined
          }}
        />
        {events.map((e, i) => (
          <EventContainer key={e.id} index={i} event={e} isNow={false} />
        ))}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
          overflow-y: scroll;
          padding: 150.2px 10% 0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        .tree {
          text-align: center;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          max-width: 700px;
          min-height: calc(100vh - 150.2px);
        }
        .root {
          height: 100%;
          width: 4px;
          background: var(--grey-3);
          top: 0;
          z-index: 1;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        @media screen and (max-width: 900px) {
          .container {
            padding-left: 0;
            margin-left: -20%;
            padding-right: 5%;
          }
        }
        @media screen and (max-width: 620px) {
          .container {
            margin-left: 0;
            padding: 100px 5% 0;
          }
        }
        @media screen and (max-width: 400px) {
          .container {
            padding-left: 0;
            margin-left: -60%;
            padding-right: 5%;
            width: 160%;
          }
        }
        @media screen and (min-width: 1500px) {
          .container {
            padding: 150.2px 20% 0;
          }
        }
      `}</style>
    </div>
  )
}
