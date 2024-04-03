import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  flex-grow: 1;

  border-color: ${props => props.Color};
  border-width: 4px;
  background-color: ${props => props.bgColor};
  width: 20vw;
`
export const MenuItemContainer = styled.ul`
  display: flex;
  flex-direction: column;

  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`
export const ItemContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  padding-left: 10px;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: ${props => props.bgColor};
  margin: 0px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 1000;
  font-size: 20px;
  padding-left: 30px;
`
export const FooterImagesContainer = styled.div`
  display: flex;
  padding-left: 30px;
`

export const Image = styled.img`
  height: 40px;
  widows: 30px;
  margin-right: 10px;
`
export const FooterDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 1000;
  font-size: 16px;
  padding-left: 30px;
  margin-left: 10px;
`
export const NavText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.Color};
  font-weight: bold;
  font-size: 19px;
  margin-left: 20px;
`
