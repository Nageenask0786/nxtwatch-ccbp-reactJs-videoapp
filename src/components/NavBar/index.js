import {Component} from 'react'
import {Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'

import {AiOutlineMenu} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import MenuBar from '../MenuBar'

import AppTheme from '../../context/Theme'
import LogoutPopup from '../LogoutPopup'

import {
  NavBarContainer,
  Div,
  NavItems,
  WebsiteLogo,
  ThemeButton,
  Profile,
  LogoutButton,
  NavItemsSmall,
  PopupContainer,
  Menu,
} from './styledComponents'

class NavBar extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const changeTheme = () => {
            toggleTheme()
          }
          const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

          const ThemeIcon = isDarkTheme ? (
            <BiSun color="#ffffff" size={20} />
          ) : (
            <FaMoon color="#000000" size={20} />
          )
          const WebsiteLogoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <NavBarContainer bgColor={bgColor}>
              <NavItems>
                <Link to="/">
                  <WebsiteLogo src={WebsiteLogoUrl} alt="website logo" />
                </Link>

                <ThemeButton
                  type="button"
                  onClick={changeTheme}
                  data-testid="theme"
                >
                  {ThemeIcon}
                </ThemeButton>

                <Profile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <Popup modal trigger={<LogoutButton>Logout</LogoutButton>}>
                  {close => (
                    <>
                      <LogoutPopup eventHandler={() => close()} />
                    </>
                  )}
                </Popup>
              </NavItems>
              <NavItemsSmall>
                <Link to="/">
                  <WebsiteLogo src={WebsiteLogoUrl} alt="website logo" />
                </Link>
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={changeTheme}
                >
                  {ThemeIcon}
                </ThemeButton>

                <Menu>
                  <Popup
                    modal
                    trigger={
                      <ThemeButton type="button">
                        <AiOutlineMenu size={20} />
                      </ThemeButton>
                    }
                  >
                    {close => (
                      <>
                        <PopupContainer>
                          <MenuBar handler={() => close()} />
                        </PopupContainer>
                      </>
                    )}
                  </Popup>
                </Menu>

                <Popup
                  modal
                  trigger={
                    <Div>
                      <FiLogOut size={20} />
                    </Div>
                  }
                >
                  {close => <LogoutPopup eventHandler={() => close()} />}
                </Popup>
              </NavItemsSmall>
            </NavBarContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default NavBar
