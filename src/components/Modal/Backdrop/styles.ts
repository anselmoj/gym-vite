import styled from 'styled-components';

export interface IContainerProps {
  zIndex?: string;
}

export const Container = styled.div<IContainerProps>`
  background: ${props => props.theme.boxShadow};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: all 0s cubic-bezier(0.23, 1, 0.32, 1);
  width: 100vw;
  z-index: 4;
`;
