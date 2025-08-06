// app/components/HtmlThemePatcher.tsx
'use client'

import { useEffect } from 'react'

export function HtmlThemePatcher() {
  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('data-theme', 'dark')
    html.style.colorScheme = 'dark'
  }, [])

  return null
}
