import React from 'react';

import {SafeAreaView, TextInput, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Icon} from './src/components/Icon/Icon';
import {Button} from './src/components/Button/Button';

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

          <Box mb="s20">
            <TextInput
              style={{borderWidth: 1, height: 50, borderRadius: 12}}
              placeholder="Digite seu e-mail"
            />
          </Box>

          <Box>
            <TextInput
              style={{borderWidth: 1, height: 50, borderRadius: 12}}
              placeholder="Digite sua senha"
            />
          </Box>
          <Text preset="paragraphSmall" bold color="primary" mt="s8">
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
