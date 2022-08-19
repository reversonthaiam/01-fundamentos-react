import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import styles from './App.module.css'
import './global.css'
import Post from './components/Post/post'

function App() {

  return (
    <div className="App">
     <Header />
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <main>
        <Post></Post>
        <Post></Post>
      </main>
    </div>
    </div>
  )
}

export default App
