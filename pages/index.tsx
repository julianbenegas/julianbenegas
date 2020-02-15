import { useState, useEffect } from 'react'
import { Nav, MobileNav } from '../components/nav'
import Tree from '../components/Tree'
import { FullEvent } from '../interfaces/event'
import { events } from '../data/events.json'
import { useFilters } from '../context/filtersContext'
import moment from 'moment'

export default function Index() {
  let tags: string[] = []
  let allEvents: FullEvent[] = []
  let pinnedEvents: FullEvent[] = []

  for (let i = 0; i < events.length; i++) {
    const event = events[i]
    if (event.isPublished) {
      const fullEvent = {
        ...event,
        url: `${moment.utc(event.date, 'YYYY-MM-DD').year()}/${event.id}`,
        displayDate: moment(event.date, 'YYYY-MM-DD').format('MMMM Do, YYYY')
      }
      allEvents.push(fullEvent)
      // Check for tags
      if (event.tags?.length) {
        const toAdd = event.tags.filter(t => !tags.includes(t))
        tags.push(...toAdd)
      }
      // Check if isPinned
      if (event.isPinned) pinnedEvents.push(fullEvent)
    }
  }

  // Sort em
  tags = tags.sort((a, b) => (a > b ? 1 : -1))
  allEvents = allEvents.sort((a, b) => (a.date > b.date ? -1 : 1))
  pinnedEvents = pinnedEvents.sort((a, b) => (a.date > b.date ? -1 : 1))

  const [filteredEvents, setFilteredEvents] = useState<FullEvent[]>(allEvents)
  const { filters } = useFilters()

  useEffect(() => {
    // Check for tag filters
    let filtered: FullEvent[] = allEvents
    if (filters.tags.length) {
      filtered = filtered.filter(
        event =>
          filters.tags.filter(f => event.tags?.includes(f)).length ===
          filters.tags.length
      )
    }
    // Check for word filters
    if (filters.words.length) {
      const lowerCased = filters.words.toLowerCase()
      filtered = filtered.filter(
        event =>
          event.name.toLowerCase().includes(lowerCased) ||
          event.description.toLowerCase().includes(lowerCased) ||
          event.displayDate.toLowerCase().includes(lowerCased) ||
          event.tags
            ?.join(' ')
            .toLowerCase()
            .includes(lowerCased)
      )
    }
    setFilteredEvents(filtered)
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
