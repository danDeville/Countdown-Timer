// Base
import React from 'react'

// Components
import CuentaRegresiva from '../Components/CuentaRegresiva'
import FooterSocial from '../Components/FooterSocial'
import HeaderTitulo from '../Components/HeaderTitulo'

// Styles
import {
  StyleContenedorTemporizado,
  StyleFondoFooter
} from '../styles/StyleApp'

function App() {
  return (
    <StyleContenedorTemporizado >
      <HeaderTitulo/>
      <CuentaRegresiva conteoTiempo={1652983662000}/>
      <FooterSocial/>

      <StyleFondoFooter
        src="https://res.cloudinary.com/dz8on44po/image/upload/v1650420867/R2S2/pattern-hills_xeq0e2.svg"
        alt="Fondo"
      />
    </StyleContenedorTemporizado>
  )
}

export default App
