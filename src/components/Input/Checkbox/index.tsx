import {
  InputHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { CheckboxContainer, ErrorMessage, Label } from './styles'

export interface InputCheckboxRefProps {
  getValue(): boolean
  setError(error: string): void
  setValue(value: boolean): void
}

interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const InputCheckboxWithRef: React.ForwardRefRenderFunction<
  InputCheckboxRefProps,
  InputCheckboxProps
> = ({ label, ...rest }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')

  useImperativeHandle(ref, () => ({
    getValue: (): boolean => {
      return inputRef.current?.checked || false
    },
    setError: (error: string): void => {
      setErrorMessage(error)
    },
    setValue: (value: boolean): void => {
      if (inputRef.current) {
        inputRef.current.checked = value
      }
    },
  }))

  return (
    <CheckboxContainer>
      <input {...rest} type="checkbox" ref={inputRef} />
      {label && <Label>{label}</Label>}
      <div>{!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}</div>
    </CheckboxContainer>
  )
}

const InputCheckbox = forwardRef(InputCheckboxWithRef)
export default InputCheckbox
