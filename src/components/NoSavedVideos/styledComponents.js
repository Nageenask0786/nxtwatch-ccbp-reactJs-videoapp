import styled from 'styled-components'

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`
export const Head = styled.h1`
  font-size: 35px;
  font-family: 'Roboto';
  color: #000000;
  font-weight: bold;
  margin: 15px;
`

export const NoParaa = styled.p`
  font-size: 23px;
  font-family: 'Roboto';
  color: #383838;
  margin: 20px;
`
export const NoSavedVideosImage = styled.img`
  height: 300px;
  width: 300px;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    width: 70vw;
  }
`
