import { useEffect } from 'react'
import { useColorMode } from '../../context/colorModeContext'

export default ({ src }: { src: string }) => {
  const { colorMode } = useColorMode()

  useEffect(() => {
    // Customizations to Twitter embed
    // Taken from https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/javascript-api
    // And from https://stackoverflow.com/a/22078264/10787298
    // @ts-ignore
    window.twttr = (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        // @ts-ignore
        t = window.twttr || {}
      if (d.getElementById(id)) return t
      js = d.createElement(s)
      js.id = id
      // @ts-ignore
      js.src = 'https://platform.twitter.com/widgets.js'
      // @ts-ignore
      fjs.parentNode.insertBefore(js, fjs)
      t._e = []
      // @ts-ignore
      t.ready = function(f) {
        t._e.push(f)
      }
      return t
    })(document, 'script', 'twitter-wjs')
  }, [])

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
