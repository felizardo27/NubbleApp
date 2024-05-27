import {stringUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{4,29}$/gim;

export const signUpSchema = z.object({
  username: z
    .string()
    .min(5, 'Username muito curto')
    .regex(userNameRegex, 'Nome de usuário inválido.')
    .toLowerCase(),
  firstName: z
    .string()
    .min(5, 'Nome muito curto.')
    .max(50, 'Nome muito longo.')
    .transform(stringUtils.capitalizeFirstLetter),
  lastName: z
    .string()
    .min(5, 'Nome muito curto.')
    .max(50, 'Nome muito longo.')
    .transform(stringUtils.capitalizeFirstLetter),
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres.'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
