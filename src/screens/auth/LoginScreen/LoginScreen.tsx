import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  useEffect(() => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    setEmailErrorMessage(isValidEmail ? '' : 'E-mail inválido');
  }, [email])

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm() {
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

        <TextInput
          errorMessage={emailErrorMessage}
          value={email}
          onChangeText={setEmail}
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{ mb: 's20' }}
        />

        <PasswordInput
          value={password}
          onChangeText={setPassword}
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{ mb: 's10' }}
        />

        <Text onPress={navigateToForgotPasswordScreen} preset="paragraphSmall" bold color="primary">
          Esqueci minha senha
        </Text>

        <Button 
          onPress={submitForm} 
          disabled={!!emailErrorMessage || password.length < 6} 
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
