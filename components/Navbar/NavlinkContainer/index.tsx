import React from 'react'
import { Category } from '..'
import navbarstyles from '../styles.module.scss'
import Link from 'next/link'
import Navlink from '../Navlink'
import styles from './styles.module.scss'

export interface NavlinkContainerProps {
    categories: Category[]
}

export default function NavlinkContainer({categories} : NavlinkContainerProps) {
  return (
    <ul className={navbarstyles.nav_links + " " + styles.testclass}>
        <li>
          <Link href={"/"}>Főoldal</Link>
        </li>
        {categories.map((category:Category) => (
              category.acf.show_on_navbar ?
              <Navlink key={"nav-" + category.id} category={category}/>
              :
              ""
            )
          )
        }
      </ul>
  )
}
