import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '@routes';

import {AppStackParamList} from './AppStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;
