import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, PressableBox, Text} from '@components';

type Props = {
  followersCount: string;
  followingCount: string;
  publicationCount: string;
  isMyProfile?: boolean;
};

export function ProfileMetaData({
  followersCount,
  followingCount,
  publicationCount,
  isMyProfile,
}: Props) {
  const navigation = useNavigation();

  const items: ItemType[] = [
    {value: publicationCount, label: 'Publicações'},
    {
      value: followersCount,
      label: 'Seguidores',
      onPress: () => navigation.navigate('MyFollowersScreen'),
    },
    {
      value: followingCount,
      label: 'Seguindo',
      onPress: () => navigation.navigate('MyFollowingScreen'),
    },
  ];

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      mt="s24"
      columnGap="s32">
      {items.map(item => (
        <Item isMyProfile={isMyProfile} key={item.label} {...item} />
      ))}
    </Box>
  );
}

type ItemType = {
  value: string;
  label: string;
  onPress?: () => void;
};

function Item({
  value,
  label,
  onPress,
  isMyProfile,
}: ItemType & {isMyProfile?: boolean}) {
  return (
    <PressableBox onPress={onPress} alignItems="center" disabled={!isMyProfile}>
      <Text preset="headingSmall">{value}</Text>
      <Text preset="paragraphSmall">{label}</Text>
    </PressableBox>
  );
}
