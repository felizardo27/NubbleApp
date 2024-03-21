import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Icon} from './src/components/Icon/Icon';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge">CoffStack</Text>

          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap="s20">
            <Icon name="eyeOn" />
            <Icon name="eyeOff" />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
