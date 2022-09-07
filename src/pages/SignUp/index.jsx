import { SignInContainer, SignInFormSide, MobileArea } from './styles'

import { RegularText, TitleText } from '../../components/Typograph'
import { Navigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'
import { Sidebar } from '../../components/Sidebar'
import { SignUpValidatorSchema } from '../../utils/schema/SignUpSchema'
import axios from 'axios'
import { FormRegister } from '../../components/FormRegister'

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
    getValues,
    setValue,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpValidatorSchema),
  })

  const { signUp, signed, isLoading } = useContext(AuthContext)

  async function handleRegister(inputData) {
    await signUp(inputData)
  }

  async function handleSearch() {
    const cep = getValues('cep')
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      setValue('address', data.logradouro, { shouldValidate: true })
      setValue('district', data.bairro, { shouldValidate: true })
      setValue('city', data.localidade, { shouldValidate: true })
      setValue('state', data.uf, { shouldValidate: true })
    } catch (e) {
      console.log('eRRO' + e)
      toast.error('CEP não encontrado', {
        theme: 'colored',
      })
      resetField('address')
      resetField('district')
      resetField('city')
      resetField('state')
    }
  }

  if (signed) {
    return <Navigate to="/home" />
  } else {
    return (
      <SignInContainer>
        <Sidebar
          title="Já tem conta?"
          desc="Entre na plataforma com suas credenciais cadastradas"
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

            <div>
              <FormRegister
                handleSubmit={handleSubmit(handleRegister)}
                textButton="Cadastrar"
                formData={formData}
                register={register}
                errors={errors}
                handleSearch={handleSearch}
                isLoading={isLoading}
                addressForm={true}
                inputColor="base-white"
              />

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
