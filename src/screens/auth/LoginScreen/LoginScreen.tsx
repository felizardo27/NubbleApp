import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {useAuthSignIn} from '@domain';
import {AuthScreenProps} from '@routes';

import {loginSchema, LoginSchema} from './loginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {showToast} = useToastService();
  const {signIn, isLoading} = useAuthSignIn({
    onError: message => showToast({message, type: 'error'}),
  });
  const {control, handleSubmit, formState} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({email, password}: LoginSchema) {
    signIn({email, password});
  }

  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite o seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite a sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        preset="paragraphSmall"
        bold
        color="primary">
        Esqueci minha senha
      </Text>

      <Button
        loading={isLoading}
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title="Entrar"
        mt="s48"
      />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        title="Criar uma conta"
        mt="s12"
      />
    </Screen>
  );
}
