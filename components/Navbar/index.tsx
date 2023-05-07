import Link from 'next/link'
import React from 'react'
import { DropdownMenu, Sublink } from './Dropdown'
import styles from './styles.module.scss'
import BurgerMenu from './BurgerMenu'
import Navlink from './Navlink'

export interface WPTermObject {
  term_id: number,
  name: string,
  slug: string,
  description: string,
}
export interface Category {
  id: number,
  count: number,
  description: string,
  link: string,
  name: string,
  slug: string,
  taxonomy: string,
  parent: number,
  meta: [],
  acf: {
    parent_data: WPTermObject,
    children_data: WPTermObject[],
    show_on_navbar: boolean
  },
  //_links?: {}
}

export default async function Navbar() {
  const resCategories = await getCategories()

  return (
    <nav className={styles.navbar}>
      <BurgerMenu categories={resCategories}/>

      <ul className={styles.nav_links}>
        <li>
          <Link href={"/"}>Főoldal</Link>
        </li>
        {resCategories.map((category:Category) => (
              category.acf.show_on_navbar ?
              <Navlink category={category}/>
              :
              ""
            )
          )
        }
      </ul>
    </nav>
  )
}

async function getCategories() {
  const resCategories = await fetch('https://finalexamproject-wp.lajoskis.dk/wp-json/wp/v2/categories?per_page=50');

  if (!resCategories.ok) {
    // This will activate the closest `error.tsx` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return resCategories.json();
}

async function getCategoryById(id : number) {
  const resCategory = await fetch(`https://finalexamproject-wp.lajoskis.dk/wp-json/wp/v2/categories/${id}`);

  if (!resCategory.ok) {
    // This will activate the closest `error.tsx` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return resCategory.json();
}

async function findParentCategoryName(search_id:number) {
  const resCategory = await getCategoryById(search_id)

  return resCategory.name;
}