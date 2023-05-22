import React from 'react'
import styles from './styles.module.scss'
import { Category } from '@/components/Navbar'
import Footerlink from './Footerlink'

export interface FooterlinkContainerProps {
    categories: Category[]
}

export default function FooterlinkContainer({categories} : FooterlinkContainerProps) {
  return (
    <ul className={styles.footerlinks}>
        {categories.map((category:Category) => (
              category.acf.show_on_navbar ?
              <Footerlink key={"key-" + category.id} category={category}/>
              :
              ""
            )
          )
        }
      </ul>
  )
}
