import React from 'react'
import DecorPackageCard from './DecorPackageCard'
import styles from './styles.module.scss'

export default function DecorPackagesContainer() {
  return (
    <div className={styles.decorpackageContainer}>
        <DecorPackageCard name={"Rozsda dekorcsomag"} imgsrc={"https://finalexamproject-wp.lajoskis.dk/wp-content/uploads/2023/05/Rust.png"}/>
        <DecorPackageCard name={"Olíva dekorcsomag"} imgsrc={"https://finalexamproject-wp.lajoskis.dk/wp-content/uploads/2023/05/Olive.png"}/>
        <DecorPackageCard name={"Homok dekorcsomag"} imgsrc={"https://finalexamproject-wp.lajoskis.dk/wp-content/uploads/2023/05/Beige.png"}/>
    </div>
  )
}
