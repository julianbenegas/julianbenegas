import '../public/styles/globalStyles.css'
import '../public/styles/nprogress.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import SEO from '../components/SEO'
import ColorModeProvider from '../context/colorModeContext'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default ({ Component, pageProps }: any) => {
  return (
    <ColorModeProvider>
      <SEO />
      <Component {...pageProps} />
    </ColorModeProvider>
  )
}
