import Image from 'next/image'
import HeroGallery from '@/components/HeroGallery'
import MainPageCards from '@/components/MainPageCards'
import HowWeWork from '@/components/HowWeWork'
import styles from './page.module.scss'
import Reviews from '@/components/Reviews'
import { getHeroImages } from '@/utils/wordpressfunctions'
import AboutUs from '@/components/AboutUs'

export default async function Home() {
  const imagesRes = await getHeroImages();
  const images = imagesRes[0].acf

  const imagesToSet = []
  imagesToSet.push(images.hero_image_1)
  imagesToSet.push(images.hero_image_2)
  imagesToSet.push(images.hero_image_3)

  //console.log(imagesToSet)

  return (
    <main className={styles.main}>
      <HeroGallery images={imagesToSet} interval={5000} />
      <MainPageCards />
      <HowWeWork />
      <Image src='/munkaink.svg' alt='munkaink' width={900} height={900}/>
      {/* @ts-expect-error Server Component */}
      <Reviews />
      {/* @ts-expect-error Server Component */}
      <AboutUs />
    </main>
  )
}