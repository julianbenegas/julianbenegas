import {
  useState,
  createContext,
  useEffect,
  PropsWithChildren,
  useContext
} from 'react'

type ColorMode = 'light' | 'dark'

interface Context {
  colorMode: ColorMode
}

export const ColorModeContext = createContext<Context>({
  colorMode: 'light'
})

export default ({ children }: PropsWithChildren<{}>) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light')

  useEffect(() => {
    const prefersDarkMode = window?.matchMedia('(prefers-color-scheme: dark)')
      ?.matches
    if (prefersDarkMode && colorMode !== 'dark') setColorMode('dark')
    else if (colorMode !== 'light') setColorMode('light')
  }, [])

  return (
    <ColorModeContext.Provider value={{ colorMode }}>
      <div
        data-colormode={colorMode}
        style={{ background: 'var(--background-color)' }}
      >
        {children}
      </div>
    </ColorModeContext.Provider>
  )
}

export const useColorMode = () => useContext(ColorModeContext)
