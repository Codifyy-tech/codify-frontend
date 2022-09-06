import * as yup from 'yup'

const getFormatedDate = (currentDate) => {
  return currentDate.split('/').reverse().join('-')
}

export const SignUpValidatorSchema = yup.object({
  name: yup.string().min(1, 'O campo nome não pode ser vazio'),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('O campo e-mail não pode ser vazio'),
  password: yup.string().min(6, 'A senha deve pelo menos 6 caracteres'),
  confirm_password: yup
    .string()
    .required('A confirmação de senha é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas não correspondem'),
  birth_date: yup
    .date()
    .max(
      getFormatedDate(new Date().toLocaleDateString()),
      'Não é possível selecionar datas futuras',
    )
    .required('Campo obrigatório')
    .nullable()
    .transform((v) => (v instanceof Date && !isNaN(v) ? v : null)),

  genre: yup
    .mixed()
    .oneOf(['H', 'M', 'NB', 'NI'], 'Selecione uma opção válida'),
})
