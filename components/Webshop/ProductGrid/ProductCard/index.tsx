import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'

export interface Product {
  name: string,
  price: number,
  slug: string
}

export interface ProductCardProps {
  product: Product
}

export default function ProductCard({product}: ProductCardProps) {
  return (
    <div className={styles.productcardContainer}>
      <div className={styles.productcardImageContainer}>
        <Image src='https://finalexamproject-wp.lajoskis.dk/wp-content/uploads/woocommerce-placeholder.png' alt={product.name} width={250} height={250}/>
      </div>
      <Link href={`/webshop/termekek/${product.slug}`}>{product.name}</Link>
      <span>{product.price} Ft</span>
      <button className={styles.toBasketButton}>Kosárba</button>
    </div>
  )
}
