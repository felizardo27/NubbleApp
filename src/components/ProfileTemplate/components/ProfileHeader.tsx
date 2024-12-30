import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Text, Box, ProfileAvatar, Icon, BackButton} from '@components';
import {User} from '@domain';

import {ProfileButton} from './ProfileButton';
import {ProfileMetaData} from './ProfileMetaData';

type Props = {
  user: User;
  isMyProfile?: boolean;
  publicationCount: string;
};

export function ProfileHeader({user, isMyProfile, publicationCount}: Props) {
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
          publicationCount={publicationCount}
          followersCount={user.meta.followersCount}
          followingCount={user.meta.followingCount}
        />
        {isMyProfile ? (
          <Box position="absolute" alignSelf="flex-end">
            <Icon
              size={30}
              name="settings"
              onPress={() => navigation.navigate('SettingsScreen')}
            />
          </Box>
        ) : (
          <Box position="absolute" alignSelf="flex-start" left={-24}>
            <BackButton />
          </Box>
        )}
      </Box>
      <ProfileButton isMyProfile={isMyProfile} isFollowing={true} />
    </Box>
  );
}
