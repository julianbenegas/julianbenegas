import { basehub } from 'basehub'
import { ImageResponse } from 'next/og'
import { grayDark } from '@radix-ui/colors'
import { notFound } from 'next/navigation'
// import { redis } from '~/app/redis'

export const runtime = 'edge'
export const revalidate = 60

export default async function PostOG({ params }: { params: { slug: string } }) {
  // fonts
  const geist400 = fetch(
    new URL(`../../../public/geist-sans/Geist-Regular.otf`, import.meta.url)
  ).then((res) => res.arrayBuffer())

  const geist500 = fetch(
    new URL(`../../../public/geist-sans/Geist-Medium.otf`, import.meta.url)
  ).then((res) => res.arrayBuffer())

  const data = await basehub().query({
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

  if (!post) notFound()

  // const views = await redis.get<number>(`views:${post._id}`)

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
          <div tw="flex items-center group">
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
              tw="text-6xl text-balance text-center px-8 overflow-hidden whitespace-nowrap text-ellipsis"
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
              })}
            </div>
            <pre
              tw="text-2xl flex text-balance mt-12"
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
            // height: '120px',
            background:
              'linear-gradient(180deg, rgba(17, 17, 17, 0.00) 0%, #111 100%)',
          }}
        />
      </main>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Geist 400',
          data: await geist400,
        },
        {
          name: 'Geist 500',
          data: await geist500,
        },
      ],
    }
  )
}
