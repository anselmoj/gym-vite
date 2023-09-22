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

export const CreateAthleteButton = styled.button`
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
