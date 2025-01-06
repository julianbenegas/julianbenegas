'use client'
import { sendEvent } from 'basehub/events'
import * as React from 'react'
import { ViewsFragment } from './views-fragment'

export const IncrementViews = ({
  ingestKey,
  getEventsAction,
  increment,
  initialCount,
}: {
  ingestKey: ViewsFragment['ingestKey']
  getEventsAction: () => Promise<number>
  increment: boolean
  initialCount: number
}) => {
  const [count, setCount] = React.useState(initialCount)
  const hasIncremented = React.useRef(false)

  React.useEffect(() => {
    if (!increment || hasIncremented.current) return
    hasIncremented.current = true
    sendEvent(ingestKey)
  }, [ingestKey, increment])

  React.useEffect(() => {
    getEventsAction().then(setCount)
  }, [getEventsAction])

  return <>{count}</>
}
