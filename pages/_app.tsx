import '../public/styles/globalStyles.css'
import SEO from '../components/SEO'
import ColorModeProvider from '../context/colorModeContext'
import FiltersProvider from '../context/filtersContext'

export default ({ Component, pageProps }: any) => {
  return (
    <ColorModeProvider>
      <FiltersProvider>
        <SEO />
        <Component {...pageProps} />
      </FiltersProvider>
    </ColorModeProvider>
  )
}
