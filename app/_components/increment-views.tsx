'use client'
import { sendEvent } from 'basehub/analytics'
import * as React from 'react'

export const IncrementViews = ({
  _analyticsKey,
}: {
  _analyticsKey: string
}) => {
  const hasIncremented = React.useRef(false)

  React.useEffect(() => {
    if (hasIncremented.current) return
    hasIncremented.current = true
    sendEvent({ _analyticsKey, name: 'view' })
  }, [])

  return <></>
}
