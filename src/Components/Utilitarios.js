// Import Librería
import dayjs from "dayjs"

const tiempoRestanteMs = (tiempoRestante) => {
  const tiempoRestanteDia = dayjs(tiempoRestante)
  const ahoraMismo = dayjs()

  if(tiempoRestanteDia.isBefore(ahoraMismo)) {
    return {
      segundos: '00',
      minutos: '00',
      horas: '00',
      dias: '00',
    }
  }

  return {
    segundos: tiempoRestanteSegundos(ahoraMismo, tiempoRestanteDia),
    minutos: tiempoRestanteMinutos(ahoraMismo, tiempoRestanteDia),
    horas: tiempoRestanteHoras(ahoraMismo, tiempoRestanteDia),
    dias: tiempoRestanteDias(ahoraMismo, tiempoRestanteDia)
  }
}

const tiempoRestanteSegundos = (ahoraMismo, tiempoRestanteDia) => {
  const segundos = tiempoRestanteDia.diff(ahoraMismo, 'seconds') % 60
  return marcadorCeros(segundos, 2)
}

const tiempoRestanteMinutos = (ahoraMismo, tiempoRestanteDia) => {
  const minutos = tiempoRestanteDia.diff(ahoraMismo, 'minutes') % 60
  return marcadorCeros(minutos, 2)
}
const tiempoRestanteHoras = (ahoraMismo, tiempoRestanteDia) => {
  const horas = tiempoRestanteDia.diff(ahoraMismo, 'hours') % 24
  return marcadorCeros(horas, 2)
}
const tiempoRestanteDias = (ahoraMismo, tiempoRestanteDia) => {
  const dias = tiempoRestanteDia.diff(ahoraMismo, 'days')
  return dias.toString()
}

const marcadorCeros = (numero, contador) => {
  const convertirString = numero.toString()
  if(convertirString.length >= contador) {
    return convertirString
  }

  return "0".repeat(contador - convertirString.length) + convertirString
}

export default tiempoRestanteMs
