import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { RiHomeOfficeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
    <div className="footer-links">
      <Link to="/obowiazek-informacyjny-rodo"> Rodo</Link>
      <Link to="/polityka-prywatnosci"> Polityka prywatności</Link>
    </div>
    <div className="footer-icons">
      <a href="https://www.instagram.com/realn_pl/">
        <AiOutlineInstagram />
      </a>
      <a href="https://www.facebook.com/RealN.Polska/">
        <AiFillFacebook />
      </a>
      <RiHomeOfficeLine />
    </div>
  </div>  )
}
