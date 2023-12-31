import { basehub } from 'basehub'
import { ImageResponse } from 'next/og'
import { grayDark } from './colors'
import { loadOgFonts } from './_og/fonts'

export const revalidate = 60

export default async function MainOG() {
  const ogFonts = loadOgFonts()
  const data = await basehub({ next: { revalidate: 60 } }).query({
    settings: {
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
            src={data.index.avatar.url}
            alt={data.index.avatar.alt ?? ''}
            width={data.index.avatar.width}
            height={data.index.avatar.height}
            tw="rounded-full border w-48 h-48 mb-4"
            style={{
              borderColor: grayDark.gray6,
            }}
          />
          <div tw="flex flex-col items-center">
            <h1
              tw="text-6xl text-center"
              style={{
                fontFamily: 'Geist 500',
              }}
            >
              {data.index.title}
            </h1>
            <pre
              tw="text-2xl flex text-center mt-1"
              style={{
                color: grayDark.gray10,
                lineHeight: 0.8,
              }}
            >
              {data.index.bio.plainText}
            </pre>
          </div>
        </section>
      </main>
    ),
    {
      width: 1200,
      height: 630,
      fonts: await ogFonts,
    }
  )
}
