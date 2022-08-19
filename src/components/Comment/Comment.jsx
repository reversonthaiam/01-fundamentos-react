import { Trash, ThumbsUp } from 'phosphor-react'
import React from 'react'
import Avatar from '../Avatar/Avatar'
import styles from './Comment.module.css'
// import { Container } from './styles';

function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/70376757?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Reverson Thaiam</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Publicado há 1h
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment
