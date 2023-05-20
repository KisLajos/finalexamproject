import React from 'react'

export interface Product {
  name: string,
  price: number
}

export interface ProductCardProps {
  product: Product
}

export default function ProductCard({product}: ProductCardProps) {
  return (
    <div>
      <span>{product.name}</span>
      <span>{product.price}</span>
    </div>
  )
}
