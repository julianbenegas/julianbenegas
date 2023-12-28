import { basehub } from 'basehub'
import { RichText } from 'basehub/react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header, InnerPageHeader } from '~/app/_components/header'
import { PostFooter } from './footer'
import { ViewsFragment } from '~/app/_components/views-fragment'
import { Suspense } from 'react'

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  const { isEnabled: isDraftMode } = draftMode()
  const data = await basehub({
    next: { revalidate: 60 },
    draft: isDraftMode,
  }).query({
    index: {
      postsSection: {
        posts: {
          __args: {
            filter: {
              _sys_slug: { eq: params.slug },
            },
          },
          items: {
            _title: true,
            date: true,
            body: {
              plainText: true,
            },
          },
        },
      },
    },
  })

  const post = data.index.postsSection.posts.items[0]

  if (!post) notFound()

  return {
    title: post._title,
    description: post.body.plainText.split(' ').slice(0, 24).join(' ') + '...',
  }
}

export const generateStaticParams = async () => {
  const data = await basehub({ cache: 'no-store' }).query({
    index: {
      postsSection: {
        posts: {
          items: {
            _slug: true,
          },
        },
      },
    },
  })

  return data.index.postsSection.posts.items.map((post) => {
    return {
      params: {
        slug: post._slug,
      },
    }
  })
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { isEnabled: isDraftMode } = draftMode()
  const data = await basehub({
    next: { revalidate: 60 },
    draft: isDraftMode,
  }).query({
    index: {
      avatar: {
        url: {
          __args: {
            width: 300,
            height: 300,
          },
        },
        alt: true,
        width: true,
        height: true,
      },
      title: true,
      postsSection: {
        posts: {
          __args: {
            filter: {
              _sys_slug: { eq: params.slug },
            },
          },
          items: {
            _id: true,
            _title: true,
            date: true,
            body: {
              json: {
                content: true,
              },
            },
            xPost: true,
          },
        },
      },
    },
  })

  const post = data.index.postsSection.posts.items[0]

  if (!post) notFound()

  return (
    <>
      <InnerPageHeader />
      <main className="py-20 px-5 flex flex-col gap-8 items-center">
        <div className="max-w-2xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">{post._title}</h1>
            <div className="flex items-center gap-2">
              {/* <Link href="/" className="flex items-center gap-2">
                <img
                  src={data.index.avatar.url}
                  alt={data.index.avatar.alt ?? ''}
                  width={data.index.avatar.width}
                  height={data.index.avatar.height}
                  className="rounded-full border border-dark-gray6 w-6 h-6"
                />
                <div className="flex flex-col gap-1.5 text-center">
                  <h1 className="text-sm text-dark-gray10">
                    {data.index.title}
                  </h1>
                </div>
              </Link>{' '}
              <span className="text-sm text-dark-gray10">|</span> */}
              <p className="text-sm text-dark-gray10">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                <Suspense fallback={null}>
                  {' '}
                  ·{' '}
                  <ViewsFragment
                    postId={post._id}
                    increment={process.env.NODE_ENV !== 'development'}
                  />{' '}
                  Views
                </Suspense>
              </p>
            </div>
          </div>
          <div className="prose prose-invert text-dark-gray11 mt-8">
            <RichText>{post.body.json.content}</RichText>
          </div>
          <PostFooter xPostURL={post.xPost} />
        </div>
      </main>
    </>
  )
}

export default PostPage
