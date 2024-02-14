/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App() {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{color: 'red'}}>
        CoffStack
      </Text>
      <Text
        preset="headingLarge"
        style={{fontFamily: 'Satoshi-Black', color: 'red'}}>
        CoffStack
      </Text>
      <Text preset="paragraphMedium">CoffStack</Text>
    </SafeAreaView>
  );
}

export default App;
