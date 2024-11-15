import { basehub } from 'basehub'
import { Pump } from 'basehub/react-pump'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PostFooter } from './footer'
import { ViewsFragment } from '~/app/_components/views-fragment'
import { Suspense } from 'react'
import { PageWrapper } from '~/app/_components/page-wrapper'
import { PostBody } from './body'

export const generateMetadata = async ({
  params: _params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const params = await _params
  const data = await basehub().query({
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
            ogImage: {
              url: true,
            },
            excerpt: true,
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
    description:
      post.excerpt ||
      post.body.plainText.split(' ').slice(0, 24).join(' ') + '...',
    openGraph: {
      images: [{ url: post.ogImage.url, alt: post._title }],
    },
    twitter: {
      images: [{ url: post.ogImage.url, alt: post._title }],
      card: 'summary_large_image',
    },
  }
}

export const generateStaticParams = async () => {
  const data = await basehub().query({
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

const PostPage = async ({
  params: _params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const params = await _params
  return (
    <Pump
      queries={[
        {
          index: {
            postsSection: {
              posts: {
                __args: {
                  filter: {
                    _sys_slug: { eq: params.slug },
                  },
                },
                items: {
                  _id: true,
                  _analyticsKey: {
                    __args: {
                      scope: 'query',
                    },
                  },
                  _title: true,
                  date: true,
                  body: {
                    json: {
                      content: true,
                      blocks: {
                        __typename: true,
                        on_CalloutComponent: {
                          _id: true,
                          content: {
                            json: { content: true },
                          },
                          intent: true,
                        },
                        on_PopoverComponent: {
                          _id: true,
                          type: true,
                          content: {
                            json: { content: true },
                          },
                        },
                      },
                    },
                  },
                  xPost: true,
                },
              },
            },
          },
        },
      ]}
    >
      {async ([data]) => {
        'use server'

        const post = data.index.postsSection.posts.items[0]
        if (!post) notFound()
        return (
          <PageWrapper>
            <div className="max-w-2xl w-full">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold text-balance">
                  {post._title}
                </h1>
                <div className="flex items-center gap-2">
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
                        _analyticsKey={post._analyticsKey}
                        increment={process.env.NODE_ENV !== 'development'}
                      />{' '}
                      Views
                    </Suspense>
                  </p>
                </div>
              </div>
              <PostBody blocks={post.body.json.blocks} className="mt-8">
                {post.body.json.content}
              </PostBody>
              <PostFooter xPostURL={post.xPost} />
            </div>
          </PageWrapper>
        )
      }}
    </Pump>
  )
}

export default PostPage
