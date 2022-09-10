import * as yup from 'yup'

export const EditValidatorSchema = yup.object({
  current_password: yup.string().min(6, 'A senha deve pelo menos 6 caracteres'),
  new_password: yup.string().min(6, 'A senha deve pelo menos 6 caracteres'),
  confirm_new_password: yup
    .string()
    .required('A confirmação de senha é obrigatória')
    .oneOf([yup.ref('new_password')], 'As senhas não correspondem'),
})
