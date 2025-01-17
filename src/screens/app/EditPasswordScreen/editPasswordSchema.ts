import {schemaTypes} from '@form';
import {string, z} from 'zod';

export const editPasswordSchema = z
  .object({
    currentPassword: string(),
    newPassword: schemaTypes.password,
    confirmedPassword: schemaTypes.password,
  })
  .refine(data => data.newPassword === data.confirmedPassword, {
    message: 'As senhas não são iguais',
    path: ['confirmedPassword'],
  });

export type EditPasswordSchema = z.infer<typeof editPasswordSchema>;
