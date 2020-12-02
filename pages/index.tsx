import { useState, useEffect } from 'react'
import { Nav, MobileNav } from '../components/nav'
import Tree from '../components/Tree'
import { FullEvent } from '../interfaces/event'
import { events } from '../data/events.json'
import { useFilters } from '../context/filtersContext'
import SEO from '../components/SEO'
import { format } from 'date-fns'
import { getDateFromInput } from '../lib/time-helpers'

export default function Index() {
  let tags: string[] = []
  let allEvents: FullEvent[] = []

  for (let i = 0; i < events.length; i++) {
    const event = events[i]
    if (event.isPublished) {
      const date = getDateFromInput(event.date)
      const fullEvent = {
        ...event,
        url: `/${date.getFullYear()}/${event.id}`,
        displayDate: format(date, 'MMMM do, yyyy')
      }
      allEvents.push(fullEvent)
      // Check for tags
      if (event.tags?.length) {
        const toAdd = event.tags.filter((t) => !tags.includes(t))
        tags.push(...toAdd)
      }
    }
  }

  // Sort em
  tags = tags.sort((a, b) => (a > b ? 1 : -1))
  allEvents = allEvents.sort((a, b) => (a.date > b.date ? -1 : 1))

  const [filteredEvents, setFilteredEvents] = useState<FullEvent[]>(allEvents)
  const { filters } = useFilters()

  useEffect(() => {
    // Check for tag filters
    let filtered: FullEvent[] = allEvents
    if (filters.tags.length) {
      filtered = filtered.filter(
        (event) =>
          filters.tags.filter((f) =>
            event.tags?.map((t) => t.toLowerCase()).includes(f)
          ).length === filters.tags.length
      )
    }
    // Check for word filters
    if (filters.words.length) {
      const lowerCased = filters.words.toLowerCase()
      filtered = filtered.filter(
        (event) =>
          event.name.toLowerCase().includes(lowerCased) ||
          event.description.toLowerCase().includes(lowerCased) ||
          event.displayDate.toLowerCase().includes(lowerCased) ||
          event.tags?.join(' ').toLowerCase().includes(lowerCased)
      )
    }
    setFilteredEvents(filtered)
  }, [filters])

  return (
    <div>
      <SEO />
      <div className="desktop-nav">
        <Nav tags={tags} />
      </div>
      <div className="mobile-nav">
        <MobileNav tags={tags} />
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
