import * as yup from 'yup'

const getFormatedDate = (currentDate) => {
  return currentDate.split('/').reverse().join('-')
}

export const SignUpValidatorSchema = yup.object({
  name: yup
    .string()
    .min(1, 'O campo nome não pode ser vazio')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Nomes não podem conter caracteres especiais ou números.',
    )
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, 'Digite seu nome completo'),
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
  cep: yup
    .string()
    .max(8, 'CEP Inválido')
    .min(8, 'CEP Inválido')
    .nullable()
    .required('Digite um CEP'),
  address: yup.string().required('Campo obrigatório'),
  district: yup.string().required('Campo obrigatório'),
  state: yup.string().required('Campo obrigatório'),
  city: yup.string().required('Campo obrigatório'),
})
