const gray = [
  'hsl(197, 33%, 97%)',
  'hsl(197, 32%, 92%)',
  'hsl(197, 27%, 87%)',
  'hsl(197, 14%, 70%)',
  'hsl(197, 8%, 45%)',
  'hsl(197, 13%, 29%)',
  'hsl(197, 20%, 19%)',
  'hsl(197, 12%, 12%)',
  'hsl(197, 26%, 7%)'
]

const teal = [
  'hsl(197, 100%, 84%)',
  ' hsl(197, 61%, 37%)',
  'hsl(197, 100%, 25%)'
]

export default {
  colors: {
    text: gray[8],
    background: '#fff',
    primary: 'hsl(197, 100%, 25%)',
    secondary: '#0ec785',
    muted: 'hsl(197, 33%, 97%)',
    gray,
    green: '#0ec785',
    purple: '#3c2bac',
    gradient: `linear-gradient(
      135deg,
      #0ec785 0%,
      #3c2bac 100%
    )`,
    selection: 'rgba(44, 239, 180, 0.7)',
    teal,
    link: teal[2],
    modes: {
      dark: {
        text: 'white',
        background: '#fff',
        primary: '#07c',
        secondary: '#30c',
        muted: '#f6f6f6',
        gray,
        'jb-green': '#0ec785',
        'jb-purple': '#3c2bac',
        gradient: `linear-gradient(
      135deg,
      #0ec785 0%,
      #3c2bac 100%
    )`,
        selection: 'rgba(44, 239, 180, 0.7)',
        teal,
        link: teal[2]
      }
    }
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: `'Inter', Roboto, -apple-system, system-ui, BlinkMacSystemFont,
      'Segoe UI', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    heading: 'inherit',
    monospace: `Menlo, Monaco, 'Courier New', monospace`
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    semi: 500
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    descriptions: 1.25
  },
  borders: {
    nav: `1px solid ${gray[0]}`,
    dot: '6px solid white'
  },
  breakpoints: ['400px', '620px', '900px', '1200px'],
  zIndices: {
    nav: 100,
    root: 1
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
    xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)'
  },
  radii: {},
  // ---------
  // VARIANTS
  // ---------
  text: {
    eventDescription: {
      fontSize: [0, 1],
      color: 'gray.4',
      lineHeight: 'descriptions'
    },
    eventHeading: {
      fontSize: [3, 4],
      fontWeight: '600',
      color: 'text',
      margin: '0.25rem 0 0.1rem'
    },
    eventDate: {
      color: 'primary',
      fontWeight: '500',
      fontSize: [0, 1]
    }
  },
  layout: {
    flex: {
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    sidebar: {
      width: '320px',
      minWidth: '320px',
      zIndex: 'nav'
    },
    dot: {
      minWidth: '26px',
      maxWidth: '26px',
      width: '26px',
      minHeight: '26px',
      maxHeight: '26px',
      height: '26px'
    }
  },
  misc: {
    logo: {
      background: `linear-gradient(
        135deg,
        #0ec785 0%,
        #3c2bac 100%
      )`,
      width: '20px',
      height: '20px'
    }
  }
}
