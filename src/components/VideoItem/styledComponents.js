import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoItems = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  align-self: center;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-left: 5px;
    padding-left: 10px;
  }
  @media screen and (min-width: 1200px) {
    width: 280px;
    margin-left: 25px;
    padding-left: 20px;
    margin-right: 20px;
  }
`
export const LINK = styled(Link)`
  text-decoration: none;
`

export const Image = styled.img`
  width: 100%;
`

export const Title = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-bottom: 5px;
  font-size: 15px;
  margin-left: 10px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-top: 0px;
  font-size: 15px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 5px;
  margin-left: 10px;
`
export const List = styled.ul`
  display: flex;
  flex: row;
  color: ${props => props.color};
  margin-top: 0px;
`
export const Item = styled.li`
  list-style-type: disc;

  margin-left: 1px;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 35px;
  margin-top: 10px;
`
export const RowAlign = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`
