import Image from 'next/image'
import React from 'react'

import FooterLinks from './FooterLinks'
import ContactLinks from '../ContactLinks'

export default function Footer() {
  return (
    <footer>
        <Image src={""} alt='Logo'/>
        <ContactLinks/>
        <FooterLinks/>
    </footer>
  )
}
