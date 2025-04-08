import MenuBar from './components/MenuBar/MenuBar'
import PatternCard from './components/PatternCard/PatternCard'
import './ProfilePage.css'

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <MenuBar />
      <div className="profile-page-content">
        <h1>My Favourites</h1>
        <PatternCard />
        <PatternCard />
        <PatternCard />
      </div>
    </div>
  )
}
