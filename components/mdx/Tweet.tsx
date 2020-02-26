import { useEffect } from 'react'
import { useColorMode } from '../../context/colorModeContext'

export default ({ src }: { src: string }) => {
  const { colorMode } = useColorMode()

  useEffect(() => {
    //@ts-ignore
    window?.twttr?.widgets?.load(document.documentElement)
  }, [src])

  return (
    <div>
      <blockquote
        className="twitter-tweet"
        data-theme={colorMode === 'dark' ? 'dark' : 'light'}
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
