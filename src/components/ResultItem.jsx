import React, { useRef, useState, useEffect } from 'react'

//Використання useRef для зміни кольору при наведені

// eslint-disable-next-line react/display-name
export const ResultItem = React.memo(({ param1, param2, param3, param4 }) => {
  const itemRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    if (itemRef.current) {
      itemRef.current.addEventListener('mouseenter', handleMouseEnter)
      itemRef.current.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (itemRef.current) {
        itemRef.current.removeEventListener('mouseenter', handleMouseEnter)
        itemRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const backgroundColor = isHovered && 'var(--primary-color)'
  const color = isHovered && 'var(--secondary-color)'

  return (
    <div
      className="leaderboard-row"
      ref={itemRef}
      style={{ backgroundColor, color }}
    >
      <div className="leaderboard-cell">{param1}</div>
      <div className="leaderboard-cell">{param2}</div>
      <div className="leaderboard-cell">{param3}</div>
      <div className="leaderboard-cell">{param4}</div>
    </div>
  )
})
