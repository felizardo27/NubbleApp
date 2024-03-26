import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

export function SuccessScreen() {

  function goBackToHome() {
    //TODO:
  }

  return (
    <Screen>
      <Icon name="check" />
      <Text preset="headingLarge" mt="s24">
        Sua conta foi criada com sucesso!
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        Agora é só fazer login na nossa plataforma
      </Text>
      <Button onPress={goBackToHome} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
