import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {multimediaService} from '@services';
import {
  Camera,
  useCameraDevice,
  CameraPosition,
} from 'react-native-vision-camera';

import {Box, BoxProps, Icon, PermissionManager} from '@components';
import {useAppSafeArea, useAppState} from '@hooks';
import {AppScreenProps} from '@routes';

const CAMERA_WIDTH = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_WIDTH) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const {top} = useAppSafeArea();
  const [flashOn, setFlashOn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [cameraPosition, setCameraPosition] = useState<CameraPosition>('back');
  const device = useCameraDevice(cameraPosition);

  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active';

  const camera = useRef<Camera>(null);

  function toggleFlash() {
    setFlashOn(!flashOn);
  }

  function togglePosition() {
    setCameraPosition(prev => (prev === 'back' ? 'front' : 'back'));
  }

  async function takePhoto() {
    if (camera.current) {
      const photoFile = await camera.current?.takePhoto({
        flash: flashOn ? 'on' : 'off',
        qualityPrioritization: 'quality',
      });

      navigation.navigate('PublishPostScreen', {
        imageUri: multimediaService.prepareImageUri(photoFile.path),
      });
    }
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nubble acessar a camera">
      <Box flex={1}>
        {device != null && (
          <Camera
            ref={camera}
            photo={true}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            onInitialized={() => setIsReady(true)}
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
            <Icon
              size={20}
              color="grayWhite"
              name={'cameraRotate'}
              onPress={togglePosition}
            />
            {/* <Box width={20} /> */}
          </Box>
          <Box {...$controlAreaBottom}>
            {isReady && (
              <Icon
                size={80}
                color="grayWhite"
                name="cameraClick"
                onPress={takePhoto}
              />
            )}
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
