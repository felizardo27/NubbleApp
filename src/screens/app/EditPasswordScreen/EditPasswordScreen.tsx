import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormPasswordInput, Screen} from '@components';
import {useAuthUpdatePassword} from '@domain';
import {AppScreenProps} from '@routes';

import {editPasswordSchema, EditPasswordSchema} from './editPasswordSchema';

const defaultValues: EditPasswordSchema = {
  currentPassword: '',
  newPassword: '',
  confirmedPassword: '',
};

export function EditPasswordScreen({}: AppScreenProps<'EditPasswordScreen'>) {
  const {updatePassword, isLoading} = useAuthUpdatePassword();
  const {control, formState, handleSubmit} = useForm<EditPasswordSchema>({
    resolver: zodResolver(editPasswordSchema),
    defaultValues,
    mode: 'onChange',
  });

  return (
    <Screen canGoBack title="Alterar Senha">
      <FormPasswordInput
        control={control}
        name="currentPassword"
        label="Senha atual"
        placeholder="Digite sua senha atual"
        boxProps={{mt: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="newPassword"
        label="Nova senha"
        placeholder="Digite sua nova senha"
        boxProps={{mt: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="confirmedPassword"
        label="Confirme a nova senha"
        placeholder="Digite novamente sua nova senha"
        boxProps={{mt: 's20'}}
      />

      <Button
        title="Salvar alterações"
        disabled={!formState.isValid}
        loading={isLoading}
        onPress={handleSubmit(updatePassword)}
        mt="s48"
      />
    </Screen>
  );
}
