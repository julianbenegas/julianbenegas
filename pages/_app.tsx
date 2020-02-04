import '../public/globalStyles.css'
import '../public/nprogress.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import SEO from '../components/SEO'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default ({ Component, pageProps }: any) => {
  return (
    <div>
      <SEO />
      <Component {...pageProps} />
    </div>
  )
}
