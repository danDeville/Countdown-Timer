// Base
import React from 'react'

// Iconos
import {
  faFacebookSquare,
  faPinterest,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

// Styles
import { StyleFooterSocial, StyleContenedorIcons, StyleIcon } from '../styles/StyleFooterSocial'

const FooterSocial = () => {
  return(
    <StyleFooterSocial>
      <StyleContenedorIcons>
        <StyleIcon icon={faFacebookSquare}/>
        <StyleIcon icon={faPinterest} />
        <StyleIcon icon={faInstagram}/>
      </StyleContenedorIcons>
    </StyleFooterSocial>
  )
}

export default FooterSocial
