import { useEffect } from 'react'

const getVw = () => {
  const vw = document.documentElement.clientWidth / 100
  return vw
}

const setVw = () => {
  const vw = getVw()
  document.documentElement.style.setProperty('--vw', `${vw}px`)
}

const useListenVw = () => {
  useEffect(() => {
    setVw()
    window.addEventListener('resize', setVw)
    return () => window.removeEventListener('resize', setVw)
  }, [])
}

export { useListenVw, getVw, setVw }