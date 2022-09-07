import { yupResolver } from '@hookform/resolvers/yup'
import axios, { AxiosError } from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Avatar } from '../../components/Avatar'
import { FormRegister } from '../../components/FormRegister'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/api'
import { EditValidatorSchema } from '../../utils/schema/EditShema'
import { ProfileContainer } from './styles'

const formData = [
  {
    labelText: 'Nome Completo ',
    placeholder: 'Digite seu nome completo',
    inputType: 'text',
    name: 'name',
    disabled: true,
  },
  {
    labelText: 'E-mail',
    placeholder: 'Digite seu e-mail',
    inputType: 'email',
    name: 'email',
    disabled: true,
  },
  {
    labelText: 'Senha Atual',
    placeholder: 'Digite sua senha',
    inputType: 'password',
    name: 'current_password',
    disabled: false,
  },
  {
    labelText: 'Nova Senha',
    placeholder: 'Digite sua senha',
    inputType: 'password',
    name: 'new_password',
    disabled: false,
  },
  {
    labelText: 'Confirme a nova senha',
    placeholder: 'Digite sua senha',
    inputType: 'password',
    name: 'confirm_new_password',
    disabled: false,
  },
]

export function ProfilePage() {
  const token = localStorage.getItem('@Auth:token')
  const { user } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EditValidatorSchema),
  })

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get('/info', {
        headers: { Authorization: 'Bearer ' + token },
      })
      setValue('name', data.data.name)
      setValue('email', data.data.email)
    }

    getData()
  }, [user])

  async function handleEdit(inputData) {
    console.log('Oi')
    try {
      setIsLoading(true)
      const { data } = await api.put('/edit', inputData, {
        headers: { Authorization: 'Bearer ' + token },
      })
      toast.success(data.data, {
        theme: 'colored',
      })
    } catch (e) {
      toast.error(
        e instanceof AxiosError && e.response.data
          ? e.response.data.message
          : 'Erro Interno',
        {
          theme: 'colored',
        },
      )
    } finally {
      setIsLoading(false)
    }
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
      toast.error('CEP não encontrado', {
        theme: 'colored',
      })
      resetField('address')
      resetField('district')
      resetField('city')
      resetField('state')
    }
  }

  return (
    <ProfileContainer>
      <Avatar letter={user.firstLetter} size={150} fontSize="title-l" />
      <FormRegister
        handleSubmit={handleSubmit(handleEdit)}
        textButton="Editar senha"
        formData={formData}
        register={register}
        errors={errors}
        handleSearch={handleSearch}
        isLoading={isLoading}
        inputColor="base-background"
        addressForm={false}
      />
    </ProfileContainer>
  )
}
