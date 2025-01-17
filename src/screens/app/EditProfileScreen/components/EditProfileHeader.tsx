import React from 'react';
import {Pressable} from 'react-native';

import {Box, BoxProps, ProfileAvatar, Text} from '@components';
import {User} from '@domain';

type Props = {
  user?: User;
} & BoxProps;

export function EditProfileHeader({user, ...boxProps}: Props) {
  function navigateToPhoto() {
    // TODO: add navigate to edit photo
    console.log('navigate to edit photo');
  }

  if (!user) {
    return null;
  }

  return (
    <Box flexDirection="row" alignItems="center" {...boxProps}>
      <ProfileAvatar imageURL={user.profileUrl} size={64} borderRadius={24} />
      <Pressable hitSlop={10} onPress={navigateToPhoto}>
        <Text preset="paragraphMedium" bold color="primary" ml="s16">
          Alterar foto
        </Text>
      </Pressable>
    </Box>
  );
}
