'use client'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import parse from 'html-react-parser'
import styles from './styles.module.scss'
import ReviewCard from './ReviewCard';

export interface Review {
  title: {
    rendered: string;
  },
  content: {
    rendered: string;
  },
  acf: {
    review_image: {
      url: string
    }
  }
}

export interface ReviewSliderProps {
  reviews: Review[]
}

const ReviewSlider = ({reviews} : ReviewSliderProps) => {
  //const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("reviews in ReviewSlider")
  console.log(reviews)

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  if (reviews.length === 0) {
    return <div>Loading reviews...</div>;
  }

  return (
    <div className={styles.review_slider}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          className={styles.reviewCardContainter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ReviewCard reviews={reviews} currentIndex={currentIndex}/>
          
        </motion.div>
      </AnimatePresence>

      <div className={styles.slider_controls}>
        <div className={styles.dot_navigation}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;