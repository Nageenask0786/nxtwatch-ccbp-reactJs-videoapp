import styled from 'styled-components'

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoItemMainContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoItemDetailsRoute = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  width: 80vw;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`

export const Player = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 40vh;

  @media screen and (min-width: 768px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 70vh;
  }
`
export const SideBarDisplay = styled.div`
  width: 20vw;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const VideoItemHeading = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.color};
  font-size: 18px;
  padding-left: 30px;
  margin-left: 20px;
  padding-top: 10px;

  @media screen and (max-width: 767px) {
    padding-left: 10px;
    margin-left: 10px;
  }
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: #64748b;
  font-size: 16px;
  padding-left: 30px;
  padding-bottom: 10px;
  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`
export const Time = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: #64748b;
  font-size: 16px;
`
export const Unordered = styled.ul`
  padding-top: 0px;
  color: #1e293b;
  margin-top: 0px;
`

export const List = styled.li`
  padding: 0px;
  margin: 0px;
  padding-bottom: 10px;
  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  padding: 0px;
`
export const Button = styled.button`
  border: 0px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  color: ${props => props.buttonColor};
  font-family : 'Roboto';
  font-size : 15px;
  margin-top : 5px;
    margin-left: 10px
  width: 70px;
  font-weight : bold;
`
export const ProfileImage = styled.img`
  height: 70px;
  width: 70px;
  margin-left: 20px;
  margin-right: 20px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
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
