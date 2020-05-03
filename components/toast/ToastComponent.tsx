/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

interface Props {
  status: string
  title: string
}

export default ({ status, title }: Props) => {
  let background
  let color
  switch (status) {
    case 'success':
      background = 'primary'
      color = 'white'
      break
    case 'warning':
      background = '#E1A815'
      color = 'white'
      break
    case 'error':
      background = '#ED3F3F'
      color = 'white'
      break
    default:
      background = 'white'
      color = 'text'
      break
  }

  return (
    <Flex
      sx={{
        bg: background,
        py: 3,
        px: 3,
        color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        mr: 4,
        mb: 3,
        position: 'relative',
        boxShadow: 'xl'
      }}
    >
      <p
        sx={{
          fontSize: 1
        }}
      >
        {title}
      </p>
    </Flex>
  )
}
