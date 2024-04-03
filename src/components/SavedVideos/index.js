import {Component} from 'react'
import AppTheme from '../../context/Theme'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import NoSavedVideos from '../NoSavedVideos'
import SavedVideosItem from '../SavedVideosItem'
import {
  Savedvideos,
  SavedVideosDetails,
  SideBarDisplay,
  List,
  SavedVideosView,
} from './styledComponents'

class SavedVideos extends Component {
  renderSavedVideosView = () => (
    <AppTheme.Consumer>
      {value => {
        const {savedVideosList} = value
        const videos = localStorage.getItem('savedVideosList')
        console.log(videos)
        return (
          <SavedVideosView>
            <h1>Saved Videos</h1>
            {savedVideosList.length > 0 ? (
              <List>
                {savedVideosList.map(each => (
                  <SavedVideosItem savedVideoDetails={each} key={each.id} />
                ))}
              </List>
            ) : (
              <NoSavedVideos />
            )}
          </SavedVideosView>
        )
      }}
    </AppTheme.Consumer>
  )

  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <NavBar />
              <Savedvideos>
                <SideBarDisplay>
                  <SideBar />
                </SideBarDisplay>

                <SavedVideosDetails data-testid="savedVideos" bgColor={bgColor}>
                  {this.renderSavedVideosView()}
                </SavedVideosDetails>
              </Savedvideos>
            </>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default SavedVideos
