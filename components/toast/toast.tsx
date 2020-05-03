import toaster from 'toasted-notes'
import Toast from './ToastComponent'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../../theme'

export default (status: string, title = '') => {
  toaster.notify(
    () => (
      <ThemeProvider theme={theme}>
        <Toast title={title} status={status} />
      </ThemeProvider>
    ),
    {
      position: 'bottom-right'
    }
  )
  return
}
