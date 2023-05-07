
'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import navstyles from '../styles.module.scss'
import { Category } from '..';
import { DropdownMenu } from '../Dropdown';

export interface BurgerMenuProps {
    categories: Category[];
}

function BurgerMenu({categories}:BurgerMenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.menuToggle} onClick={handleMenuToggle}>
        <span className={styles.toggleIcon} />
        <span className={styles.toggleIcon} />
        <span className={styles.toggleIcon} />
      </button>
      
      <div className={`${styles.nav_links} ${showMenu ? styles.active : ''}`}>
        <ul>
            <li>
            <Link href={"/"}>Főoldal</Link>
            </li>
            {categories.map((category:Category) => (
                category.acf.show_on_navbar ?
                <li className={`${navstyles.nav_link} ${navstyles.dropdown}`}>
                    {!category.acf.children_data ? 
                    <Link href={`/${category.slug}`}>{category.name}</Link>
                    :
                    <div>
                    <span>{category['name']}</span>
                    <DropdownMenu parentname={category.acf.parent_data.slug} categorychildren={category.acf.children_data}></DropdownMenu>
                    </div>}
                </li>
                :
                ""
                )
            )
            }
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
