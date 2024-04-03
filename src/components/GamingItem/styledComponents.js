import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingVideoItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
`
export const GamingImage = styled.img`
  height: 300px;
  width: 240px;
  @media screen and (max-width: 575px) {
    height: 170px;
    width: 140px;
  }
`
export const GameName = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
  @media screen and (max-width: 767px) {
    width: 40vw;
    font-size: 13px;
  }
  margin-top: 5px;
  margin-bottom: 6px;
`
export const StylingLink = styled(Link)`
  text-decoration: none;
`
