import { useState, useEffect } from 'react'

export const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])

  return (
    <div className="theme-change">
      <button onClick={toggleTheme} className="button wrapped">
        Toggle theme
      </button>
    </div>
  )
}
