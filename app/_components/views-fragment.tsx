import { getEvents } from 'basehub/events'
import { IncrementViews } from './increment-views'
import { unstable_noStore } from 'next/cache'
import { draftMode } from 'next/headers'
import { fragmentOn } from 'basehub'

export const viewsFragment = fragmentOn('Views', {
  adminKey: true,
  ingestKey: true,
})

export type ViewsFragment = fragmentOn.infer<typeof viewsFragment>

export const ViewsFragment = async ({
  ingestKey,
  adminKey,
  increment,
}: {
  increment?: boolean
} & ViewsFragment) => {
  unstable_noStore()
  const { isEnabled: isDraftMode } = await draftMode()

  const getEventsAction = async () => {
    'use server'

    const views = await getEvents(adminKey, {
      type: 'time-series',
      range: 'all-time',
    })

    return views.success ? views.data : 0
  }

  return (
    <IncrementViews
      ingestKey={ingestKey}
      getEventsAction={getEventsAction}
      increment={Boolean(increment && !isDraftMode)}
      initialCount={await getEventsAction()}
    />
  )
}
