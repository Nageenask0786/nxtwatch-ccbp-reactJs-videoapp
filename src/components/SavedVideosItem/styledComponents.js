import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SavedVideoItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  align-self: center;
  background-color: transparent;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`
export const TrendingImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SavedVideoDetail = styled.div`
  width: 50%;
  margin-left: 30px;
  @media screen and (max-width: 575px) {
    width: 100%;
    margin-left: 0px;
  }
`
export const SavedProfileImage = styled.img`
  height: 30px;
  width: 35px;
  margin-top: 10px;
  margin-left: 10px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoRowAlign2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`

export const SavedThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-bottom: 5px;
  font-size: 21px;
  margin-left: 10px;
  font-weight: 1000;
  @media screen and (max-width: 575px) {
    padding: 10px;
    font-size: 14px;
  }
`
export const Name = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-bottom: 5px;
  font-size: 15px;
  margin-left: 10px;
  margin-top: 0px;
  padding-top: 3px;
`
export const Div = styled.div`
  display: flex;
  flex-direction: row;
`
export const Ul = styled.ul`
  padding-top: 0px;
  color: #7e858e;
  margin-top: 0px;
`
export const Li = styled.li`
  list-style-type: disc;
  margin-top: 0px;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const VideoRowAlign = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
