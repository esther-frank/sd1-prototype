import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './BlogPostCard.css';
import yarnImage from '../../assets/yarn.jpg';

export default function BlogPostCard() {
    return (
        <div className="card">
        <div className='card-header'>
        <h2 as='button' onClick={() => {console.log('clicked title')}}>Knitting - blog</h2>
        <FontAwesomeIcon icon={faHeart} />
        </div>
        <img src={yarnImage} alt="Blog Post" />
        <p>This is a brief summary of the blog post.</p>
        <button>Read More</button>
        </div>
    )
}