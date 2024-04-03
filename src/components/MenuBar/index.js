import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import {AiFillHome} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import AppTheme from '../../context/Theme'

import {
  MenuItemContainer,
  MenuItem,
  ItemContainer,
  NavText,
  Close,
  Align,
} from './styledComponents'

const MenuBar = props => {
  const {handler} = props
  return (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme, changeTab, activeTab} = value

        const activeBgColor = isDarkTheme ? '#212121' : '#cbd5e1'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

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
          <>
            <Align>
              <Close onClick={handler}>
                <GrFormClose size={20} />
              </Close>
            </Align>
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
          </>
        )
      }}
    </AppTheme.Consumer>
  )
}

export default MenuBar
