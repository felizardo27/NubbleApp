import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Screen, Text, Button, FormTextInput } from "@components";
import { RootStackParamList } from "@routes";
import { useResetNavigationSuccess } from "@hooks";
import { forgotPasswordSchema, ForgotPasswordSchema } from './forgotPasswordSchema';



type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>

export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();
  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    },
    mode: "onChange"
  })

  function submitForm(values: ForgotPasswordSchema) {
    console.log(values)
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary'
      },
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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite o seu e-mail"
        boxProps={{ mb: "s40" }}
      />
      <Button 
        onPress={handleSubmit(submitForm)} 
        disabled={!formState.isValid} 
        title="Recuperar senha" 
      />
    </Screen>
  )
}