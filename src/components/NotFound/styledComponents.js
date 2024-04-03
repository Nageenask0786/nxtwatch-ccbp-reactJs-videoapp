import styled from 'styled-components'

export const NotFoundRouteContainer = styled.div`
  display: flex;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    display: none;
  }
  width: 20vw;
`
export const NotFoundRoute = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.Color};
  font-weight: bold;
  font-size: 33px;
`
export const NotFoundPara = styled.p`
  font-family: 'Roboto';
  color: ${props => props.Color};
  font-weight: bold;
  font-size: 24px;
`
export const NotFoundImage = styled.img`
  height: 300px;
  width: 300px;
`
