import '../public/styles/globalStyles.css'
import SEO from '../components/SEO'
import ColorModeProvider from '../context/colorModeContext'
import FiltersProvider from '../context/filtersContext'
import GA from '../components/GA'
import { useEffect } from 'react'

export default ({ Component, pageProps }: any) => {
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
    <ColorModeProvider>
      <FiltersProvider>
        <SEO />
        <GA />
        <Component {...pageProps} />
      </FiltersProvider>
    </ColorModeProvider>
  )
}
