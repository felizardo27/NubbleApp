import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

const CAMERA_WIDTH = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_WIDTH) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const {top} = useAppSafeArea();
  const [flashOn, setFlashOn] = useState(false);

  function toggleFlash() {
    setFlashOn(!flashOn);
  }

  return (
    <Box flex={1}>
      <Box backgroundColor="grayWhite" style={StyleSheet.absoluteFill} />

      <Box flex={1} justifyContent="space-between">
        <Box {...$controlAreaTop} style={{paddingTop: top}}>
          <Icon
            size={20}
            color="grayWhite"
            name="arrowLeft"
            onPress={navigation.goBack}
          />
          <Icon
            size={20}
            color="grayWhite"
            name={flashOn ? 'flashOn' : 'flashOff'}
            onPress={toggleFlash}
          />
          <Box width={20} />
        </Box>
        <Box {...$controlAreaBottom}>
          <Icon size={80} color="grayWhite" name="cameraClick" />
        </Box>
      </Box>
    </Box>
  );
}

const $controlAreaTop: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT - CONTROL_DIFF,
  paddingHorizontal: 's24',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
};

const $controlAreaBottom: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT + CONTROL_DIFF,
  alignItems: 'center',
  justifyContent: 'center',
};
