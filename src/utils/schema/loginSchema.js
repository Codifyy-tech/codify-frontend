import * as zod from 'zod'

export const LoginValidatorSchema = zod.object({
  email: zod.string().email('E-mail inválido'),
  password: zod.string().min(6, 'A senha deve pelo menos 6 caracteres'),
})
