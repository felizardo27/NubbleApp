import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text italic preset="headingLarge">
            CoffStack
          </Text>
          <Button
            title="Entrar"
            marginBottom="s24"
            backgroundColor="carrotSecondary"
          />
          <Button loading title="loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
