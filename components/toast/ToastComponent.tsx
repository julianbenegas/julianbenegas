/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { MdClose, MdDone, MdWarning, MdError, MdInfo } from 'react-icons/md'
import theme from '../../theme'

interface Props {
  onClose: () => void
  status: string
  title: string
}

export default ({ onClose, status, title }: Props) => {
  let background
  let color
  let icon
  switch (status) {
    case 'success':
      background = theme.colors.primary
      color = 'white'
      icon = <MdDone />
      break
    case 'warning':
      background = '#E1A815'
      color = 'white'
      icon = <MdWarning />
      break
    case 'error':
      background = '#ED3F3F'
      color = 'white'
      icon = <MdError />
      break
    default:
      background = 'white'
      color = theme.colors.text
      icon = <MdInfo />
      break
  }

  return (
    <Flex
      sx={{
        bg: background,
        py: 3,
        pr: 4,
        pl: 3,
        color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        mt: 3,
        position: 'relative',
        boxShadow: 'xl'
      }}
    >
      <i>{icon}</i>
      <div
        sx={{
          textAlign: 'left',
          my: 0,
          mr: 3,
          ml: 2
        }}
      >
        <h3
          sx={{
            fontSize: 2,
            fontWeight: 'semi'
          }}
        >
          {title}
        </h3>
      </div>
      <button
        onClick={onClose}
        sx={{
          border: 'none',
          color,
          bg: 'transparent',
          position: 'absolute',
          top: 2,
          right: 2,
          fontSize: 2
        }}
      >
        <MdClose />
      </button>
    </Flex>
  )
}
