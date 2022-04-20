// Styles
import styled from 'styled-components';

export const StyleHeader = styled.header`
  width: 100%;
  height: auto;
`
export const StyleTitulo = styled.h1`
  width: 85%;
  margin: 0 auto;
  font-size: 20px;
  letter-spacing: 5px;
  text-align: center;
  text-transform: uppercase;
  color: hsl(0, 0%, 100%);

  @media (min-width: 768px) {
    font-size: 24px;
    letter-spacing: 10px;
    margin-top: 10px;
    margin-bottom: 70px
  }
`
