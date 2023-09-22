import styled from 'styled-components'

export const Container = styled.div`
  column-gap: 0.5rem;
  display: grid;
  display: grid;
  grid-template-columns: 12rem 12rem;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
`

export const Title = styled.h5`
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
