// Base
import React,{ useState, useEffect } from "react"

// Components
import tiempoRestanteMs from "./Utilitarios"

// Styles
import {
  StyleContenedorContador,
  StyleContadorNumero,
  StyleContadorTexto
} from "../styles/StyleCuentaRegresiva"


const tiempoRestante = {
  segundos: '00',
  minutos: '00',
  horas: '00',
  dias: '00',
}

const CuentaRegresiva = ({ conteoTiempo }) => {
  const [tiempo, setTiempo] = useState(tiempoRestante)

  useEffect(() => {
    const intervalo = setInterval(() => {
      actualizarTiempo(conteoTiempo)
    }, 1000)

    return () => clearInterval(intervalo)
  }, [conteoTiempo])

  const actualizarTiempo = (temporizador) => {
    setTiempo(tiempoRestanteMs(temporizador))
  }

  return (
    <StyleContenedorContador>
      <div className="contador-dias">
        <StyleContadorNumero>
          {tiempo.dias}
        </StyleContadorNumero>
        <StyleContadorTexto>
          Días
        </StyleContadorTexto>
      </div>

      <div className="contador-horas">
        <StyleContadorNumero>
          {tiempo.horas}
        </StyleContadorNumero>
        <StyleContadorTexto>
          Horas
        </StyleContadorTexto>
      </div>

      <div className="contador-minutos">
        <StyleContadorNumero>
          {tiempo.minutos}
        </StyleContadorNumero>
        <StyleContadorTexto>
          Minutos
        </StyleContadorTexto>
      </div>

      <div className="contador-segundos">
        <StyleContadorNumero>
          {tiempo.segundos}
        </StyleContadorNumero>
        <StyleContadorTexto>
          Segundos
        </StyleContadorTexto>
      </div>
    </StyleContenedorContador>
  )
}

export default CuentaRegresiva
