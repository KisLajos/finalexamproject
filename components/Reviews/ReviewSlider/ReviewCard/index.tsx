import React from 'react'
import parse from 'html-react-parser'
import { Review } from '..'
import styles from './styles.module.scss'

export interface ReviewCardProps {
    reviews: Review[],
    currentIndex: number
}

export default function ReviewCard({reviews, currentIndex} : ReviewCardProps) {
  return (
    <div className={styles.reviewCard}>
        <div className={styles.reviewCardImageContainer}>
            <img className={styles.reviewCardImage} alt="Visszajelzés" src={reviews[currentIndex]?.acf.review_image.url} />
        </div>
        
        <div className={styles.reviewCardContent}>
            <h3>{reviews[currentIndex]?.title.rendered}</h3>
            <p>{parse(reviews[currentIndex]?.content.rendered)}</p>
        </div>
    </div>
  )
}
