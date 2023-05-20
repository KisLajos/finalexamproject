'use client'
import React from 'react'
import ProductCard from './ProductCard'
import { Product } from './ProductCard'

export interface ProductGridProps {
  products: Product[],
  title: string
}

export default function ProductGrid({products, title}: ProductGridProps) {
  console.log("products in ProductGrid: ")
  console.log(products)
  
  return (
    <div>
        <h1>{title}</h1>
        {products.map(product => (
          <ProductCard product={product} />
        ))}
    </div>
  )
}
