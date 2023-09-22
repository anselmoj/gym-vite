import {
  FormEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import {
  Button,
  ContainerButton,
  ContentInput,
  Form,
  Label,
  Title,
} from './styles'
import InputBase, { InputBaseRefProps } from '../../../components/Input/Base'
import InputCheckbox, {
  InputCheckboxRefProps,
} from '../../../components/Input/Checkbox'
import * as Yup from 'yup'

export interface FormDataProps {
  name: string
  gender: string
  is_active: boolean
}

export interface InitialData {
  name: string
  gender: string
}

export interface FormRefProps {
  getValues(): FormDataProps
  clearValues(): void
}

interface IAthleteFormProps {
  onSubmit(): void
  initialData?: InitialData
  title: string
}

interface Errors {
  [key: string]: string
}

const validation = Yup.object().shape({
  name: Yup.string().required('Campo nome é obrigatório'),
  gender: Yup.string().required('Campo gênero é obrigatório'),
})

const AthleteFormWithRef: React.ForwardRefRenderFunction<
  FormRefProps,
  IAthleteFormProps
> = ({ onSubmit, title, initialData }, ref) => {
  const inputNameRef = useRef<InputBaseRefProps>(null)
  const inputGenderRef = useRef<InputBaseRefProps>(null)
  const inputIsActiveRef = useRef<InputCheckboxRefProps>(null)

  function getFormDataValues(): FormDataProps {
    if (!inputNameRef.current) {
      throw new Error('inputNameRef não encontrado')
    }
    if (!inputGenderRef.current) {
      throw new Error('inputGenderRef não encontrado')
    }
    if (!inputIsActiveRef.current) {
      throw new Error('inputIsActiveRef não encontrado')
    }

    return {
      name: inputNameRef.current.getValue(),
      gender: inputGenderRef.current.getValue(),
      is_active: inputIsActiveRef.current.getValue(),
    }
  }

  function clearFormDataValues(): void {
    if (!inputNameRef.current) {
      throw new Error('inputNameRef não encontrado')
    }
    if (!inputGenderRef.current) {
      throw new Error('inputGenderRef não encontrado')
    }
    if (!inputIsActiveRef.current) {
      throw new Error('inputIsActiveRef não encontrado')
    }
    inputNameRef.current.setValue('')
    inputGenderRef.current.setValue('')
  }

  function setFormErrorValues(errors: {
    [key in keyof FormDataProps]: string
  }): void {
    if (!inputNameRef.current) {
      throw new Error('inputNameRef não encontrado')
    }
    if (!inputGenderRef.current) {
      throw new Error('inputGenderRef não encontrado')
    }
    if (!inputIsActiveRef.current) {
      throw new Error('inputIsActiveRef não encontrado')
    }
    inputNameRef.current.setError(errors.name || '')
    inputGenderRef.current.setError(errors.gender || '')
  }

  function getErrors(errors: Yup.ValidationError): Errors {
    const validationErros: Errors = {}

    errors.inner.forEach((error) => {
      validationErros[String(error.path)] = error.message
    })
    return validationErros
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formValues = getFormDataValues()
    try {
      await validation.validate(formValues, {
        abortEarly: false,
      })
      onSubmit()
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationError = getErrors(error)
        setFormErrorValues({
          name: validationError.name,
          gender: validationError.gender,
          is_active: validationError.is_active,
        })
      }
      throw new Error('Erro ao adicionar atleta')
    }
  }

  useImperativeHandle(ref, () => ({
    clearValues: clearFormDataValues,
    getValues: getFormDataValues,
  }))

  useEffect(() => {
    if (initialData) {
      if (!inputNameRef.current) {
        throw new Error('inputNameRef não encontrado')
      }
      if (!inputGenderRef.current) {
        throw new Error('inputGenderRef não encontrado')
      }
      inputGenderRef.current.setValue(initialData.gender)
      inputNameRef.current.setValue(initialData.name)
    }
  }, [initialData])

  return (
    <Form onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <ContentInput>
        <Label>Nome</Label>
        <InputBase ref={inputNameRef} />
      </ContentInput>

      <ContentInput>
        <Label>Gênero</Label>
        <InputBase ref={inputGenderRef} />
      </ContentInput>

      <ContentInput>
        <InputCheckbox label="Ativo" ref={inputIsActiveRef} />
      </ContentInput>

      <ContainerButton>
        <Button type="submit">Salvar</Button>
      </ContainerButton>
    </Form>
  )
}
const AthleteForm = forwardRef(AthleteFormWithRef)
export default AthleteForm
