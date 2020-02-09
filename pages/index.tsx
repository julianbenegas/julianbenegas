import { useState, useEffect } from 'react'
import { Nav, MobileNav } from '../components/nav'
import Tree from '../components/Tree'
import { Event, FullEvent } from '../interfaces/event'
import { events } from '../data/events.json'
import { tags } from '../data/tags.json'
import { pinned } from '../data/pinned.json'
import { useFilters } from '../context/filtersContext'
import moment from 'moment'

export default function Index() {
  const allEvents = events
    .map((event: Event) => ({
      ...event,
      url: `${moment(event.date)
        .utc()
        .year()}/${event.id}`
    }))
    .sort((a, b) =>
      moment(a.date)
        .utc()
        .unix() >
      moment(b.date)
        .utc()
        .unix()
        ? -1
        : 1
    )

  const [filteredEvents, setFilteredEvents] = useState<FullEvent[]>(allEvents)
  const pinnedEvents = allEvents.filter(e => pinned.includes(e.id))

  const { filters } = useFilters()

  useEffect(() => {
    if (filters.length) {
      const filtered = allEvents.filter(
        event =>
          filters.filter(f => event.tags.includes(f)).length === filters.length
      )
      setFilteredEvents(filtered)
    } else setFilteredEvents(allEvents)
  }, [filters])

  return (
    <div>
      <div className="desktop-nav">
        <Nav pinned={pinnedEvents} tags={tags} />
      </div>
      <div className="mobile-nav">
        <MobileNav pinned={pinnedEvents} tags={tags} />
      </div>
      <Tree events={filteredEvents} />
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
