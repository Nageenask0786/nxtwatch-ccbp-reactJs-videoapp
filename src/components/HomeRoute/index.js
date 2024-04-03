import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BiSearch} from 'react-icons/bi'
import NavBar from '../NavBar'
import AppTheme from '../../context/Theme'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'

import {
  HomeRouteContainer,
  Container,
  HomeContainer,
  HomeRoute,
  SearchContainer,
  InputElement,
  SearchIcon,
  NoSearchPara,
  NoSearchResultsHeading,
  NoSearchResultsView,
  NoResultsImage,
  VideoList,
  RetryButton,
} from './styledComponents'
import SideBar from '../SideBar'
import Banner from '../Banner'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {search: '', apiStatus: apiStatusConstants.initial, videosData: []}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {search} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const formattedData = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewsCount: each.view_count,
        title: each.title,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))
      console.log(formattedData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosData: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value}, this.getVideos)
  }

  onClickEnter = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  onClickSearchButton = () => {
    this.getVideos()
  }

  onClickRetry = () => {
    this.getVideos()
  }

  renderNoSearchResultsView = () => (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const HeadColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const ParaColor = isDarkTheme ? '#4f46e5' : '#475569'
        console.log(isDarkTheme)
        return (
          <NoSearchResultsView>
            <NoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchResultsHeading Color={HeadColor}>
              No Search results found
            </NoSearchResultsHeading>
            <NoSearchPara Color={ParaColor}>
              Try different key words or remove search filter
            </NoSearchPara>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </NoSearchResultsView>
        )
      }}
    </AppTheme.Consumer>
  )

  renderHomeLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="black" height="50" width="50" />
    </div>
  )

  renderVideosSuccessView = () => {
    const {videosData} = this.state
    return (
      <>
        {videosData.length > 0 ? (
          <VideoList>
            {videosData.map(each => (
              <VideoItem videoItemDetails={each} key={each.id} />
            ))}
          </VideoList>
        ) : (
          this.renderNoSearchResultsView()
        )}
      </>
    )
  }

  renderHomeFailureView = () => <FailureView onRetry={this.onClickRetry} />

  renderHomeFinalOutput = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderHomeLoader()
      case apiStatusConstants.failure:
        return this.renderHomeFailureView()
      default:
        return null
    }
  }

  render() {
    const {search} = this.state
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const IconBackGround = isDarkTheme ? '#313131' : 'transparent'
          return (
            <>
              <NavBar />
              <HomeRouteContainer>
                <Container>
                  <SideBar />
                </Container>
                <HomeContainer bgColor={bgColor} data-testid="home">
                  <Banner />
                  <HomeRoute>
                    <SearchContainer>
                      <InputElement
                        type="search"
                        value={search}
                        onChange={this.onChangeSearch}
                        onKeyDown={this.onClickEnter}
                        placeholder="Search"
                      />
                      <SearchIcon
                        type="button"
                        onClick={this.onClickSearchButton}
                        data-testid="searchButton"
                        btnBgColor={IconBackGround}
                      >
                        <BiSearch color="#606060" size={20} />
                      </SearchIcon>
                    </SearchContainer>
                    <>{this.renderHomeFinalOutput()}</>
                  </HomeRoute>
                </HomeContainer>
              </HomeRouteContainer>
            </>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Home
