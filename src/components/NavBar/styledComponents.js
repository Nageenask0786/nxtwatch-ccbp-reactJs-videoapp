import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  background-color: ${props => props.bgColor};
  justify-content: center;
  height: 15vh;
  width: 100vw;
  align-items: center;
`

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const WebsiteLogo = styled.img`
  width: 150px;
  padding-left: 10px;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    width: 80px;
  }
`
export const Div = styled.div`
  width: 100vw;
  height: 100vh;
`
export const ThemeButton = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
`
export const Profile = styled.img`
  height: 36px;
  width: 38px;
`
export const LogoutButton = styled.button`
  height: 30px;
  width: 80px;
  border-radius: 6px;
  border-style: solid;
  border-width: 3px;
  border-color: #4f46e5;
  color: #4f46e5;
  font-weight: bold;
`
export const NavItemsSmall = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
