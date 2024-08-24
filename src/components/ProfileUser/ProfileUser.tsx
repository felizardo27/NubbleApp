import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  Text,
  ProfileAvatar,
  PressableBox,
  PressableBoxProps,
} from '@components';
import {User} from '@domain';

type Props = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
} & PressableBoxProps;

export function ProfileUser({user, onPress, ...pressableBoxProps}: Props) {
  const navigation = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigation.navigate('ProfileScreen', {userId: user.id});
  }

  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      mb="s16"
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <ProfileAvatar imageURL={user.profileUrl} />
      <Text preset="paragraphMedium" semiBold ml="s12">
        {user.username}
      </Text>
    </PressableBox>
  );
}
