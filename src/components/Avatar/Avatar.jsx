import React from 'react'
import styles from './Avatar.module.css'
// import { Container } from './styles';

function Avatar({src, hasBorder = true}) {
  return (
    <img
      className={ hasBorder ? styles.AvatarWithBorder : styles.Avatar}
      src={src}
      alt=""
    />
  )
}

export default Avatar
