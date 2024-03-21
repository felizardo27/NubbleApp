import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge">CoffStack</Text>

          <Button title="Primary" mb="s20" />
          <Button title="Primary" mb="s20" loading />
          <Button title="Primary" mb="s20" disabled />

          <Button preset="outline" title="Outline" mb="s20" />
          <Button preset="outline" title="Outline" mb="s20" disabled />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
