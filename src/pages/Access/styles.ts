import { styled } from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 6rem;
  min-height: 100vh;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2rem;
  color: #0066cc;
`

export const CreateAccessButton = styled.button`
  padding: 8px 16px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: #0066cc;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`

export const ContentContainer = styled.div`
  padding: 1rem;
  margin-top: 20px;
`

export const Form = styled.form`
  height: 16rem;
`

export const ItemsForm = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  width: 100%;
`
export const Items = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
`
export const ContainerButton = styled.div`
  column-gap: 0.5rem;
  display: grid;
  display: grid;
  grid-template-columns: 12rem 12rem;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
`

export const TitleButton = styled.h5`
  align-items: center;
  color: orange;
  display: flex;
  font-size: 1.125rem;
  font-weight: 500;
  justify-content: center;
  margin-bottom: 0.25rem;
`

interface IButton {
  backgroundColor: string
}
export const Button = styled.button<IButton>`
  background-color: ${(props) => props.backgroundColor};
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 2.25rem;
  cursor: pointer;
  color: white;
`
