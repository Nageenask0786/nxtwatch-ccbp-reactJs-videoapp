import styled from 'styled-components'

export const SavedVideosRoute = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`
export const Savedvideos = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`
export const SavedVideosDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  width: 80vw;
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
export const List = styled.ul`
  display: flex;
  flex-direction: column;
`
export const SavedVideosView = styled.div``
