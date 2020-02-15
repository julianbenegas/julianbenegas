import '../public/styles/globalStyles.css'
import SEO from '../components/SEO'
import ColorModeProvider from '../context/colorModeContext'
import FiltersProvider from '../context/filtersContext'
import GA from '../components/GA'

export default ({ Component, pageProps }: any) => {
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
