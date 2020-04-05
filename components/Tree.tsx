/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
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

  const textAlignment =
    alignment === 'left' ? 'right' : alignment === 'right' ? 'left' : 'center'

  return (
    <Flex
      sx={{
        width: '100%',
        position: 'relative',
        textAlign: [
          isNow ? 'center' : 'left',
          textAlignment,
          isNow ? 'center' : 'left',
          textAlignment
        ],
        marginBottom: 4,
        zIndex: isNow ? '10' : 'initial',
        justifyContent: [
          isNow ? 'center' : 'flex-end',
          alignment === 'right'
            ? 'flex-end'
            : alignment === 'left'
            ? 'flex-start'
            : 'center',
          isNow ? 'center' : 'flex-end',
          alignment === 'right'
            ? 'flex-end'
            : alignment === 'left'
            ? 'flex-start'
            : 'center'
        ],
        alignItems: isNow ? 'flex-end' : 'initial'
      }}
    >
      <div
        sx={{
          border: 'dot',
          bg: 'teal.2',
          borderRadius: '50%',
          zIndex: 10,
          position: 'absolute',
          left: ' 50%',
          transform: 'translate(-50%, 0)',
          variant: 'layout.dot'
        }}
      />
      {event.url ? (
        <div
          sx={{
            textAlign: 'inherit',
            bg: 'background',
            maxWidth: '50%',
            p: [
              `3px ${isNow ? '0 26px 0' : '0 0 30px'}`,
              alignment === 'right'
                ? '3px 0 0 30px'
                : alignment === 'left'
                ? '3px 30px 0 0'
                : '3px 0 26px 0',
              `3px ${isNow ? '0 26px 0' : '0 0 30px'}`,
              alignment === 'right'
                ? '3px 0 0 30px'
                : alignment === 'left'
                ? '3px 30px 0 0'
                : '3px 0 26px 0'
            ]
          }}
        >
          <Event event={event} />
        </div>
      ) : (
        <div
          sx={{
            textAlign: 'inherit',
            bg: 'background',
            maxWidth: '50%',
            p:
              alignment === 'right'
                ? '3px 0 0 30px'
                : alignment === 'left'
                ? '3px 30px 0 0'
                : '3px 0 26px 0'
          }}
        >
          <h1 sx={{ variant: 'text.eventHeading' }}>Now</h1>
          <p sx={{ variant: 'text.smallSubtitle' }}>All there is.</p>
        </div>
      )}
    </Flex>
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
