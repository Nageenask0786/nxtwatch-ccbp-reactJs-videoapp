import styled from 'styled-components'

export const GamingRoute = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const GamingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`
export const GamingDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  width: 80%;
  min-height: 80vh;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`
export const SideBarDisplay = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    display: none;
  }
  width: 20vw;
`
export const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;

  width: 80vw;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
  justify-content: space-evenly;
`
export const GamingView = styled.div``
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
  align-items: center;
  justify-content: center;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.Color};
  font-weight: bold;
  font-size: 33px;
`
export const FailurePara = styled.p`
  font-family: 'Roboto';
  color: ${props => props.Color};
  font-weight: bold;
  font-size: 24px;
`
export const FailureImage = styled.img`
  height: 300px;
  width: 300px;
  @media screen and (max-width: 575px) {
    width: 70vw;
  }
`

export const RetryButton = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #4f46e5;
  height: 30px;
  width: 70px;
  border: 0px;
  border-radius: 4px;
`
