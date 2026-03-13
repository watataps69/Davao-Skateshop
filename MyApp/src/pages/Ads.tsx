import Navbar from '../components/Navbar'
import kyonosuke from '../assets/Kyonosuke.png'
import yuto from '../assets/Yuto.png'
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
          <img src={kyonosuke} alt="Skater 1" />
        </div>
        <div className="ad-card" id="pro-large">
          <img src={yuto} alt="Skater 2" />
        </div>
      </div>
    </>
  )
}