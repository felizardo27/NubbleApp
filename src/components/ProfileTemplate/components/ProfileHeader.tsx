import React from 'react';

import {Text, Box, ProfileAvatar} from '@components';
import {User} from '@domain';

import {ProfileMetaData} from './ProfileMetaData';

type Props = {
  user: User;
};

export function ProfileHeader({user}: Props) {
  return (
    <Box alignItems="center">
      <ProfileAvatar imageURL={user?.profileUrl} size={100} borderRadius={40} />
      <Text preset="headingMedium" mt="s16">
        {user?.fullName}
      </Text>
      <Text preset="paragraphLarge" mt="s4" color="gray1">
        @{user?.username}
      </Text>
      <ProfileMetaData
        publicationCount="100"
        followersCount="840"
        followingCount="421"
      />
    </Box>
  );
}
