import { basehub } from 'basehub'

export const loadOgFonts = async () => {
  const data = await basehub({ next: { tags: ['basehub'] } }).query({
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
  })

  return [
    {
      name: 'Geist 400',
      data: await fetch(new URL(data.settings.fonts.geist400.url)).then((res) =>
        res.arrayBuffer()
      ),
    },
    {
      name: 'Geist 500',
      data: await fetch(new URL(data.settings.fonts.geist500.url)).then((res) =>
        res.arrayBuffer()
      ),
    },
  ]
}
