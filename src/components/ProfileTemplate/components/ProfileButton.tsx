import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Button, ButtonProps} from '@components';
import {useFollowUser} from '@domain';

type ButtonVariants =
  | 'myProfile'
  | 'isFollowing'
  | 'isNotFollowing'
  | 'loading';

const buttonVariants: Record<
  ButtonVariants,
  Pick<ButtonProps, 'title' | 'preset' | 'loading'>
> = {
  myProfile: {
    title: 'Editar Perfil',
    preset: 'gray',
  },
  isFollowing: {
    title: 'Mensagem',
    preset: 'primary',
  },
  isNotFollowing: {
    title: 'Seguir',
    preset: 'outline',
  },
  loading: {
    title: 'Seguir',
    preset: 'outline',
    loading: true,
  },
};

type ProfileButtonProps = {
  isMyProfile?: boolean;
  isFollowing?: boolean;
  userId: number;
};

export function ProfileButton({
  isMyProfile,
  isFollowing,
  userId,
}: ProfileButtonProps) {
  const navigation = useNavigation();
  const {followUser, isLoading} = useFollowUser();
  const variants = getVariants({isFollowing, isMyProfile, isLoading});
  const buttonProps = buttonVariants[variants];

  function handleOnPress() {
    switch (variants) {
      case 'isFollowing':
        // TODO: Message Screen
        break;
      case 'isNotFollowing':
        followUser(userId);
        break;
      case 'myProfile':
        navigation.navigate('EditProfileScreen', {userId});
        break;
    }
  }

  return (
    <Button onPress={handleOnPress} {...buttonProps} marginVertical="s24" />
  );
}

function getVariants({
  isFollowing,
  isMyProfile,
  isLoading,
}: Pick<ProfileButtonProps, 'isFollowing' | 'isMyProfile'> & {
  isLoading: boolean;
}): ButtonVariants {
  if (isLoading) {
    return 'loading';
  }
  if (isMyProfile) {
    return 'myProfile';
  }
  if (isFollowing) {
    return 'isFollowing';
  }
  return 'isNotFollowing';
}
