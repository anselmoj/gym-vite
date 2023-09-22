import { styled } from 'styled-components'

export const Container = styled.div`
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  padding: 6rem;
  min-height: 100vh;
`

export const Title = styled.h1`
  color: orange;
  margin-bottom: 1rem;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const ContentInput = styled.div`
  & + & {
    margin-top: 1rem;
  }
`

export const Label = styled.p`
  display: flex;
`

export const Input = styled.input`
  border-radius: 0.3rem;
  border: none;
  padding: 0.3rem;
`

export const ContainerButton = styled.div`
  justify-content: center;
  margin-top: 2rem;
`

export const Button = styled.button`
  padding: 8px 16px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: green;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`
