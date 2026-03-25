import Navbar from '../components/Navbar'
import './Ads.css'

export default function Ads() {
  return (
    <>
      <Navbar />
      <div className="shop">
        <h1>Davao Skateshop</h1>
        <p className="tagline">Born From The Streets</p>
      </div>

      <div className="ad-wrapper">
        <div className="ad-card" id="pro">
          <img src="/Kyonosuke.png" alt="Skater 1" />
        </div>
        <div className="ad-card" id="pro-large">
          <img src="/Yuto.png" alt="Skater 2" />
        </div>
      </div>
    </>
  )
}