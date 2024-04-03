import NavBar from '../NavBar'
import AppTheme from '../../context/Theme'
import SideBar from '../SideBar'
import {
  NotFoundRouteContainer,
  Container,
  NotFoundRoute,
  NotFoundHeading,
  NotFoundPara,
  NotFoundImage,
} from './styledComponents'

const NotFound = () => (
  <>
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const headingColor = isDarkTheme ? '#ffffff' : '#1e293b'
        const paraColor = isDarkTheme ? '#ffffff' : '#475569'
        const Url = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        return (
          <>
            <NavBar />
            <NotFoundRouteContainer>
              <Container>
                <SideBar />
              </Container>
              <NotFoundRoute bgColor={bgColor}>
                <NotFoundImage src={Url} alt="not found" />
                <NotFoundHeading Color={headingColor}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundPara Color={paraColor}>
                  we are sorry, the page you requested could not be found.
                </NotFoundPara>
              </NotFoundRoute>
            </NotFoundRouteContainer>
          </>
        )
      }}
    </AppTheme.Consumer>
  </>
)

export default NotFound
