import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import AppTheme from '../../context/Theme'
import {
  LogoutContainer,
  CancelButton,
  ConfirmButton,
  ButtonAlignment,
} from './styledComponents'

class LogoutPopup extends Component {
  onClickOfConfirm = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {eventHandler} = this.props
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const backgroundColor = isDarkTheme ? '#383838' : '#ffffff'

          return (
            <LogoutContainer background={backgroundColor}>
              <p>Are you sure, you want to logout</p>
              <ButtonAlignment>
                <CancelButton onClick={eventHandler}>Cancel</CancelButton>
                <ConfirmButton onClick={this.onClickOfConfirm}>
                  Confirm
                </ConfirmButton>
              </ButtonAlignment>
            </LogoutContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default withRouter(LogoutPopup)
