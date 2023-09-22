import { styled } from 'styled-components'

export const StyledInputContainer = styled.div`
  width: 100%;
`

export const StyledLabel = styled.label`
  color: #333;
`

export const StyledInputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  background-color: #f0f0f0;
  color: #333;
`

export const StyledInput = styled.input`
  outline: none;
  flex-grow: 1;
  background: transparent;
  border: none;
`

export const StyledPasswordToggle = styled.button`
  color: blue;
  cursor: pointer;
`

export const StyledErrorMessage = styled.p`
  color: red;
`
