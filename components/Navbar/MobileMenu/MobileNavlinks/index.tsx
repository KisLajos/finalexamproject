import Link from 'next/link'
import React from 'react'
import { Category } from '../..'
import { DropdownMenu } from '../../Dropdown'
import Navlink from '../../Navlink'
import styles from '../styles.module.scss'

export interface MobileNavlinksProps {
    categories: Category[],
    showMenu: boolean
}

export default function MobileNavlinks({categories, showMenu} : MobileNavlinksProps) {
  return (
    <div className={`${styles.nav_links} ${showMenu ? styles.active : ''}`}>
        <ul>
            <li>
            <Link href={"/"}>Főoldal</Link>
            </li>
            {categories.map((category:Category) => (
                category.acf.show_on_navbar ?
                <Navlink key={category.id} category={category} />
                :
                ""
                )
            )
            }
        </ul>
      </div>
  )
}
