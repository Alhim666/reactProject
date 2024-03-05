import { useState, useEffect } from 'react'

export const TextSize = () => {
  const [textSize, setTextSize] = useState(
    localStorage.getItem('textSize') || 'normal'
  )

  const increaseSize = () => {
    switch (textSize) {
      case 'small':
        setTextSize('normal')
        break
      case 'normal':
        setTextSize('large')
        break
      case 'large':
        setTextSize('extra-large')
        break
      case 'extra-large':
        break
      default:
        setTextSize('normal')
        break
    }
  }

  const decreaseSize = () => {
    switch (textSize) {
      case 'extra-large':
        setTextSize('large')
        break
      case 'large':
        setTextSize('normal')
        break
      case 'normal':
        setTextSize('small')
        break
      case 'small':
        break
      default:
        setTextSize('normal')
        break
    }
  }

  useEffect(() => {
    localStorage.setItem('textSize', textSize)
    document.body.classList.remove(
      'extra-small',
      'small',
      'normal',
      'large',
      'extra-large'
    )
    document.body.classList.add(textSize)

    const textElements = document.querySelectorAll(
      'h1, h2, h3, h4, h5, h6, p, span, div, header, button, input, textarea, option, select'
    )

    textElements.forEach((element) => {
      element.classList.remove('small', 'normal', 'large', 'extra-large')
      element.classList.add(textSize)
    })
  }, [textSize])

  return (
    <div className="font-resize">
      <img
        src="../../font-size-increase-icon.png"
        className="header-settings-icon"
        alt="Icon"
        onClick={increaseSize}
      />
      <img
        src="../../font-size-decrease-icon.png"
        className="header-settings-icon"
        alt="Icon"
        onClick={decreaseSize}
      />
    </div>
  )
}

export default TextSize
