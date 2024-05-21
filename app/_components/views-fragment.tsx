import { unstable_noStore } from 'next/cache'
import { getEventCount, sendEvent } from 'basehub/analytics'
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

  const viewsPromise = getEventCount({ _analyticsKey, name: 'view' })
  let views: number | null = null
  if (increment && !isDraftMode) {
    await sendEvent({ _analyticsKey, name: 'view' })
    views = (await viewsPromise) + 1
  } else {
    views = await viewsPromise
  }

  return <>{views || '0'}</>
}
