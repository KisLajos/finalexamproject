
'use client'
import { useState } from 'react';
import { Category } from '..';
import MobileNavlinks from './MobileNavlinks';
import styles from './styles.module.scss';
import navstyles from '../styles.module.scss'

export interface MobileMenuProps {
    categories: Category[];
}

function MobileMenu({categories} : MobileMenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <div className={styles.mobile_menu}>
      <button className={styles.menu_toggle_button} onClick={handleMenuToggle}>
        <span className={styles.toggle_icon} />
      </button>
      
      <MobileNavlinks categories={categories} showMenu={showMenu}/>
    </div>
  );
}

export default MobileMenu;
