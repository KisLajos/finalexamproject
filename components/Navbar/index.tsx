import Link from 'next/link'
import React from 'react'
import { DropdownMenu, Sublink } from './Dropdown'
import styles from './styles.module.scss'

export default function Navbar() {
  const sublinksForInfo:Sublink[] = [{
    href: '/informaciok/fizetes-es-szallitas',
    title: 'Fizetés és szállítás',
  },{
    href: '/informaciok/gyik',
    title: 'Gyakran ismételt kérdések',
  },{
    href: '/informaciok/kapcsolat',
    title: 'Kapcsolat',
  },{
    href: '/informaciok/rolunk',
    title: 'Rólunk',
  },]
  const sublinksForSzolg = [{
    href: '/szolgaltatasok/kolcsonzes',
    title: 'Kölcsönzés',
  },{
    href: '/szolgaltatasok/szemelyes-konzultacio',
    title: 'Személyes konzultáció',
  }]
  const sublinksForWebshop = [{href: "/webshop/termekek", title: "Termekek"}]

  return (
    <nav className={styles.navbar}>
        {/* <div className={'burger'}>
            <div />
            <div />
            <div />
        </div> */}

      <ul className={styles.nav_links}>
        <li className={styles.nav_link}>
          <Link href="/dekorcsomagok">Dekorcsomagok</Link>
        </li>
        <li className={styles.nav_link}>
          <Link href="/munkaink">Munkáink</Link>
        </li>
        <li className={`${styles.nav_link} ${styles.dropdown}`}>
          <span>Információk</span>
          <DropdownMenu sublinks={sublinksForInfo}></DropdownMenu>
        </li>
        <li className={`${styles.nav_link} ${styles.dropdown}`}>
          <span>Szolgáltatásaink</span>
          <DropdownMenu sublinks={sublinksForSzolg}></DropdownMenu>
        </li>
        <li className={`${styles.nav_link} ${styles.dropdown}`}>
          <span>Webshop</span>
          <DropdownMenu sublinks={sublinksForWebshop}></DropdownMenu>
        </li>
      </ul>

    </nav>
  )
}
