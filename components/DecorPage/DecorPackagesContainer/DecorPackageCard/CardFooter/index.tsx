import React from 'react'
import styles from './styles.module.scss'

export interface CardFooterProps {
  name: string
}

export default function CardFooter({name} : CardFooterProps) {
  return (
    <div className={styles.cardfooter}>
      {name}
    </div>
  )
}
