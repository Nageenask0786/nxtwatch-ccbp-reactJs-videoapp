import {formatDistanceToNow} from 'date-fns'
import AppTheme from '../../context/Theme'
import {
  SavedVideoItem,
  SavedThumbnailImage,
  VideoTitle,
  SavedVideoDetail,
  Name,
  Div,
  Ul,
  Li,
  LinkItem,
  VideoRowAlign,
  SavedProfileImage,
  VideoRowAlign2,
} from './styledComponents'

const SavedVideosItem = props => {
  const {savedVideoDetails} = props
  const {
    thumbnailUrl,
    id,
    title,
    channel,
    viewCount,
    publishedAt,
  } = savedVideoDetails
  const getFormattedDate = () => {
    if (publishedAt !== undefined) {
      const replacedString = publishedAt.replace(',', '')
      const formattedString = replacedString.split(' ')
      const year = formattedString[2]
      const month = formattedString[1]
      const day = formattedString[0]
      const parsedDate = Date.parse(`${year} ${month} ${day}`)
      const date = formatDistanceToNow(new Date(parsedDate))
      console.log(date)
      return date
    }
    return ''
  }
  const Time = getFormattedDate()
  return (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleColor = isDarkTheme ? '#ffffff' : '#1e293b'

        return (
          <LinkItem to={`/videos/${id}`}>
            <SavedVideoItem>
              <SavedThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoRowAlign2>
                <SavedProfileImage src={channel.profileImageUrl} />
                <SavedVideoDetail>
                  <VideoTitle color={titleColor}>{title}</VideoTitle>
                  <VideoRowAlign>
                    <Name color="#475569">{channel.name}</Name>
                    <Div>
                      <Name color="#475569">{viewCount} views</Name>
                      <Ul>
                        <Li>
                          <Name color="#475569">{Time}</Name>
                        </Li>
                      </Ul>
                    </Div>
                  </VideoRowAlign>
                </SavedVideoDetail>
              </VideoRowAlign2>
            </SavedVideoItem>
          </LinkItem>
        )
      }}
    </AppTheme.Consumer>
  )
}

export default SavedVideosItem
