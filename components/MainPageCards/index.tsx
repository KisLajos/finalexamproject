import React from 'react'
import PageCard from '../PageCard'
import styles from './styles.module.scss'

export default function MainPageCards() {
  return (
    <div className={styles.mainpageCardsContainer}>
      <PageCard type="mainpage" title="Szolgáltatásaink" links={["Személyes konzultáció", "Kölcsönzés"]}/>
      <PageCard type="mainpage" title="Dekorcsomagok" links={['"Rozsda" dekorcsomag', '"Olíva" dekorcsomag', '"Homok" dekorcsomag']}/>
      <PageCard type="mainpage" title="Webshop" links={["Bérelhető termékek", "Meghívók", "Köszönőajándékok", "Ültetőtáblák", "Üdvözlőtáblák", "Makramés díszek"]}/>
    </div>
  )
}
