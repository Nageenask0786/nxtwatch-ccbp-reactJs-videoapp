import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import {AiFillHome} from 'react-icons/ai'

import {
  SideBarContainer,
  MenuItemContainer,
  MenuItem,
  ItemContainer,
  ContactHeading,
  FooterImagesContainer,
  Image,
  Footer,
  FooterDescription,
  NavText,
} from './styledComponents'

import AppTheme from '../../context/Theme'

const SideBar = () => (
  <AppTheme.Consumer>
    {value => {
      const {isDarkTheme, changeTab, activeTab} = value
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

      const activeBgColor = isDarkTheme ? '#212121' : '#cbd5e1'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const Color = isDarkTheme ? '#f9f9f9' : '#1e293b'

      const changeTabToHome = () => {
        changeTab('Home')
      }
      const changeTabToTrending = () => {
        changeTab('Trending')
      }
      const changeTabToGaming = () => {
        changeTab('Gaming')
      }
      const changeTabToSavedVideos = () => {
        changeTab('SavedVideos')
      }

      return (
        <SideBarContainer bgColor={bgColor} Color={bgColor}>
          <MenuItemContainer>
            <MenuItem
              onClick={changeTabToHome}
              bgColor={activeTab === 'Home' ? activeBgColor : 'none'}
            >
              <ItemContainer to="/">
                <AiFillHome
                  color={activeTab === 'Home' ? '#ff0000' : '#606060'}
                  size={20}
                />
                <NavText Color={textColor}>Home</NavText>
              </ItemContainer>
            </MenuItem>
            <MenuItem
              onClick={changeTabToTrending}
              bgColor={activeTab === 'Trending' ? activeBgColor : 'none'}
            >
              <ItemContainer to="/trending">
                <HiFire
                  color={activeTab === 'Trending' ? '#ff0000' : '#606060'}
                  size={20}
                />
                <NavText Color={textColor}>Trending</NavText>
              </ItemContainer>
            </MenuItem>
            <MenuItem
              onClick={changeTabToGaming}
              bgColor={activeTab === 'Gaming' ? activeBgColor : 'none'}
            >
              <ItemContainer to="/gaming">
                <SiYoutubegaming
                  color={activeTab === 'Gaming' ? '#ff0000' : '#606060'}
                  size={20}
                />
                <NavText Color={textColor}>Gaming</NavText>
              </ItemContainer>
            </MenuItem>
            <MenuItem
              onClick={changeTabToSavedVideos}
              bgColor={activeTab === 'SavedVideos' ? activeBgColor : 'none'}
            >
              <ItemContainer to="/saved-videos">
                <RiMenuAddFill
                  color={activeTab === 'SavedVideos' ? '#ff0000' : '#606060'}
                  size={20}
                />
                <NavText Color={textColor}>Saved Videos</NavText>
              </ItemContainer>
            </MenuItem>
          </MenuItemContainer>
          <Footer>
            <ContactHeading color={Color}>CONTACT US</ContactHeading>
            <FooterImagesContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </FooterImagesContainer>
            <FooterDescription color={Color}>
              Enjoy! Now to see your channels and recommendations!
            </FooterDescription>
          </Footer>
        </SideBarContainer>
      )
    }}
  </AppTheme.Consumer>
)

export default SideBar
