import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 12px;
  grid-template-columns: repeat(3, 1fr);
`

export const Item = styled.div`
  color: #ff9900;
  padding: 0.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
`
