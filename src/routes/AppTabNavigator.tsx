import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon, Text} from '@components';
import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens';

export type AppTabBottomParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomParamList>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              semiBold
              preset="paragraphCaption"
              color={focused ? 'primary' : 'backgroundContrast'}>
              Início
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'homeFill' : 'home'}
              color={focused ? 'primary' : 'backgroundContrast'}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}
