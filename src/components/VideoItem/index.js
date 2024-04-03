import AppTheme from '../../context/Theme'
import {
  VideoItems,
  Image,
  Title,
  Para,
  List,
  Item,
  LINK,
  ProfileImage,
  RowAlign,
} from './styledComponents'

const VideoItem = props => {
  const {videoItemDetails} = props
  const {
    viewsCount,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    id,
  } = videoItemDetails
  const {name, profileImageUrl} = channel
  return (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleColor = isDarkTheme ? '#ffffff' : '#475569'
        const paraColor = isDarkTheme ? '#ffffff' : '#475569'
        const listColor = isDarkTheme ? '#ffffff' : '#475569'
        return (
          <LINK to={`/videos/${id}`}>
            <VideoItems>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <RowAlign>
                <ProfileImage src={profileImageUrl} />
                <div>
                  <Title color={titleColor}>{title}</Title>

                  <Para color={paraColor}>{name}</Para>
                  <RowAlign>
                    <Para color={paraColor}>{viewsCount} views</Para>
                    <List color={listColor}>
                      <Item>
                        <Para color={paraColor}>{publishedAt}</Para>
                      </Item>
                    </List>
                  </RowAlign>
                </div>
              </RowAlign>
            </VideoItems>
          </LINK>
        )
      }}
    </AppTheme.Consumer>
  )
}

export default VideoItem
