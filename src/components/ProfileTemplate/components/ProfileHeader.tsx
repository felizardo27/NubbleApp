import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Text, Box, ProfileAvatar, Icon, Button} from '@components';
import {User} from '@domain';

import {ProfileMetaData} from './ProfileMetaData';

type Props = {
  user: User;
  isMyProfile?: boolean;
};

export function ProfileHeader({user, isMyProfile}: Props) {
  const navigation = useNavigation();

  return (
    <Box paddingHorizontal="s24">
      <Box alignItems="center">
        <ProfileAvatar
          imageURL={user?.profileUrl}
          size={100}
          borderRadius={40}
        />
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
        {isMyProfile && (
          <Box position="absolute" alignSelf="flex-end">
            <Icon
              size={30}
              name="settings"
              onPress={() => navigation.navigate('SettingsScreen')}
            />
          </Box>
        )}
      </Box>
      <Button title="Mensagem" marginVertical="s24" />
    </Box>
  );
}
