import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { Controller, useForm } from 'react-hook-form';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

type LoginFormTypes = {
  email: string,
  password: string,
}

export function LoginScreen({ navigation }: ScreenProps) {
  const { control, handleSubmit, formState } = useForm<LoginFormTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange'
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({ email, password }: LoginFormTypes) {
    Alert.alert(`Email: ${email} ${'\n'} Password: ${password}`)
  }

  return (
    <Screen scrollable>
      <View style={{ paddingHorizontal: 24 }}>
        <Text mb="s8" preset="headingLarge">
          Olá!
        </Text>
        <Text mb="s40" preset="paragraphLarge">
          Digite seu e-mail e senha para entrar
        </Text>

        <Controller
          control={control}
          name="email"
          rules={{
            required: 'E-mail obrigatório.',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'E-mail inválido.'
            }
          }}
          render={({ field, fieldState }) => (
            <TextInput
              errorMessage={fieldState.error?.message}
              value={field.value}
              onChangeText={field.onChange}
              label="E-mail"
              placeholder="Digite seu e-mail"
              boxProps={{ mb: 's20' }}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Senha obrigatória.',
            minLength: {
              value: 8,
              message: 'A senha deve ter no mínimo 8 caracteres.'
            }
          }}
          render={({ field, fieldState }) => (
            <PasswordInput
              errorMessage={fieldState.error?.message}
              value={field.value}
              onChangeText={field.onChange}
              label="Senha"
              placeholder="Digite sua senha"
              boxProps={{ mb: 's10' }}
            />
          )}
        />


        <Text onPress={navigateToForgotPasswordScreen} preset="paragraphSmall" bold color="primary">
          Esqueci minha senha
        </Text>

        <Button
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
      </View>
    </Screen>
  );
}
