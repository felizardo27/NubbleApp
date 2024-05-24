import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
  Screen,
} from '@components';
import {useAuthSignUp} from '@domain';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {signUpSchema, SignUpSchema} from './signUpSchema';

const resetParams: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'greenSuccess',
  },
};

const defaultValues: SignUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParams);
    },
  });
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: 'onChange',
  });
  function submitForm(formValues: SignUpSchema) {
    signUp(formValues);
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge">Criar uma conta</Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        loading={isLoading}
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title="Criar minha conta"
      />
    </Screen>
  );
}
