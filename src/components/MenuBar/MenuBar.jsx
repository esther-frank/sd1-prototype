import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/ravelry-logo.png'
import { Link } from 'react-router'
import './MenuBar.css'

export default function MenuBar() {
  return (
    <div className="menu-bar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="menu-buttons">
        <Link to="/search" className="menu-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
        <Link to='/profile' className="menu-button">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  )
}
