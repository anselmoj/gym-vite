import { css, styled } from 'styled-components'

interface IContainerProps {
  addColorRow?: boolean
}
export const Container = styled.div<IContainerProps>`
  display: grid;
  gap: 1rem;
  margin-top: 12px;
  grid-template-columns: repeat(3, 1fr);

  ${(props) =>
    props.addColorRow &&
    css`
      background: #e5e5e5;
    `}
`

export const Info = styled.p`
  color: #000;
  padding: 8px;
  display: flex;
  justify-content: center;
`

export const ButtonActions = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  display: flex;
  font-size: 0;
  height: 1.5rem;
  justify-content: center;
  width: 1.5rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    &:hover {
      opacity: 0.8;
    }
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`

export const StyledLink = styled.a`
  color: #0066cc;
`
