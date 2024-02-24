'use client'
import { VercelToolbar } from '@vercel/toolbar/next'
import { useEffect, useState } from 'react'

export function Toolbar() {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem('jb-toolbar') === 'true') {
      setMount(true)
    }
  }, [])

  return mount ? <VercelToolbar /> : null
}
