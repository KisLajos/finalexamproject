import { getCategories } from '@/components/Navbar'
import React from 'react'
import FooterlinkContainer from './FooterlinkContainer'

export default async function FooterLinks() {
  const resCategories = await getCategories()

  return (
    <div>
      <FooterlinkContainer categories={resCategories}/>
    </div>
  )
}
