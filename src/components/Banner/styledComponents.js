import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 40vh;
  flex-direction: column;
  width: 100vw;
  @media screen and (max-width: 767px) {
    height: 220px;
  }
`
export const Align = styled.div`
  text-align: right;
`

export const Logo = styled.img`
  height: 30px;
  margin-left: 40px;
  width: 80px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
  height: 30px;
  width: 50px;
  padding-top: 30px;
  margin-right: 30px;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 20px;
  padding-left: 30px;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
  font-weight: bold;
`
export const GetStartedButton = styled.button`
  background-color: transparent;
  border: 1px solid #231f20;
  outline: none;
  cursor: pointer;
  height: 50px;
  width: 120px;
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: bold;
  font-size: 15px;
  margin-left: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    height: 30px;
    width: 90px;
    font-size: 10px;
  }
`
