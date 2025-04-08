import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PatternCard.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import yarnImage from '../../assets/yarn.jpg'
import { Link } from 'react-router'

export default function PatternCard() {
  return (
    <div className="pattern-card">
      <img src={yarnImage} alt="Pattern" className="pattern-image" />
      <div className="pattern-card-details">
        <h2 className="pattern-title">Pattern title</h2>
        <p>Designer</p>
        <div className="pattern-card-footer">
          <Link to="/pattern" className="view-pattern-button">
            More details
          </Link>
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        </div>
      </div>
    </div>
  )
}
