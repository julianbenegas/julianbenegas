import Link from 'next/link'
import moment from 'moment'

interface Event {
  name: string
  description: string
  timestamp: number
}

interface EventObj {
  event: Event
  index: number
  isNow: false
}

interface Now {
  event: { name: string; description: string; timestamp: undefined }
  index: undefined
  isNow: true
}

type Props = EventObj | Now

const Event = ({ event, index, isNow = false }: Props) => {
  const alignment = isNow ? 'center' : index && index % 2 ? 'right' : 'left'

  let textAlignment = 'center'
  if (alignment === 'left') textAlignment = 'right'
  else if (alignment === 'right') textAlignment = 'left'

  return (
    <div className="container">
      <div className="dot" />
      <Link href="">
        <button>
          {event.timestamp && (
            <a>{moment(event.timestamp).format('MMMM Do, YYYY')}</a>
          )}
          <h1>{event.name}</h1>
          <p>{event.description}</p>
        </button>
      </Link>
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
          background: var(--teal-2);
          border-radius: 50%;
          z-index: 10;
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0);
        }
        button {
          text-align: inherit;
          border: none;
          max-width: 50%;
          padding: 3px
            ${alignment === 'right'
              ? '0 0 30px'
              : alignment === 'left'
              ? '30px 0 0'
              : '0 26px 0'};
          cursor: pointer;
        }
        a {
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
      `}</style>
    </div>
  )
}

export default () => {
  const events: Event[] = [
    {
      name: 'La Derecha Diario',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum quae deserunt! Neque rem cum ut obcaecati optio molestias, cumque fuga. Repudiandae dolore esse maxime porro illum aliquid vitae? Excepturi!',
      timestamp: Date.now() + 4
    },
    {
      name: 'La Derecha Diario',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum quae deserunt! Neque rem cum ut obcaecati optio molestias, cumque fuga. Repudiandae dolore esse maxime porro illum aliquid vitae? Excepturi!',
      timestamp: Date.now() + 4
    },
    {
      name: 'La Derecha Diario',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum quae deserunt! Neque rem cum ut obcaecati optio molestias, cumque fuga. Excepturi!',
      timestamp: Date.now() + 4
    },
    {
      name: 'La Derecha Diario',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum quae deserunt! Neque rem cum ut obcaecati optio molestias, cumque fuga.',
      timestamp: Date.now() + 4
    },
    {
      name: 'La Derecha Diario',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum quae deserunt! Neque rem cum ut obcaecati optio molestias, cumque fuga. Repudiandae dolore esse maxime porro illum aliquid vitae? Excepturi!',
      timestamp: Date.now() + 4
    },
    {
      name: 'La Derecha Diario',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum quae deserunt! Neque rem cum ut obcaecati optio molestias, cumque fuga. Repudiandae dolore esse maxime porro illum aliquid vitae? Excepturi!',
      timestamp: Date.now() + 4
    },
    {
      name: 'La Derecha Diario',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum quae deserunt! Neque rem cum ut obcaecati optio molestias, cumque fuga. Repudiandae dolore esse maxime porro illum aliquid vitae? Excepturi!',
      timestamp: Date.now() + 3
    },
    {
      name: 'La Derecha Diario',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum quae deserunt! Neque rem cum ut obcaecati optio molestias, cumque fuga. Repudiandae dolore esse maxime porro illum aliquid vitae? Excepturi!',
      timestamp: Date.now() + 2
    },
    {
      name: 'La Derecha Diario',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum quae deserunt! Neque rem cum ut obcaecati optio molestias, cumque fuga. Repudiandae dolore esse maxime porro illum aliquid vitae? Excepturi!',
      timestamp: Date.now() + 1
    }
  ]
  return (
    <div className="container">
      <div className="tree">
        <div className="root" />
        {events.map((e, i) => (
          <Event key={e.timestamp} index={i} event={e} isNow={false} />
        ))}
        <Event
          isNow
          index={undefined}
          event={{
            name: 'Now.',
            description: 'All there is.',
            timestamp: undefined
          }}
        />
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
          flex-direction: column-reverse;
          align-items: flex-start;
          justify-content: flex-end;
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
      `}</style>
    </div>
  )
}
