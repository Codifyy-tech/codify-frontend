import {
  FormContainer,
  InputContainer,
  SignInContainer,
  SignInFormSide,
  MobileArea,
  CepContainer,
  SearchButton,
  AddressFormContainer,
  DistrictInfo,
  ErrorMessage,
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
import axios from 'axios'
import { PulseLoader } from 'react-spinners'

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
              <FormContainer onSubmit={handleSubmit(handleRegister)} noValidate>
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

                <AddressFormContainer>
                  <CepContainer>
                    <InputForm
                      error={!!errors.cep}
                      labelText="CEP"
                      placeholder="Digite seu CEP"
                      typeInput="number"
                      {...register('cep')}
                    />
                    <SearchButton
                      onClick={handleSearch}
                      type="button"
                      isInvalid={!!errors.cep}
                    >
                      Pesquisar
                    </SearchButton>
                  </CepContainer>

                  {errors.cep && (
                    <ErrorMessage>{errors.cep.message}</ErrorMessage>
                  )}
                  <InputForm
                    error={errors.address}
                    labelText="Endereço"
                    typeInput="text"
                    disabled
                    {...register('address')}
                  />

                  <InputForm
                    error={errors.district}
                    labelText="Bairro"
                    typeInput="text"
                    disabled
                    {...register('district')}
                  />

                  <DistrictInfo>
                    <InputForm
                      error={errors.city}
                      labelText="Cidade"
                      typeInput="text"
                      disabled
                      {...register('city')}
                    />
                    <InputForm
                      error={errors.state}
                      labelText="Estado"
                      typeInput="text"
                      disabled
                      {...register('state')}
                    />
                  </DistrictInfo>
                </AddressFormContainer>

                <ButtonForm
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
