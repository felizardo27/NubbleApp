import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>

export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  function submitForm() {
    navigation.navigate('SuccessScreen', {
      title: 'Enviamos as instruções para seu e-mail',
      description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary'
      }
    })
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite o seu e-mail"
        boxProps={{ mb: 's40' }}
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  )
}