'use client'
import React from 'react'
import ProductCard from './ProductCard'
import { Product } from './ProductCard'
import styles from './styles.module.scss'

export interface ProductGridProps {
  products: Product[],
  title: string
}

export default function ProductGrid({products, title}: ProductGridProps) {
  //console.log("products in ProductGrid: ")
  //console.log(products)
  
  return (
    <div>
        <h1>{title}</h1>
        <div className={styles.productCardContainer}>
          {products.map((product, index) => (
            <ProductCard key={`${product.slug}-${index}`} product={product} />
          ))}
        </div>
    </div>
  )
}
