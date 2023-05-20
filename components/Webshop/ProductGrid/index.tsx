import React from 'react'
import ProductCard from './ProductCard'
import { Product } from './ProductCard'

export interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({products}: ProductGridProps) {
  return (
    <div>
        <h1>Termékek</h1>
        {products.map(product => (
          <ProductCard product={product} />
        ))}
    </div>
  )
}
