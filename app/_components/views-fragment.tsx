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
  const views = await getEvents(adminKey, {
    type: 'time-series',
    range: 'all-time',
  })

  return (
    <>
      {views.success ? views.data : '0'}
      {increment && !isDraftMode && <IncrementViews ingestKey={ingestKey} />}
    </>
  )
}
