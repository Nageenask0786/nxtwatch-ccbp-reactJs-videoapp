import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import AppTheme from '../../context/Theme'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem'
import FailureView from '../FailureView'
import {
  Trendingvideos,
  TrendingVideosDetails,
  SideBarDisplay,
  Ul,
  TrendingVideosView,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Trending extends Component {
  state = {
    trendingVideosList: [],
    trendingRouteApiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({trendingRouteApiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const formattedData = data.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
          subscriberCount: each.channel.subscriber_count,
        },
        thumbnailUrl: each.thumbnail_url,
        publishedAt: each.published_at,
        title: each.title,
        viewCount: each.view_count,
        id: each.id,
      }))
      console.log(formattedData)
      this.setState({
        trendingVideosList: formattedData,
        trendingRouteApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({trendingRouteApiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryButton = () => {
    this.getTrendingVideos()
  }

  renderTrendingFailureView = () => (
    <FailureView onRetry={this.onClickRetryButton} />
  )

  renderTrendingLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFinalOutput = () => {
    const {trendingRouteApiStatus} = this.state
    switch (trendingRouteApiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosView()
      case apiStatusConstants.inProgress:
        return this.renderTrendingLoader()
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()
      default:
        return null
    }
  }

  renderTrendingVideosView = () => {
    const {trendingVideosList} = this.state
    return (
      <TrendingVideosView>
        <h1>Trending</h1>
        <Ul>
          {trendingVideosList.map(each => (
            <TrendingVideoItem TrendingVideoDetails={each} key={each.id} />
          ))}
        </Ul>
      </TrendingVideosView>
    )
  }

  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <NavBar />
              <Trendingvideos>
                <SideBarDisplay>
                  <SideBar />
                </SideBarDisplay>

                <TrendingVideosDetails
                  data-testid="trendingVideos"
                  bgColor={bgColor}
                >
                  {this.renderTrendingVideosView()}
                </TrendingVideosDetails>
              </Trendingvideos>
            </>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Trending
