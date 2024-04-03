import {
  NoSavedVideosContainer,
  Head,
  NoParaa,
  NoSavedVideosImage,
} from './styledComponents'

const NoSavedVideos = () => (
  <NoSavedVideosContainer>
    <NoSavedVideosImage
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
      alt="no saved videos"
    />
    <Head>No saved videos found</Head>
    <NoParaa>Save your videos by clicking a button</NoParaa>
  </NoSavedVideosContainer>
)
export default NoSavedVideos
