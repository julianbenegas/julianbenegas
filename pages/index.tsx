import * as React from 'react'
import { Nav, MobileNav } from '../components/nav'
import Tree from '../components/Tree'
import { Event, FullEvent } from '../interfaces/event'
import { Tag } from '../interfaces/tag'
import { events } from '../data/events.json'
import { tags } from '../data/tags.json'
import { pinned } from '../data/pinned.json'

export function unstable_getStaticProps() {
  return {
    props: {
      events: events.map((event: Event) => ({
        ...event,
        url: `${new Date(event.timestamp).getFullYear()}/${event.id}`
      })),
      pinned: pinned.map((event: Event) => ({
        ...event,
        url: `${new Date(event.timestamp).getFullYear()}/${event.id}`
      })),
      tags
    }
  }
}

export default function Index({
  events,
  tags,
  pinned
}: {
  events: FullEvent[]
  tags: Tag[]
  pinned: FullEvent[]
}) {
  return (
    <div>
      <div className="desktop-nav">
        <Nav pinned={pinned} tags={tags} />
      </div>
      <div className="mobile-nav">
        <MobileNav pinned={pinned} tags={tags} />
      </div>
      <Tree events={events} />
      <style jsx>{`
        div {
          display: flex;
        }
        .mobile-nav {
          display: none;
        }

        @media screen and (max-width: 620px) {
          .desktop-nav {
            display: none;
          }
          .mobile-nav {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}
