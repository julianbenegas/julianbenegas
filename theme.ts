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
    text: gray[9],
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    gray,
    'jb-green': '#0ec785',
    'jb-purple': '#3c2bac',
    'jb-gradient': `linear-gradient(
      135deg,
      var(--jb-green) 0%,
      var(--jb-purple) 100%
    )`,
    selection: 'rgba(44, 239, 180, 0.7)',
    teal,
    link: teal[2],
    modes: {
      dark: {
        text: gray[8],
        background: '#fff',
        primary: '#07c',
        secondary: '#30c',
        muted: '#f6f6f6',
        gray,
        'jb-green': '#0ec785',
        'jb-purple': '#3c2bac',
        'jb-gradient': `linear-gradient(
      135deg,
      var(--jb-green) 0%,
      var(--jb-purple) 100%
    )`,
        selection: 'rgba(44, 239, 180, 0.7)',
        teal,
        link: teal[2]
      }
    }
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  spaceOneOffs: {
    sidebarWidth: 320,
    dot: 26
  },
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
    bold: 700
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
  text: {
    smallSubtitle: {
      fontSize: [0, 1],
      color: 'gray.5',
      lineHeight: 'descriptions'
    },
    eventHeading: {
      fontSize: [3, 4],
      color: 'gray.8',
      margin: '0.25rem 0 0.1rem'
    }
  }
}
