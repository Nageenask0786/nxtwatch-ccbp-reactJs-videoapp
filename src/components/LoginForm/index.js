import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import AppTheme from '../../context/Theme'
import {
  LoginRoute,
  LoginFormContainer,
  Logo,
  Form,
  InputField,
  LabelElement,
  InputElement,
  CheckboxInput,
  CheckboxLabel,
  ErrorMsg,
  LoginButton,
  TogglePasswordContainer,
  LogoContainer,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const UserDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(UserDetails)}
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  togglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const labelColor = isDarkTheme ? '#ffffff' : '#475569'
          const background = isDarkTheme ? 'transparent' : '#f1f5f9'
          return (
            <InputField>
              <LabelElement htmlFor="username" color={labelColor}>
                USERNAME
              </LabelElement>
              <InputElement
                type="text"
                id="username"
                onChange={this.onChangeUserInput}
                value={username}
                placeholder="Username"
                background={background}
              />
            </InputField>
          )
        }}
      </AppTheme.Consumer>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const Type = showPassword ? 'text' : 'password'

    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const labelColor = isDarkTheme ? '#ffffff' : '#475569'
          const background = isDarkTheme ? 'transparent' : '#f1f5f9'
          return (
            <InputField>
              <LabelElement htmlFor="password" color={labelColor}>
                PASSWORD
              </LabelElement>
              <InputElement
                background={background}
                type={Type}
                id="password"
                onChange={this.onChangePassword}
                value={password}
                placeholder="Password"
              />
            </InputField>
          )
        }}
      </AppTheme.Consumer>
    )
  }

  renderTogglePasswords = () => (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const labelColor = isDarkTheme ? '#ffffff' : '#475569'
        return (
          <TogglePasswordContainer>
            <CheckboxInput
              type="checkbox"
              id="checkbox"
              onClick={this.togglePassword}
            />
            <CheckboxLabel htmlFor="checkbox" color={labelColor}>
              Show Password
            </CheckboxLabel>
          </TogglePasswordContainer>
        )
      }}
    </AppTheme.Consumer>
  )

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#000000' : '#ffffff'
          const imageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginRoute bgColor={bgColor}>
              <LoginFormContainer>
                <LogoContainer>
                  <Logo src={imageUrl} alt="website logo" />
                </LogoContainer>
                <Form onSubmit={this.submitForm}>
                  {this.renderUsernameField()}
                  {this.renderPasswordField()}
                  {this.renderTogglePasswords()}
                  <LoginButton type="submit">Login</LoginButton>
                </Form>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </LoginRoute>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default LoginForm
