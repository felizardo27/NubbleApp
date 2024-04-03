import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchema } from './loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {
  const { control, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
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

  function submitForm({ email, password }: LoginSchema) {
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

      <FormTextInput 
        control={control}
        name='email'
        label='E-mail'
        placeholder='Digite o seu e-mail'
        boxProps={{mb: 's20'}}  
      />

      <FormPasswordInput 
        control={control}
        name='password'
        label='Senha'
        placeholder='Digite a sua senha'
        boxProps={{mb: 's10'}}
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
