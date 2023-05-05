import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <Link href={"/dekorcsomagok"}>Dekorcsomagok</Link>
        <Link href={""}>Informaciok</Link> {/* should become dropdown */}
        <Link href={"/munkaink"}>Munkaink</Link>
        <Link href={""}>Szolgaltatasaink</Link> {/* should become dropdown */}
        <Link href={""}>Webshop</Link> {/* should become dropdown */}
    </nav>
  )
}
