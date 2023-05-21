import React from 'react'
import styles from './styles.module.scss'

export interface CardBodyProps {
  imgsrc: string,
  name: string
}

export default function CardBody({imgsrc, name} : CardBodyProps) {
  return (
    <div className={styles.cardbodyImageContainer}>
      <img src={imgsrc} alt={name} />
    </div>
  )
}
