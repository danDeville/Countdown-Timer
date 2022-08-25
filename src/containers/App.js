// Base
import React from 'react'

// Components
import CuentaRegresiva from '../components/CuentaRegresiva'
import FooterSocial from '../components/FooterSocial'
import HeaderTitulo from '../components/HeaderTitulo'

// Styles
import {
  StyleContenedorTemporizado,
  StyleFondoFooter
} from '../styles/StyleApp'

function App() {
  return (
    <StyleContenedorTemporizado >
      <HeaderTitulo/>
      <CuentaRegresiva conteoTiempo={6238553600000}/>
      <FooterSocial/>

      <StyleFondoFooter
        src="https://res.cloudinary.com/dz8on44po/image/upload/v1650420867/R2S2/pattern-hills_xeq0e2.svg"
        alt="Fondo"
      />
    </StyleContenedorTemporizado>
  )
}

export default App
