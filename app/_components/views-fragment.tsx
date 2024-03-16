import { unstable_noStore } from 'next/cache'
import { draftMode } from 'next/headers'
import { basehub } from 'basehub'
import { Transaction } from 'basehub/api-transaction'

const hardcodedIdToTest = '8e781486e3173290933ba'

export const ViewsFragment = async ({
  postId,
  increment,
}: {
  postId: string
  increment?: boolean
}) => {
  unstable_noStore()
  const { isEnabled: isDraftMode } = draftMode()

  const viewsQueryPromise = basehub({ draft: true }).query({
    index: {
      postsSection: {
        posts: {
          __args: { filter: { _sys_id: { eq: postId } } },
          items: {
            views: true,
          },
        },
      },
    },
  })

  let incr = 0
  if (increment && !isDraftMode) {
    await basehub().mutation({
      transaction: {
        __args: {
          data: JSON.stringify({
            type: 'update',
            data: { type: 'number:incr', id: hardcodedIdToTest },
          } satisfies Transaction),
        },
      },
    })
    incr++
  }

  const views =
    ((await viewsQueryPromise).index.postsSection.posts.items[0]?.views ?? 0) +
    incr

  return <>{views || '0'}</>
}
