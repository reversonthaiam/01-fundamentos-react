import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import styles from './App.module.css'
import './global.css'
import Post from './components/Post/post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/70376757?v=4',
      name: 'Reverson Thaiam',
      role: 'CTO @RevinCompany',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀',
      },
      { type: 'paragraph', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-02-03 20:08:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/70376757?v=4',
      name: 'Diego Fernandes',
      role: 'CTO @RocketSeat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀',
      },
      { type: 'paragraph', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-02-03 20:08:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/70376757?v=4',
      name: 'Pedro Joao',
      role: 'CTO @RevinCompany',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀',
      },
      { type: 'paragraph', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-02-03 20:08:00'),
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          {posts.map((e) => (
            <Post
              key={e.id}
              author={e.author}
              content={e.content}
              publishedAt={e.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
