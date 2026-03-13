import Navbar from '../components/Navbar'
import './About.css'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="shop">
        <h1>Davao Skateshop</h1>
        <p className="tagline">Born From The Streets</p>
      </div>

      <div className="about-section">
        <div className="about-content">
          <h2>OUR STORY</h2>
          <p>
            Established in the heart of Davao, our skateshop is more than just a store—it's a home
            for the local skate community. We started with a simple mission: to provide high-quality
            gear to those who live and breathe street culture.
          </p>
          <p>
            Whether you are just starting out or you've been shredding for years, we are here to
            support your journey. From the streets to the parks, Davao Skateshop is built by
            skaters, for skaters.
          </p>
        </div>
      </div>
    </>
  )
}