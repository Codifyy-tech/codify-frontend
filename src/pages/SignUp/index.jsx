import {
  FormContainer,
  InputContainer,
  SignInContainer,
  SignInFormSide,
  MobileArea,
} from './styles'

import { RegularText, TitleText } from '../../components/Typograph'
import { InputForm } from '../../components/Input'
import { ButtonForm } from '../../components/ButtonForm'
import { Navigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'
import { Sidebar } from '../../components/Sidebar'
import { SignUpValidatorSchema } from '../../utils/schema/SignUpSchema'
import { SelectInput } from '../../components/SelectInput'

const formData = [
  {
    labelText: 'Nome Completo ',
    placeholder: 'Digite seu nome completo',
    inputType: 'text',
    name: 'name',
  },
  {
    labelText: 'E-mail',
    placeholder: 'Digite seu e-mail',
    inputType: 'email',
    name: 'email',
  },
  {
    labelText: 'Telefone',
    placeholder: 'Digite seu telefone',
    inputType: 'tel',
    name: 'phone',
  },
  {
    labelText: 'Senha',
    placeholder: 'Digite sua senha',
    inputType: 'password',
    name: 'password',
  },
  {
    labelText: 'Confirme a senha',
    placeholder: 'Digite sua senha',
    inputType: 'password',
    name: 'confirm_password',
  },
  {
    labelText: 'Data de Aniversário',
    placeholder: '',
    inputType: 'date',
    name: 'birth_date',
  },
  {
    labelText: 'Gênero',
    placeholder: 'São Paulo',
    inputType: 'select',
    name: 'genre',
    options: [
      {
        value: 'H',
        label: 'Homem (Trans ou Cis)',
      },
      {
        value: 'M',
        label: 'Mulher (Trans ou Cis)',
      },
      {
        value: 'NB',
        label: 'Não-binário',
      },
      {
        value: 'NI',
        label: 'Prefiro não informar',
      },
    ],
  },
]

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpValidatorSchema),
  })

  const { signIn, signed } = useContext(AuthContext)

  async function handleLogin(inputData) {
    console.log(inputData)
    toast.success('Usuário cadastrado', {
      theme: 'colored',
    })
    await signIn(inputData)
  }

  if (signed) {
    return <Navigate to="/home" />
  } else {
    return (
      <SignInContainer>
        <Sidebar
          title="Já tem conta?"
          desc="FEntre na plataforma com suas credenciais cadastradas"
          buttonText="Entrar"
          path="/login"
          imageUrl="https://vanilla.codifyy.tech/assets/images/signUpImage.png"
        />

        <SignInFormSide>
          <section>
            <div>
              <TitleText fontSize="title-l" color="base-black">
                Bem vindo!
              </TitleText>
              <RegularText fontSize="text-m" color="base-text" weight="500">
                Preencha corretamente as informações para realizar seu cadastro.
              </RegularText>
            </div>
            {console.log(errors)}

            <div>
              <FormContainer onSubmit={handleSubmit(handleLogin)} noValidate>
                <InputContainer>
                  {formData.map((item, index) => {
                    if (item.inputType === 'select') {
                      return (
                        <SelectInput
                          error={errors[item.name]}
                          key={index}
                          labelText={item.labelText}
                          placeholder={item.placeholder2}
                          options={item.options}
                          {...register(item.name)}
                        />
                      )
                    } else {
                      return (
                        <InputForm
                          key={index}
                          error={errors[item.name]}
                          labelText={item.labelText}
                          placeholder={item.placeholder}
                          typeInput={item.inputType}
                          {...register(item.name)}
                        />
                      )
                    }
                  })}
                </InputContainer>
                <ButtonForm
                  backgroundColor="brand-blue"
                  textColor="base-white"
                  hoverBackgroundColor="base-button-hover"
                >
                  Cadastrar
                </ButtonForm>
              </FormContainer>

              <MobileArea>
                <RegularText fontSize="text-m" color="base-text" weight="500">
                  Já possui uma conta? <a href="/login">Entre</a>
                </RegularText>
              </MobileArea>
            </div>
          </section>
        </SignInFormSide>
      </SignInContainer>
    )
  }
}
