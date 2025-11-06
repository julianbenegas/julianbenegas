'use client'

import { useEffect, useRef, useState } from 'react'

interface TimelineEvent {
  id: number
  title: string
  year: number
  date?: string
  description: string
  side: 'left' | 'right'
}

interface TimelineViewProps {
  events: TimelineEvent[]
}

export const TimelineView = ({ events }: TimelineViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const eventId = parseInt(entry.target.getAttribute('data-event-id') || '0')
          if (entry.isIntersecting) {
            setVisibleEvents((prev) => new Set(prev).add(eventId))
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    const eventElements = containerRef.current?.querySelectorAll('.timeline-event')
    eventElements?.forEach((el) => observer.observe(el))

    return () => {
      eventElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div ref={containerRef} className="relative py-12">
      {/* Center vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-dark-gray6 via-dark-gray8 to-dark-gray6 -translate-x-1/2" />

      {/* Timeline events */}
      <div className="relative space-y-24">
        {events.map((event, index) => (
          <div
            key={event.id}
            data-event-id={event.id}
            className="timeline-event relative"
          >
            {/* Center dot */}
            <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
              <div
                className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                  visibleEvents.has(event.id)
                    ? 'border-white bg-white shadow-lg shadow-white/50 scale-110'
                    : 'border-dark-gray8 bg-dark-gray3'
                }`}
              />
            </div>

            {/* Event card */}
            <div
              className={`relative grid grid-cols-2 gap-8 ${
                event.side === 'left' ? 'text-right' : ''
              }`}
            >
              {/* Left side */}
              {event.side === 'left' && (
                <div
                  className={`pr-12 transition-all duration-700 ${
                    visibleEvents.has(event.id)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  }`}
                >
                  <div className="inline-block">
                    <div className="bg-dark-gray2 border border-dark-gray6 rounded-lg p-6 hover:border-dark-gray8 transition-colors">
                      <div className="text-sm text-dark-gray10 mb-2">
                        {event.date || event.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {event.title}
                      </h3>
                      <p className="text-dark-gray11 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Right side placeholder */}
              {event.side === 'left' && <div />}

              {/* Left side placeholder */}
              {event.side === 'right' && <div />}

              {/* Right side */}
              {event.side === 'right' && (
                <div
                  className={`pl-12 transition-all duration-700 ${
                    visibleEvents.has(event.id)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                >
                  <div className="inline-block">
                    <div className="bg-dark-gray2 border border-dark-gray6 rounded-lg p-6 hover:border-dark-gray8 transition-colors">
                      <div className="text-sm text-dark-gray10 mb-2">
                        {event.date || event.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {event.title}
                      </h3>
                      <p className="text-dark-gray11 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator at the bottom */}
      <div className="flex justify-center mt-16 text-dark-gray10 text-sm">
        <div className="flex flex-col items-center gap-2">
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <span>Keep scrolling to explore more</span>
        </div>
      </div>
    </div>
  )
}
