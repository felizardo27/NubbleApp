import {stringUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{4,29}$/gim;

const username = z
  .string()
  .min(5, 'Username muito curto')
  .regex(userNameRegex, 'Nome de usuário inválido.')
  .toLowerCase();

const name = z
  .string()
  .min(5, 'Nome muito curto.')
  .max(50, 'Nome muito longo.')
  .transform(stringUtils.capitalizeFirstLetter);

const email = z.string().email('E-mail inválido.');

const password = z.string().min(8, 'A senha deve ter no mínimo 8 caracteres.');

export const schemaTypes = {username, name, email, password};
