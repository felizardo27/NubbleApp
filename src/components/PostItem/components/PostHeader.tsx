import React from 'react';
import {Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Text, Box, ProfileAvatar} from '@components';
import {Post} from '@domain';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  const navigation = useNavigation();

  function navigationToProfile() {
    navigation.navigate('ProfileScreen', {userId: author.id});
  }

  return (
    <Pressable onPress={navigationToProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text preset="paragraphMedium" semiBold ml="s12">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
