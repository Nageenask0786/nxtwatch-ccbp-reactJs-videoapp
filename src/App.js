import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'

import Home from './components/HomeRoute'
import AppTheme from './context/Theme'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: JSON.parse(localStorage.getItem('savedVideosList')) || [],
    activeTab: 'Home',
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  removeVideo = id => {
    const {savedVideosList} = this.state
    const updatedSavedVideos = savedVideosList.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideosList: updatedSavedVideos})
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addSavedVideos = video => {
    const {savedVideosList} = this.state
    const index = savedVideosList.findIndex(
      eachVideo => eachVideo.id === video.id,
    )

    let updatedSavedVideos

    if (index === -1) {
      updatedSavedVideos = [...savedVideosList, video]
    } else {
      savedVideosList.splice(index, 1)
      updatedSavedVideos = [...savedVideosList]
    }

    this.setState({savedVideosList: updatedSavedVideos}, () => {
      localStorage.setItem(
        'savedVideosList',
        JSON.stringify(updatedSavedVideos),
      )
    })
  }

  render() {
    const {isDarkTheme, savedVideosList, activeTab} = this.state
    console.log(activeTab)
    console.log(savedVideosList)
    return (
      <AppTheme.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          addSavedVideos: this.addSavedVideos,
          savedVideosList,
          activeTab,
          changeTab: this.changeTab,
          removeVideo: this.removeVideo,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route exact path="/login" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppTheme.Provider>
    )
  }
}

export default App
