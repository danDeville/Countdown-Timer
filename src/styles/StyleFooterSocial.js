// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Styles
import styled from 'styled-components'

export const StyleFooterSocial = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
`

export const StyleContenedorIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 36%;
  font-size: 30px;
  color: hsl(237, 18%, 59%);

  @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 1440px) {
    width: 15%;
  }
`

export const StyleIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: hsl(345, 95%, 68%);
    transition: all 0.2s ease-in-out;
  }
`
