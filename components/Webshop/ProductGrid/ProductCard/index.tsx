import Link from 'next/link'
import React from 'react'

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
    <div>
      <Link href={`/webshop/termekek/${product.slug}`}>{product.name}</Link>
      <span>{product.price}</span>
    </div>
  )
}
