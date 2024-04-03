import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import AppTheme from '../../context/Theme'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import GamingItem from '../GamingItem'
import FailureView from '../FailureView'
import {
  GamingDetails,
  SideBarDisplay,
  GamingContainer,
  Ul,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingData: [], GamingStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingDetails()
  }

  getGamingDetails = async () => {
    this.setState({GamingStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.videos.map(each => ({
        thumbnailUrl: each.thumbnail_url,
        id: each.id,
        title: each.title,
        viewCount: each.view_count,
      }))
      console.log(formattedData)
      this.setState({
        gamingData: formattedData,
        GamingStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({GamingStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingData} = this.state
    return (
      <>
        <h1>Gaming</h1>
        <Ul>
          {gamingData.map(each => (
            <GamingItem gamingVideoDetails={each} key={each.id} />
          ))}
        </Ul>
      </>
    )
  }

  onClickRetryGaming = () => {
    this.getGamingDetails()
  }

  renderGamingLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderGamingFailureView = () => (
    <FailureView onRetry={this.onClickRetryGaming} />
  )

  renderGamingFinalOutput = () => {
    const {GamingStatus} = this.state
    switch (GamingStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderGamingLoader()
      case apiStatusConstants.failure:
        return this.renderGamingFailureView()
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
            <>
              <NavBar />
              <GamingContainer>
                <SideBarDisplay>
                  <SideBar />
                </SideBarDisplay>

                <GamingDetails data-testid="gaming" bgColor={bgColor}>
                  {this.renderGamingFinalOutput()}
                </GamingDetails>
              </GamingContainer>
            </>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Gaming
