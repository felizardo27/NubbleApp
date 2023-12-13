import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text italic preset="headingLarge">
        CoffStack
      </Text>
      <Text preset="headingLarge" style={{fontFamily: 'Satoshi-Italic'}}>
        CoffStack
      </Text>
      <Text preset="headingMedium" style={{color: 'red'}}>
        CoffStack
      </Text>
      <Text preset="paragraphCaption">CoffStack</Text>
    </SafeAreaView>
  );
}

export default App;
