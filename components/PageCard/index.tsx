import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'

export interface PageCardProps {
  type: string,
  title: string,
  links: string[],
  bodytext?: string
}

export default function PageCard({title, links, bodytext}:PageCardProps) {
  console.log("==========")
  console.log("links")
  console.log("==========")
  console.log(links)
  console.log(links.length)
  
  return (
    <div>
      {links.length > 1 && 
        <div className={styles.linksCard}>
          <h2>{title}</h2>
          {
          <div>
            {links.map((link, index) =>(
                <div key={"link-" + index} className={styles.needsBefore}>{link}</div>
            ))}
          </div>
          }
        </div>
      }
      
      {(bodytext && bodytext.length > 0) &&
        <div className={styles.textCard}>
          <h2>{title}</h2>
          <div>
            {bodytext}
          </div>
        </div>
      }
    </div>
  )
}
