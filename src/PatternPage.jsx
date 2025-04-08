import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import MenuBar from './components/MenuBar/MenuBar'
import yarnImage from './assets/yarn.jpg'
import './PatternPage.css'

export default function PatternPage() {
  return (
    <div className="pattern-page">
      <MenuBar />
      <div className="pattern-body">
        <h1 className='pattern-title'>Pattern</h1>
        <img src={yarnImage} alt="Pattern" className="pattern-image" />
        <button className="gallery-button">View image gallery</button>
        <div className="info-grid">
          <div className="info-grid-item">
            <p className="designer">Designed by John Smith</p>
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          </div>
          <div className="info-grid-item">
            <p className="price">£1.00</p>
            <button className="buy-button">Buy pattern</button>
          </div>
          <div className="info-grid-item">
            <p className="description">Pattern description: This is a knitting pattern being sold for £1.00. It was designed by Mr J Smith, and the photo above shows some yarn you could use. Many people have used this pattern and given excellent reviews, saying it 'was easy to follow', 'produces a beautiful garment' and 'is great fun to knit'.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
