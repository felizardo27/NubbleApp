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
          <Button title="primary" marginBottom="s24" />
          <Button preset="outline" title="Outline" marginBottom="s24" />
          <Button preset="secondary" title="Secondary" marginBottom="s24" />
          <Button loading title="loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
