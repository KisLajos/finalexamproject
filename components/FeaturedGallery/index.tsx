'use client';
import React, { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

export interface Image {
  id: number;
  source_url: string;
  title: {
    rendered: string;
  };
  media_details: {
    sizes: {
      medium: {
        width: number,
        height: number
      }
      full: {
        width: number,
        height: number
      }
    }
  }
  url?: string,
  sizes?: {
    medium_width: number,
    medium_height: number,
    large_width: number,
    large_height: number,
  }
  acf?: {
    show_in_gallery: boolean,
  }
}

export interface FeaturedGalleryProps {
  images: Image[]
}

export default function FeaturedGallery({images} : FeaturedGalleryProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Filtering out the needed images for the gallery
  var imagesToShow = images.filter(function(el) { return el.acf?.show_in_gallery === true; }); 

  // Trigger the animation when the image comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);


  return (
    <div className={styles.gallery}>
      {
        imagesToShow.map((image: Image) => (
          <div className={styles.gallery_item} key={image.id} ref={ref}>
            <motion.div 
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5 }}>
                  <Image src={image.source_url} alt={image.title.rendered} width={image.media_details.sizes.medium.width} height={image.media_details.sizes.medium.height}/>
            </motion.div>
          </div>
        ))
      }
    </div>
  )
}
