import Image from 'next/image'
import React from 'react'

import FooterLinks from './FooterLinks'
import ContactLinks from '../ContactLinks'

import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerLogoContainer}>
          <Image src={"https://finalexamproject-wp.lajoskis.dk/wp-content/uploads/2023/05/diolevel.bezs_-scaled.jpg"} alt='Logo' width={200} height={200}/>
        </div>
        <ContactLinks/>
        {/* @ts-expect-error Server Component */}
        <FooterLinks/>
    </footer>
  )
}
