import { faPhone, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './styles.module.scss'

export default function ContactLinks() {
  return (
    <div className={styles.contactLinks}>
      <span><FontAwesomeIcon icon={faEnvelope} style={{color: "#f3e4e2", width: "20px"}} />wagner.flora@prsc.hu</span>
      <span><FontAwesomeIcon icon={faPhone} style={{color: "#f3e4e2", width: "20px"}} /> +36 70 609 7223</span>
      <span><FontAwesomeIcon icon={faLocationPin} style={{color: "#f3e4e2", width: "20px"}} />2330 Dunaharaszti, Fő út 207.</span>
      <span><FontAwesomeIcon icon={faFacebook} style={{color: "#f3e4e2", width: "20px"}}/>@dioleveldekor</span>
      <span><FontAwesomeIcon icon={faInstagram} style={{color: "#f3e4e2", width: "20px"}}/> @diolevel_dekormuhely</span>
    </div>
  )
}
