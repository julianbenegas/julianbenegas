import { getEventCount, sendEvent } from 'basehub/analytics'
// import { IncrementViews } from './increment-views'
import { unstable_noStore } from 'next/cache'
import { draftMode } from 'next/headers'

export const ViewsFragment = async ({
  _analyticsKey,
  increment,
}: {
  _analyticsKey: string
  increment?: boolean
}) => {
  unstable_noStore()
  const { isEnabled: isDraftMode } = draftMode()

  if (increment && !isDraftMode) {
    await sendEvent({ _analyticsKey, name: 'view' })
  }

  const views = await getEventCount({ _analyticsKey, name: 'view' })

  return (
    <>
      {views || '0'}
      {/* {increment && !isDraftMode && (
        <IncrementViews _analyticsKey={_analyticsKey} />
      )} */}
    </>
  )
}
