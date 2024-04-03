import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import AppTheme from '../../context/Theme'
import FailureView from '../FailureView'

import {
  VideoItemDetailsRoute,
  VideoItemMainContainer,
  VideoDetails,
  Player,
  VideoItemHeading,
  SideBarDisplay,
  Para,
  Flex,
  List,
  Unordered,
  Time,
  Button,
  ProfileImage,
  Container,
} from './styledComponents'
import SideBar from '../SideBar'
import NavBar from '../NavBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetails: {},
    clickLike: false,
    clickDisLike: false,
    clickSave: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const Data = data.video_details
      const updatedData = {
        videoUrl: Data.video_url,
        description: Data.description,
        id: Data.id,
        publishedAt: Data.published_at,
        thumbnailUrl: Data.thumbnail_url,
        title: Data.title,
        channel: {
          name: Data.channel.name,
          profileImage: Data.channel.profile_image_url,
          subscriberCount: Data.channel.subscriber_count,
        },
        viewCount: Data.view_count,
      }
      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickOfLikeButton = () => {
    this.setState(prevState => ({
      clickLike: !prevState.clickLike,
      clickDisLike: false,
    }))
  }

  onClickOfDisLikeButton = () => {
    this.setState(prevState => ({
      clickDisLike: !prevState.clickDisLike,
      clickLike: false,
    }))
  }

  onClickOfRetryButton = () => {
    this.getVideoItemDetails()
  }

  onClickSaveButton = () => {
    this.setState(prevState => ({clickSave: !prevState.clickSave}))
  }

  getFormattedDate = () => {
    const {videoItemDetails} = this.state
    const {publishedAt} = videoItemDetails
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

  renderSuccessView = () => {
    const {videoItemDetails, clickLike, clickDisLike} = this.state
    const {title, viewCount, channel, description, videoUrl} = videoItemDetails
    const channelDefined = channel !== undefined
    const publishedDate = this.getFormattedDate()
    const likeColor = clickLike ? '#2563eb' : '#64748b'
    const dislikeColor = clickDisLike ? '#2563eb' : '#64748b'
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme, addSavedVideos, savedVideosList} = value
          const onClickOfSave = () => {
            addSavedVideos(videoItemDetails)
          }
          const color = isDarkTheme ? '#ffffff' : '#1e293b'
          let isSaved
          const index = savedVideosList.findIndex(
            eachVideo => eachVideo.id === videoItemDetails.id,
          )
          if (index === -1) {
            isSaved = false
          } else {
            isSaved = true
          }

          const btnText = isSaved ? 'Saved' : 'Save'

          const saveIconColor = isSaved ? '#2563eb' : '#64748b'

          return (
            <>
              <Player>
                <ReactPlayer url={`${videoUrl}`} width="100%" height="100%" />
              </Player>
              <VideoItemHeading color={color}>{title}</VideoItemHeading>
              <Flex>
                <Para>{viewCount} views</Para>
                <Unordered>
                  <List>
                    <Time>{publishedDate}</Time>
                  </List>
                </Unordered>
              </Flex>
              <Flex>
                <Button
                  type="button"
                  onClick={this.onClickOfLikeButton}
                  buttonColor={likeColor}
                >
                  Like <BiLike height="40px" />
                </Button>
                <Button
                  type="button"
                  onClick={this.onClickOfDisLikeButton}
                  buttonColor={dislikeColor}
                >
                  Dislike <BiDislike />
                </Button>
                <Button
                  type="button"
                  onClick={onClickOfSave}
                  buttonColor={saveIconColor}
                >
                  {btnText} <RiMenuAddFill />
                </Button>
              </Flex>
              {channelDefined && (
                <Flex>
                  <ProfileImage src={channel.profileImage} alt="channel logo" />
                  <Container>
                    <Para>{channel.name}</Para>
                    <Para>{channel.subscriberCount}</Para>
                  </Container>
                </Flex>
              )}
              <Para>{description}</Para>
            </>
          )
        }}
      </AppTheme.Consumer>
    )
  }

  renderVideoItemFailureView = () => (
    <FailureView onRetry={this.onClickOfRetryButton} />
  )

  renderVideoLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideoItemFinalOutput = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderVideoLoader()
      case apiStatusConstants.failure:
        return this.renderVideoItemFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <VideoDetails>
              <NavBar />
              <VideoItemMainContainer>
                <SideBarDisplay>
                  <SideBar />
                </SideBarDisplay>
                <VideoItemDetailsRoute
                  data-testid="videoItemDetails"
                  bgColor={bgColor}
                >
                  {this.renderVideoItemFinalOutput()}
                </VideoItemDetailsRoute>
              </VideoItemMainContainer>
            </VideoDetails>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default VideoItemDetails
