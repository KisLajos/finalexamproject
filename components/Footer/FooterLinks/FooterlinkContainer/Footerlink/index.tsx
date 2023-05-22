import React from 'react'
//import { DropdownMenu } from '../Dropdown'
import Link from 'next/link'
import styles from './styles.module.scss'
import { Category } from '@/components/Navbar'

export interface FooterlinkProps {
    category: Category
}

export default function Footerlink({category}: FooterlinkProps) {
  return (
    <span >
        {!category.acf.children_data ? 
        <Link href={`/${category.slug}`}>{category.name}</Link>
        :
        <div className={styles.footerlist}>
            <div>{category['name']}</div>
            {category.acf.children_data.map((categorychild, index) => (
                <li key={`${category.slug}-${index}`} className={`${styles.nav_link} ${styles.nav_link__child}`}>
                    <Link href={`/${category.slug}/${categorychild.slug}`}>{categorychild.name}</Link>
                </li>
            ))}
        </div>}
    </span>
  )
}
