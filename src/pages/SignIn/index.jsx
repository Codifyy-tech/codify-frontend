import {
  FormContainer,
  InputContainer,
  SignInContainer,
  SignInDescSide,
  SignInFormSide,
  MobileArea,
} from './styles'

import signIn from '../../assets/signin-image.png'
import { RegularText, TitleText } from '../../components/Typograph'
import { ButtonLink } from '../../components/ButtonLink'
import { InputForm } from '../../components/Input'
import { ButtonForm } from '../../components/ButtonForm'

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
            <img src={signIn} alt="" />
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

          <div>
            <FormContainer>
              <InputContainer>
                {formData.map((item, index) => {
                  return (
                    <InputForm
                      key={index}
                      name={item.name}
                      labelText={item.labelText}
                      placeholder={item.placeholder}
                      typeInput={item.inputType}
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
