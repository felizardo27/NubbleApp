import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
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
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
