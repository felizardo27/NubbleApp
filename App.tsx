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
            flexWrap="wrap"
            gap="s20">
            <Icon name="arrowLeft" size={60} />
            <Icon name="arrowRight" size={60} />
            <Icon name="bell" size={60} />
            <Icon name="bellOn" size={60} />
            <Icon name="bookmark" size={60} />
            <Icon name="bookmarkFill" size={60} />
            <Icon name="camera" size={60} />
            <Icon name="chat" size={60} />
            <Icon name="chatOn" size={60} />
            <Icon name="check" size={60} />
            <Icon name="chevronRight" size={60} />
            <Icon name="comment" size={60} />
            <Icon name="eyeOff" size={60} />
            <Icon name="eyeOn" size={60} />
            <Icon name="flashOff" size={60} />
            <Icon name="flashOn" size={60} />
            <Icon name="heart" size={60} />
            <Icon name="heartFill" size={60} />
            <Icon name="home" size={60} />
            <Icon name="homeFill" size={60} />
            <Icon name="message" size={60} />
            <Icon name="more" size={60} />
            <Icon name="newPost" size={60} />
            <Icon name="profile" size={60} />
            <Icon name="profileFill" size={60} />
            <Icon name="search" size={60} />
            <Icon name="send" size={60} />
            <Icon name="settings" size={60} />
            <Icon name="trash" size={60} />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
