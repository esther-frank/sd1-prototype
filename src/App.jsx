import MenuBar from './components/MenuBar/MenuBar'
import BlogPostCard from './components/BlogPostCard/BlogPostCard'
import './App.css'

function App() {
  return (
    <div className="app">
      <MenuBar />
      <div className="blog-posts">
        <h1>Recent Posts</h1>
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  )
}

export default App
