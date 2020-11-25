import '../styles/globalStyles.css'
import FiltersProvider from '../context/filtersContext'
import GA from '../components/GA'
import { useEffect } from 'react'
import { useListenVw } from '../hooks/use-listen-vw'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: any) {
  useListenVw()

  useEffect(() => {
    // Customizations to Twitter embed
    // Taken from https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/javascript-api
    // And from https://stackoverflow.com/a/22078264/10787298
    // @ts-ignore
    window.twttr = (function (d, s, id) {
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
      t.ready = function (f) {
        t._e.push(f)
      }
      return t
    })(document, 'script', 'twitter-wjs')
  }, [])

  return (
    <FiltersProvider>
      <GA />
      <ThemeProvider defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </FiltersProvider>
  )
}
