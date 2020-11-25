import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default ({ src }: { src: string }) => {
  const { theme } = useTheme()

  useEffect(() => {
    //@ts-ignore
    window?.twttr?.widgets?.load(document.documentElement)
  }, [src])

  return (
    <div>
      <blockquote
        className="twitter-tweet"
        data-theme={theme === 'dark' ? 'dark' : 'light'}
      >
        <p lang="es" dir="ltr">
          <a href={src}></a>
        </p>
      </blockquote>
      <style jsx>{`
        div {
          margin: auto;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
