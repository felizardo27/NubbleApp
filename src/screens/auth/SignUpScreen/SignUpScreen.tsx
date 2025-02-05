import React from 'react';

import {useAsyncValidation} from '@form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
  Screen,
  ActivityIndicator,
  Icon,
} from '@components';
import {authService, useAuthSignUp} from '@domain';
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
  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange',
    });
  function submitForm(formValues: SignUpSchema) {
    signUp(formValues);
  }

  const usernameValidation = useAsyncValidation({
    watch,
    getFieldState,
    fieldName: 'username',
    isAvailableFunc: authService.isUserNameAvailable,
    errorMessage: 'username inválido',
  });

  const emailValidation = useAsyncValidation({
    watch,
    getFieldState,
    fieldName: 'email',
    isAvailableFunc: authService.isEmailAvailable,
    errorMessage: 'email inválido',
  });

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge">Criar uma conta</Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        errorMessage={usernameValidation.errorMessage}
        boxProps={{mb: 's20'}}
        rightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : usernameValidation.isInvalid ? (
            <Icon name="errorRound" color="redError" size={20} />
          ) : (
            <Icon name="checkRound" color="greenSuccess" size={20} />
          )
        }
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
        errorMessage={emailValidation.errorMessage}
        rightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : emailValidation.isInvalid ? (
            <Icon name="errorRound" color="redError" size={20} />
          ) : (
            <Icon name="checkRound" color="greenSuccess" size={20} />
          )
        }
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
        disabled={
          !formState.isValid ||
          usernameValidation.notReady ||
          emailValidation.notReady
        }
        title="Criar minha conta"
      />
    </Screen>
  );
}
