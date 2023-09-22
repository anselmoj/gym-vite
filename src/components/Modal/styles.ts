import { styled } from 'styled-components'
import animations from '../../styles/animations'

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`

interface IContentProps {
  maxWidth?: number
}

export const Content = styled.div.attrs({
  id: 'modalContent',
})<IContentProps>`
  animation-delay: 0.1s;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-name: ${animations.appear};
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: #fff;
  border-radius: 0.375rem;
  max-height: 100%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 28)}rem;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
  width: 100%;
  z-index: 6;
  border: 1px solid #1b1f2426;
  &.hideModal {
    animation-name: ${animations.disappear};
  }

  ::-webkit-scrollbar {
    background: #f6f8fa;
    height: 0.5rem;
    width: 0.4rem;
  }

  ::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: #f6f8fa;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0 0 0.25rem 0.25rem;
    height: 0.5rem;
    width: 0.75rem;
  }
`

export const Title = styled.h5`
  align-items: center;
  color: #0969da;
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`

export const SubTitle = styled.p`
  color: #0969da;
  font-size: 0.875rem;
`
