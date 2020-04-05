/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
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
        <Flex
          as="a"
          sx={{
            cursor: 'pointer',
            textAlign: 'inherit',
            flexDirection: 'column',
            ':hover': {
              '& h1': {
                textDecoration: 'underline'
              }
            }
          }}
        >
          {event.date && (
            <span sx={{ variant: 'text.eventDate' }}>{event.displayDate}</span>
          )}
          <h1 sx={{ variant: 'text.eventHeading' }}>{event.name}</h1>
          {!isInPinned && (
            <p sx={{ variant: 'text.eventDescription' }}>{event.description}</p>
          )}
        </Flex>
      </Link>
    ) : (
      <Flex as="a" sx={{ textAlign: 'inherit', flexDirection: 'column' }}>
        {event.date && (
          <span sx={{ color: 'primary', fontWeight: '500', fontSize: [0, 1] }}>
            {event.displayDate}
          </span>
        )}
        <h1 sx={{ variant: 'text.eventHeading' }}>{event.name}</h1>
        {!isInPinned && (
          <p sx={{ variant: 'text.eventDescription' }}>{event.description}</p>
        )}
      </Flex>
    )}
  </>
)
