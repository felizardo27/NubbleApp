import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

import {Box, BoxProps, Icon, PermissionManager} from '@components';
import {useAppSafeArea, useAppState} from '@hooks';
import {AppScreenProps} from '@routes';

const CAMERA_WIDTH = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_WIDTH) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const {top} = useAppSafeArea();
  const [flashOn, setFlashOn] = useState(false);
  const device = useCameraDevice('back');

  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active';

  function toggleFlash() {
    setFlashOn(!flashOn);
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nubble acessar a camera">
      <Box flex={1}>
        {device != null && (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
          />
        )}

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
    </PermissionManager>
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
