import { MenuItem } from './MenuItem'

export const Menu = ({ menuItems }) => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        {menuItems.map((item) => (
          <MenuItem key={item.id} label={item.label} link={item.link} />
        ))}
      </ul>
    </nav>
  )
}
