import {
  FormContainer,
  InputContainer,
  SignInContainer,
  SignInDescSide,
  SignInFormSide,
  MobileArea,
} from './styles'

import { RegularText, TitleText } from '../../components/Typograph'
import { ButtonLink } from '../../components/ButtonLink'
import { InputForm } from '../../components/Input'
import { ButtonForm } from '../../components/ButtonForm'
import { Navigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { LoginValidatorSchema } from '../../utils/schema/loginSchema'
import { toast } from 'react-toastify'

const formData = [
  {
    labelText: 'E-mail',
    placeholder: 'Digite seu e-mail',
    inputType: 'email',
    name: 'email',
  },
  {
    labelText: 'Senha',
    placeholder: 'Digite sua senha',
    inputType: 'password',
    name: 'password',
  },
]

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginValidatorSchema),
  })

  const { signIn, signed } = useContext(AuthContext)

  async function handleLogin(inputData) {
    console.log(inputData)
    toast.error('Usuário não encontrado', {
      theme: 'colored',
    })
    await signIn(inputData)
  }

  if (signed) {
    return <Navigate to="/home" />
  } else {
    return (
      <SignInContainer>
        <SignInDescSide>
          <aside>
            <div>
              <TitleText fontSize="title-l" color="base-white">
                Cadastre-se
              </TitleText>
              <RegularText fontSize="text-m" color="base-white" weight="500">
                Faça seu cadastro e aproveite todos os recursos de maneira
                gratuita
              </RegularText>
              <ButtonLink
                path="/"
                backgroundColor="base-white"
                textColor="base-black"
              >
                <RegularText fontSize="text-m" color="base-black" weight="500">
                  Cadastrar
                </RegularText>
              </ButtonLink>
            </div>

            <div>
              <img
                src="https://vanilla.codifyy.tech/assets/images/signInImage.png"
                alt=""
              />
            </div>
          </aside>
        </SignInDescSide>

        <SignInFormSide>
          <section>
            <div>
              <TitleText fontSize="title-l" color="base-black">
                Bem vindo!
              </TitleText>
              <RegularText fontSize="text-m" color="base-text" weight="500">
                Preencha corretamente as informações para realizar seu login.
              </RegularText>
            </div>
            {console.log(errors)}

            <div>
              <FormContainer onSubmit={handleSubmit(handleLogin)} noValidate>
                <InputContainer>
                  {formData.map((item, index) => {
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
                  })}
                </InputContainer>
                <ButtonForm
                  backgroundColor="brand-blue"
                  textColor="base-white"
                  hoverBackgroundColor="base-button-hover"
                >
                  Entrar
                </ButtonForm>
              </FormContainer>

              <MobileArea>
                <RegularText fontSize="text-m" color="base-text" weight="500">
                  Não possui uma conta? <a href="/register">Cadastre-se</a>
                </RegularText>
              </MobileArea>
            </div>
          </section>
        </SignInFormSide>
      </SignInContainer>
    )
  }
}
