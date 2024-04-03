import {formatDistanceToNow} from 'date-fns'
import AppTheme from '../../context/Theme'
import {
  TrendingVideoItem,
  TrendingThumbnailImage,
  TrendingTitle,
  TrendingDetails,
  TrendingName,
  Div,
  Ul,
  Li,
  LinkItem,
  TrendingRowAlign,
  TrendingProfileImage,
  RowAlign2,
} from './styledComponents'

const TrendingVideosItem = props => {
  const {TrendingVideoDetails} = props
  const {
    thumbnailUrl,
    id,
    title,
    channel,
    viewCount,
    publishedAt,
  } = TrendingVideoDetails
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
            <TrendingVideoItem>
              <TrendingThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <RowAlign2>
                <TrendingProfileImage src={channel.profileImageUrl} />
                <TrendingDetails>
                  <TrendingTitle color={titleColor}>{title}</TrendingTitle>
                  <TrendingRowAlign>
                    <TrendingName color="#475569">{channel.name}</TrendingName>
                    <Div>
                      <TrendingName color="#475569">
                        {viewCount} views
                      </TrendingName>
                      <Ul>
                        <Li>
                          <TrendingName color="#475569">{Time}</TrendingName>
                        </Li>
                      </Ul>
                    </Div>
                  </TrendingRowAlign>
                </TrendingDetails>
              </RowAlign2>
            </TrendingVideoItem>
          </LinkItem>
        )
      }}
    </AppTheme.Consumer>
  )
}

export default TrendingVideosItem
