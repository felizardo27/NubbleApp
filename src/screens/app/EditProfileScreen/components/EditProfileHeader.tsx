import React from 'react';
import {Pressable} from 'react-native';

import {Box, ProfileAvatar, Text} from '@components';
import {User} from '@domain';

type Props = {
  user?: User;
};

export function EditProfileHeader({user}: Props) {
  function navigateToPhoto() {
    // TODO: add navigate to edit photo
    console.log('navigate to edit photo');
  }

  if (!user) {
    return null;
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <ProfileAvatar imageURL={user.profileUrl} size={64} borderRadius={24} />
      <Pressable hitSlop={10} onPress={navigateToPhoto}>
        <Text preset="paragraphMedium" bold color="primary" ml="s16">
          Alterar foto
        </Text>
      </Pressable>
    </Box>
  );
}
