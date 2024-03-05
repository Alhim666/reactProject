import { NavLink } from 'react-router-dom'

export const MenuItem = ({ label, link }) => {
  return (
    <li>
      <NavLink to={link}>{label}</NavLink>
    </li>
  )
}
