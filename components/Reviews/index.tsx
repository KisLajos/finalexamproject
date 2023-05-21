import React from 'react'
import ReviewSlider from './ReviewSlider'
import { getReviews } from '@/utils/wordpressfunctions';

export default async function Reviews() {
  const reviews = await getReviews();

  return (
    <ReviewSlider reviews={reviews} />
  )
}
