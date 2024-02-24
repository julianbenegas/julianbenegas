import { unstable_noStore } from 'next/cache'
import { redis } from '../redis'
import { draftMode } from 'next/headers'

export const ViewsFragment = async ({
  postId,
  increment,
}: {
  postId: string
  increment?: boolean
}) => {
  unstable_noStore()
  const { isEnabled: isDraftMode } = draftMode()

  let views: null | number = null
  if (increment && !isDraftMode) {
    views = await redis.incr(`views:${postId}`)
  } else {
    views = await redis.get(`views:${postId}`)
  }

  return <>{views || '0'}</>
}
