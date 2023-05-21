import React from 'react'
import { DropdownMenu } from '../Dropdown'
import Link from 'next/link'
import styles from './styles.module.scss'
import navstyles from '../styles.module.scss'
import { Category } from '..'

export interface NavlinkProps {
    category: Category
}

export default function Navlink({category}: NavlinkProps) {
  return (
    <li className={`${navstyles.nav_link} ${navstyles.nav_link__parent} ${navstyles.dropdown} ${styles.testclass}`}>
        {!category.acf.children_data ? 
        <Link href={`/${category.slug}`}>{category.name}</Link>
        :
        <div className={navstyles.dropdown}>
            <div className={navstyles.dropdown_header}>{category['name']}</div>
            <DropdownMenu parentname={category.acf.parent_data.slug} categorychildren={category.acf.children_data}></DropdownMenu>
        </div>}
    </li>
  )
}
