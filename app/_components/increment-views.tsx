'use client'
import { sendEvent } from 'basehub/events'
import * as React from 'react'
import { ViewsFragment } from './views-fragment'

export const IncrementViews = ({
  ingestKey,
}: {
  ingestKey: ViewsFragment['ingestKey']
}) => {
  const hasIncremented = React.useRef(false)

  React.useEffect(() => {
    if (hasIncremented.current) return
    hasIncremented.current = true
    sendEvent(ingestKey)
  }, [ingestKey])

  return <></>
}
