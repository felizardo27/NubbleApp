export {};

//@ts-ignore
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import {inMemoryStorage} from '../services/storage/implementation/jest/inMemoryStorage';
import {initializeStorage} from '../services/storage/storage';
jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('@react-native-camera-roll/camera-roll', () => ({
  CameraRoll: {
    getPhotos: jest.fn(async () => ({
      edges: [
        {node: {image: {uri: 'image-1'}}},
        {node: {image: {uri: 'image-2'}}},
        {node: {image: {uri: 'image-3'}}},
      ],
    })),
  },
}));

initializeStorage(inMemoryStorage);
