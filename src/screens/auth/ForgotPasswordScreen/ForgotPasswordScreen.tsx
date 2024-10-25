import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Screen, Text, Button, FormTextInput} from '@components';
import {useAuthRequestNewPassword} from '@domain';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';

const resetParams: AuthStackParamList['SuccessScreen'] = {
  title: 'Enviamos as instruções para seu e-mail',
  description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
  icon: {
    name: 'messageRound',
    color: 'iconColor',
    fillColor: 'iconFillColor',
  },
};

export function ForgotPasswordScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  const {showToast} = useToastService();
  const {requestNewPassword, isLoading} = useAuthRequestNewPassword({
    onSuccess: () => {
      reset(resetParams);
    },
    onError: message => {
      showToast({message, type: 'error'});
    },
  });

  function submitForm(values: ForgotPasswordSchema) {
    requestNewPassword(values.email);
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite o seu e-mail"
        boxProps={{mb: 's40'}}
      />
      <Button
        loading={isLoading}
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title="Recuperar senha"
      />
    </Screen>
  );
}
