import React from 'react'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import Avatar from '../Avatar/Avatar'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/70376757?v=4"/>
        <strong>Reverson Thaiam</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}

export default Sidebar
