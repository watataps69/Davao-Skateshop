import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
 
export default function Navbar() {
  const location = useLocation()
 
  const links = [
    { to: '/', label: 'Home' },
    { to: '/ads', label: 'Ads' },
    { to: '/social', label: 'Social' },
    { to: '/about', label: 'About' },
  ]
 
  return (
    <div className="navbar">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={location.pathname === link.to ? 'active' : ''}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}