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
import { SignInValidatorSchema } from '../../utils/schema/loginSchema'
import { Sidebar } from '../../components/Sidebar'
import { PulseLoader } from 'react-spinners'

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
    resolver: yupResolver(SignInValidatorSchema),
  })

  const { signIn, signed, isLoading } = useContext(AuthContext)

  console.log(signed)

  async function handleLogin(inputData) {
    await signIn(inputData)
  }

  if (signed) {
    return <Navigate to="/home" />
  } else {
    return (
      <SignInContainer>
        <Sidebar
          title="Cadastre-se"
          desc="Faça seu cadastro e aproveite todos os recursos de maneira gratuita"
          buttonText="Cadastrar"
          path="/register"
          imageUrl="https://vanilla.codifyy.tech/assets/images/signInImage.png"
        />

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
                  type="submit"
                  backgroundColor="brand-blue"
                  textColor="base-white"
                  hoverBackgroundColor="base-button-hover"
                >
                  {isLoading ? (
                    <PulseLoader color="#FFF" size={14} />
                  ) : (
                    'Entrar'
                  )}
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
