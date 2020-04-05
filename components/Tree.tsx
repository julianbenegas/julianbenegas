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
          <p sx={{ variant: 'text.eventDescription' }}>All there is.</p>
        </div>
      )}
    </Flex>
  )
}

export default ({ events }: { events: FullEvent[] }) => {
  return (
    <Flex
      sx={{
        height: '100vh',
        overflowY: 'auto',
        p: '150.2px 10% 0',
        justifyContent: 'center',
        alignItems: 'flex-start',
        pl: ['0', '5%', '0', '10%'],
        pr: [null, null, '5%', '10%'],
        py: '150.2px 0',
        ml: ['-60%', '0', '-20%', '0'],
        width: ['160%', '100%']
      }}
    >
      <Flex
        sx={{
          textAlign: 'center',
          position: 'relative',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '100%',
          maxWidth: 8,
          minHeight: 'calc(100vh - 150.2px)'
        }}
      >
        <div
          sx={{
            height: '100%',
            width: '4px',
            bg: 'gray.2',
            top: '0',
            zIndex: 'root',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
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
      </Flex>
    </Flex>
  )
}
