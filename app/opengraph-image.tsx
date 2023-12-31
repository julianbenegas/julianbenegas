import { basehub } from 'basehub'
import { ImageResponse } from 'next/og'
import { grayDark } from './colors'
import { siteOrigin } from './constants'

export const revalidate = 60

export default async function MainOG() {
  // fonts
  const geist400 = fetch(
    new URL(`/geist-sans/Geist-Regular.otf`, siteOrigin)
  ).then((res) => res.arrayBuffer())

  const geist500 = fetch(
    new URL(`/geist-sans/Geist-Medium.otf`, siteOrigin)
  ).then((res) => res.arrayBuffer())

  const { index } = await basehub().query({
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
      bio: {
        json: {
          content: true,
        },
        html: true,
        plainText: true,
      },
    },
  })

  return new ImageResponse(
    (
      <main
        tw="flex h-full w-full items-center justify-center"
        style={{
          backgroundColor: 'black',
          color: grayDark.gray12,
          fontFamily: 'Geist 400',
        }}
      >
        <section tw="flex flex-col items-center">
          <img
            src={index.avatar.url}
            alt={index.avatar.alt ?? ''}
            width={index.avatar.width}
            height={index.avatar.height}
            tw="rounded-full border select-none w-48 h-48 mb-4"
            style={{
              borderColor: grayDark.gray6,
            }}
          />
          <div tw="flex flex-col items-center">
            <h1
              tw="text-6xl text-balance"
              style={{
                fontFamily: 'Geist 500',
              }}
            >
              {index.title}
            </h1>
            <pre
              tw="text-xl flex text-balance mt-1"
              style={{
                color: grayDark.gray10,
                lineHeight: 0.8,
              }}
            >
              {index.bio.plainText}
            </pre>
          </div>
        </section>
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
