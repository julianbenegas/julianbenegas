import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const revalidate = 60

export default async function MainOG() {
  return new ImageResponse(<main style={{ display: 'flex' }} />, {
    width: 1200,
    height: 630,
  })
}
