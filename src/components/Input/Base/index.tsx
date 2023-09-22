'use client'

import { Eye, EyeSlash, Icon } from '@phosphor-icons/react'
import {
  ChangeEvent,
  InputHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  StyledErrorMessage,
  StyledInput,
  StyledInputContainer,
  StyledInputWrapper,
  StyledLabel,
  StyledPasswordToggle,
} from './styles'

export interface InputBaseRefProps {
  getValue(): string
  setError(error: string): void
  setValue(value: string): void
}

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean
  label?: string
  isPassword?: boolean
  icon?: Icon
  placeholder?: string
}

const InputBaseWithRef: React.ForwardRefRenderFunction<
  InputBaseRefProps,
  InputBaseProps
> = (
  {
    label,
    isPassword = false,
    icon: InputIcon,
    type = 'text',
    disabled,
    onChange,
    placeholder,
    readOnly,
  },
  ref,
) => {
  const [errorMessage] = useState<string>('')
  const [inputType, setInputType] = useState<string>(type)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const text = event.target.value
    if (inputRef.current) {
      inputRef.current.value = text
    }
    if (onChange) {
      onChange(event)
    }
  }

  const handleToggleInputType = () => {
    setInputType((currentType) => {
      if (currentType === 'password') {
        return 'text'
      }
      return 'password'
    })
  }

  useImperativeHandle(
    ref,
    () => ({
      getValue: (): string => {
        return inputRef.current?.value || ''
      },
      setError: (error: string): void => {
        throw new Error(error)
      },
      setValue: (value: string): void => {
        if (inputRef.current) {
          inputRef.current.value = value
        }
      },
    }),
    [],
  )

  return (
    <StyledInputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInputWrapper>
        {InputIcon && <InputIcon size={22} />}
        <StyledInput
          type={inputType}
          disabled={disabled}
          readOnly={readOnly}
          ref={inputRef}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        {isPassword && (
          <StyledPasswordToggle onClick={handleToggleInputType} type="button">
            {inputType === 'password' ? (
              <Eye size={22} />
            ) : (
              <EyeSlash size={22} />
            )}
          </StyledPasswordToggle>
        )}
      </StyledInputWrapper>
      <StyledErrorMessage>
        {!!errorMessage && (
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        )}
      </StyledErrorMessage>
    </StyledInputContainer>
  )
}

const InputBase = forwardRef(InputBaseWithRef)
export default InputBase
