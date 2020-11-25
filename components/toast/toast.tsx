import toaster from 'toasted-notes'
import Toast from './ToastComponent'

export default (status: string, title = '', description = '') => {
  toaster.notify(() => (
    <Toast title={title} description={description} status={status} />
  ))
  return
}
