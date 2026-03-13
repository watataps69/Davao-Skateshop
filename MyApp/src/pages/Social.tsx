import Navbar from '../components/Navbar'
import './Social.css'

const socialLinks = [
  { label: 'FACEBOOK', href: 'https://www.facebook.com/DavaoSkateshop082' },
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/davaoskateshop' },
  { label: 'TIKTOK', href: 'https://www.tiktok.com/@davaoskateshop' },
  {
    label: 'EMAIL US',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=wesleyregino19@gmail.com',
  },
]

export default function Social() {
  return (
    <>
      <Navbar />
      <div className="shop">
        <h1>Davao Skateshop</h1>
        <p className="tagline">Connect With Us</p>
      </div>

      <div className="social-container">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}