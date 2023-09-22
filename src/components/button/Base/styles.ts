import styled from 'styled-components'

export interface IContainerProps {
  backgroundColor?: string
  borderRadius?: string
  color?: string
  height?: string
  marginTop?: string
  width?: string
}
export const Container = styled.button<IContainerProps>`
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.buttonBackground};
  border: 1px solid #e5e5e5;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '0.7rem'};
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  column-gap: 0.5rem;
  display: flex;
  font-size: 0.875rem;
  font-weight: 500;
  height: ${(props) => (props.height ? props.height : '2.2rem')};
  justify-content: center;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '1rem')};
  width: ${(props) => (props.width ? props.width : '100%')};

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor
        ? props.backgroundColor
        : props.theme.buttonBackground};
    border-color: #e5e5e5;
    color: ${(props) => (props.color ? props.color : props.theme.text)};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`
