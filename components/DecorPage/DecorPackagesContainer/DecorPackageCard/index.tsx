import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

export interface DecorPackageCardProps {
  name: string,
  imgsrc: string
}

export default function DecorPackageCard({name, imgsrc} : DecorPackageCardProps) {
  return (
    <div>
      {/* <CardHeader/> */}
      <CardBody name={name} imgsrc={imgsrc}/>
      <CardFooter name={name}/>
    </div>
  )
}
