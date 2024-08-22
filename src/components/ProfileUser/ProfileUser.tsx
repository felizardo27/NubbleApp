import React from 'react';
import {Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Text, Box, ProfileAvatar} from '@components';
import {User} from '@domain';

type Props = {user: Pick<User, 'username' | 'profileUrl' | 'id'>};

export function ProfileUser({user}: Props) {
  const navigation = useNavigation();

  function navigationToProfile() {
    navigation.navigate('ProfileScreen', {userId: user.id});
  }

  return (
    <Pressable onPress={navigationToProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={user.profileUrl} />
        <Text preset="paragraphMedium" semiBold ml="s12">
          {user.username}
        </Text>
      </Box>
    </Pressable>
  );
}
