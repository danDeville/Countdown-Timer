// Styles
import styled from 'styled-components'

export const StyleContenedorContador = styled.aside`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  margin-top: 50px;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1440px) {
    width: 45%;
  }
`

export const StyleContadorNumero = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  color: hsl(345, 95%, 68%);
  background: linear-gradient(180deg,#2c2c44 50%,#34364f 0);
  border-radius: 5px;
  font-size: 30px;
  font-weight: 700;
  overflow: hidden;

  &::before, &::after {
    content: '';
    z-index: 2;
    position: absolute;
    top: calc(50% - 5px);
    background: hsl(240, 12%, 16%);
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &::before {
    left: -5px;
  }

  &::after {
    right: -5px;
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 50px;
  }

  @media (min-width: 1440px) {
    width: 150px;
    height: 150px;
    font-size: 80px;
  }
`

export const StyleContadorTexto = styled.p`
  margin: 0;
  color: hsl(237, 18%, 59%);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-top: 20px
  }
`
