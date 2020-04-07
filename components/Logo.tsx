/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Link from 'next/link'

const GradientSVG = () => (
  <div
    sx={{
      width: 3,
      height: 3,
      borderRadius: '4px',
      variant: 'misc.logo'
    }}
  ></div>
)

export default () => {
  return (
    <Link href="/">
      <Flex
        as="a"
        sx={{
          variant: 'layout.flex.center',
          width: 'max-content',
          borderRadius: '2px',
          bg: 'transparent',
          cursor: 'pointer',
          ':hover': {
            h1: {
              opacity: '.65'
            },
            div: {
              opacity: '.85'
            }
          }
        }}
      >
        <GradientSVG />
        <h1
          sx={{
            color: 'text',
            ml: 2,
            fontSize: 4,
            lineHeight: 1
          }}
        >
          Julián Benegas
        </h1>
      </Flex>
    </Link>
  )
}
