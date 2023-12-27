import { redis } from '../redis'

export const ViewsFragment = async ({
  postId,
  increment,
}: {
  postId: string
  increment?: boolean
}) => {
  let views: null | number = null
  if (increment) {
    views = await redis.incr(`views:${postId}`)
  } else {
    views = await redis.get(`views:${postId}`)
  }

  return <>{views}</>
}
