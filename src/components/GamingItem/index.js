import {
  GamingVideoItem,
  GamingImage,
  GameName,
  StylingLink,
} from './styledComponents'
import AppTheme from '../../context/Theme'

const GamingItem = props => {
  const {gamingVideoDetails} = props
  const {thumbnailUrl, title, id, viewCount} = gamingVideoDetails
  return (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headColor = isDarkTheme ? '#ffffff' : '#1e293b'
        return (
          <StylingLink to={`/videos/${id}`}>
            <GamingVideoItem>
              <GamingImage src={thumbnailUrl} alt="video thumbnail" />
              <GameName color={headColor}>{title}</GameName>
              <GameName color="#475569">
                {viewCount} <br />
                Watching Worldwide
              </GameName>
            </GamingVideoItem>
          </StylingLink>
        )
      }}
    </AppTheme.Consumer>
  )
}

export default GamingItem
