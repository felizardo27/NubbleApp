import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {
  Text,
  ProfileAvatar,
  PressableBox,
  PressableBoxProps,
  ProfileAvatarProps,
  Box,
} from '@components';
import {User} from '@domain';
import {useAppNavigation} from '@hooks';

type Props = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageURL'>;
  RightComponent?: React.ReactElement;
} & PressableBoxProps;

export function ProfileUser({
  user,
  onPress,
  avatarProps,
  RightComponent: RigthComponent,
  ...pressableBoxProps
}: Props) {
  const navigate = useAppNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigate.toProfile(user?.id);
  }

  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s16"
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar
          {...avatarProps}
          imageURL={user.profileUrl}
          authorId={user.id}
        />
        <Text preset="paragraphMedium" semiBold ml="s12">
          {user.username}
        </Text>
      </Box>
      {RigthComponent}
    </PressableBox>
  );
}
