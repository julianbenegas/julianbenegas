import toaster from 'toasted-notes'
import Toast from './ToastComponent'

export default (status: string, title = '') => {
  toaster.notify(({ onClose }) => (
    <Toast onClose={onClose} title={title} status={status} />
  ))
  return
}
