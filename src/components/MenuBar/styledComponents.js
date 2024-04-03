import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
export const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: ${props => props.bgColor};
  margin: 0px;
`
export const NavText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.Color};
  font-weight: bold;
  font-size: 19px;
  margin-left: 20px;
`
export const Align = styled.div`
  text-align: right;
`

export const Close = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
  height: 30px;
  width: 50px;
  padding-top: 30px;
  margin-right: 30px;
  @media screen and (max-width: 767px) {
    padding-top: 10px;
    margin-right: 10px;
  }
`
