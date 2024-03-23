import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <View style={{paddingHorizontal: 24}}>
        <Text mb="s8" preset="headingLarge">
          Olá!
        </Text>
        <Text mb="s40" preset="paragraphLarge">
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput
          errorMessage="Mensagem de erro"
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's20'}}
        />

        <TextInput
          label="Senha"
          placeholder="Digite sua senha"
          rightComponent={<Icon name="eyeOn" color="gray2" />}
          boxProps={{mb: 's10'}}
        />

        <Text preset="paragraphSmall" bold color="primary">
          Esqueci minha senha
        </Text>

        <Button title="Entrar" mt="s48" />
        <Button preset="outline" title="Criar uma conta" mt="s12" />
      </View>
    </Screen>
  );
}
