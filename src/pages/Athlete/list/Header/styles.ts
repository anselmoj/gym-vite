import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 5rem repeat(4, minmax(10rem, 1fr));
  gap: 1rem;
  margin-top: 12px;
  @media (min-width: 1440px) {
    grid-template-columns: 5rem repeat(4, 1fr);
  }
`

export const Item = styled.div`
  color: #ff9900;
  padding: 0.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
`
