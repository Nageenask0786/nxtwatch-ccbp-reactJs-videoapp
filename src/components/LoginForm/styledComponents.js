import styled from 'styled-components'

export const LoginRoute = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.bgColor};
`
export const LoginFormContainer = styled.div`
  box-shadow: 8px 0px 8px 8px #f1f5f9;
  border-radius: 6px;
  margin-right: 15px;
`
export const Logo = styled.img`
  height: 40px;
  width: 100px;
  margin-top: 10px;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const InputField = styled.div`
  display: flex;
  flex-direction: column;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: bold;
  margin-left: 80px;
  margin-bottom: 5px;
  @media screen and (max-width: 767px) {
    margin-left: 10px;
    margin-top: 10px;
  }
`
export const InputElement = styled.input`
  height: 40px;
  width: 350px;
  background-color: ${props => props.background};
  outline: none;
  cursor: pointer;
  border-style: solid;
  border-color: #e2e8f0;
  border-width: 2px;
  font-family: 'Roboto';
  color: #475569;
  border-radius: 5px;
  margin-right: 15px;
  margin-left: 80px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 200px;
    margin-left: 10px;
  }
`
export const CheckboxInput = styled.input`
  font-family: 'Roboto';
  color: #475569;
  font-weight: bold;
  margin-left: 80px;
  margin-bottom: 5px;
  height: 25px;
  outline: none;
  cursor: pointer;
  border-style: solid;
  border-color: #e2e8f0;
  border-width: 2px;
  @media screen and (max-width: 767px) {
    margin-left: 10px;
  }
`
export const TogglePasswordContainer = styled.div`
  display: flex;
`
export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: bold;
  padding-top: 4px;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: red;
  font-size: 15px;
  margin-left: 80px;
  @media screen and (max-width: 767px) {
    margin-left: 10px;
  }
`
export const LoginButton = styled.button`
  height: 40px;
  width: 350px;
  background-color: #4f46e5;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  color: #475569;
  border-radius: 8px;
  margin-left: 80px;
  margin-bottom: 20px;
  color: #ffffff;
  border: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 200px;
    margin-left: 10px;
  }
`
