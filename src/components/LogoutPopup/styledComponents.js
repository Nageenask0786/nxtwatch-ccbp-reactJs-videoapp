import styled from 'styled-components'

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background};
  border-radius: 10px;
`
export const ButtonAlignment = styled.div`
  display: flex;
`
export const CancelButton = styled.button`
  height: 30px;
  width: 80px;
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  background-color: transparent;
  color: #cbd5e1;
  font-weight: bold;
  margin: 20px;
`
export const ConfirmButton = styled.button`
  height: 30px;
  width: 80px;
  border-radius: 3px;
  color: #ffffff;
  font-weight: bold;
  background-color: #3b82f6;
  margin: 20px;
`
export const Heading = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
`
