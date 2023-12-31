import { basehub } from 'basehub'
import { ImageResponse } from 'next/og'
import { loadOgFonts } from '~/app/_og/fonts'
import { grayDark } from '~/app/colors'
import { redis } from '~/app/redis'

export const revalidate = 60

export default async function PostOG({ params }: { params: { slug: string } }) {
  const ogFonts = loadOgFonts()
  const data = await basehub({ next: { revalidate: 60 } }).query({
    settings: {
      /**
       * og fonts are hosted on basehub cause
       * ... i needed to use the nodejs runtime cause
       * ... edge can't be deployed on vercel hobby plan cause
       * ... next/og is larger than 1MB
       * with the nodejs runtime, i was having issues `fetch`ing fonts the way next.js examples do. so i just fetch from basehub.
       */
      fonts: {
        geist400: {
          url: true,
        },
        geist500: {
          url: true,
        },
      },
    },
    index: {
      avatar: {
        url: true,
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
              plainText: true,
            },
            xPost: true,
          },
        },
      },
    },
  })

  const post = data.index.postsSection.posts.items[0]

  if (!post) throw new Error('Post not found')

  const views = await redis.get<number>(`views:${post._id}`)

  return new ImageResponse(
    (
      <main
        tw="flex h-full w-full items-center justify-center"
        style={{
          backgroundColor: grayDark.gray1,
          color: grayDark.gray12,
          fontFamily: 'Geist 400',
        }}
      >
        <header
          tw="flex w-full absolute items-center justify-between px-8 top-0"
          style={{
            height: '80px',
          }}
        >
          <div tw="flex items-center">
            <img
              src={data.index.avatar.url}
              alt={data.index.avatar.alt ?? ''}
              width={data.index.avatar.width}
              height={data.index.avatar.height}
              tw="rounded-full border w-10 h-10"
              draggable={false}
              style={{
                borderColor: grayDark.gray6,
              }}
            />
            <div tw="flex flex-col ml-2 text-center">
              <h1
                tw="text-xl"
                style={{
                  color: grayDark.gray11,
                  lineHeight: 0.1,
                }}
              >
                {data.index.title}
              </h1>
            </div>
          </div>
          <nav
            tw="text-xl"
            style={{
              color: grayDark.gray11,
            }}
          >
            Posts
          </nav>
        </header>

        <section tw="flex flex-col items-center">
          <div tw="flex flex-col items-center">
            <h1
              tw="text-6xl text-center px-8"
              style={{
                fontFamily: 'Geist 600',
              }}
            >
              {post._title}
            </h1>
            <div
              tw="text-xl flex"
              style={{
                color: grayDark.gray10,
              }}
            >
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              • {views ?? 0} Views
            </div>
            <pre
              tw="text-2xl flex mt-12"
              style={{
                color: grayDark.gray11,
                lineHeight: 1.75,
                height: '132px',
              }}
            >
              {post.body.plainText}
            </pre>
          </div>
        </section>

        <div
          tw="absolute bottom-0"
          style={{
            bottom: 0,
            left: 0,
            top: '90%',
            right: 0,
            background:
              'linear-gradient(180deg, rgba(17, 17, 17, 0.00) 0%, #111 100%)',
          }}
        />
      </main>
    ),
    {
      width: 1200,
      height: 630,
      fonts: await ogFonts,
    }
  )
}
