import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import MenuBar from './components/MenuBar/MenuBar'
import { Link } from 'react-router'
import yarnImage from './assets/yarn.jpg'
import './SearchPage.css'

export default function SearchPage() {
  return (
    <div className="search-page">
      <MenuBar />
      <div className="search-body">
        <div className="search-header">
          <input
            type="text"
            className="search-input"
            placeholder="Search for patterns, yarns, or projects..."
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
        <div className="search-results">
          <div className="search-result">
            <img
              src={yarnImage}
              alt="Pattern"
              className="search-result-image"
            />
            <Link to='/pattern' className="search-result-title">Pattern Title</Link>
          </div>
          <div className="search-result">
            <img
              src={yarnImage}
              alt="Pattern"
              className="search-result-image"
            />
            <Link to='/pattern' className="search-result-title">Pattern Title</Link>
          </div>
          <div className="search-result">
            <img
              src={yarnImage}
              alt="Pattern"
              className="search-result-image"
            />
            <Link to='/pattern' className="search-result-title">Pattern Title</Link>
          </div>
          <div className="search-result">
            <img
              src={yarnImage}
              alt="Pattern"
              className="search-result-image"
            />
            <Link to='/pattern' className="search-result-title">Pattern Title</Link>
          </div>
          <div className="search-result">
            <img
              src={yarnImage}
              alt="Pattern"
              className="search-result-image"
            />
            <Link to='/pattern' className="search-result-title">Pattern Title</Link>
          </div>
          <div className="search-result">
            <img
              src={yarnImage}
              alt="Pattern"
              className="search-result-image"
            />
            <Link to='/pattern' className="search-result-title">Pattern Title</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
