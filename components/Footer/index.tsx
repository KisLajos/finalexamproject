import Image from 'next/image'
import React from 'react'

import FooterLinks from './FooterLinks'
import ContactLinks from '../ContactLinks'

import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <Image src={""} alt='Logo'/>
        <ContactLinks/>
        <FooterLinks/>
    </footer>
  )
}
