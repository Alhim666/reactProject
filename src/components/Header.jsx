import { Link } from 'react-router-dom'
import { Menu } from './Menu'
import { Theme } from './Theme'
import TextSize from './TextSize'

export const Header = () => {
  const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'Game', link: '/game' },
    { id: 3, label: 'Leaderboard', link: '/leaderboard' },
    { id: 4, label: 'Feedback', link: '/feedback' },
  ]

  return (
    <header className="header">
      <Link to="/" className="header-info">
        <img src="../../icon.png" className="header-icon" alt="Icon" />
        <p>Memory Cards</p>
      </Link>
      <Menu menuItems={menuItems} />
      <div className="header-settings">
        <Theme />
        <TextSize />
      </div>
    </header>
  )
}
