import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const revalidate = 60

export default async function PostOG({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    <main tw="flex h-full w-full items-center justify-center" />,
    {
      width: 1200,
      height: 630,
    }
  )
}
