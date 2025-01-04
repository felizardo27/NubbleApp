import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Button, ButtonProps} from '@components';

type ButtonVariants = 'myProfile' | 'isFollowing' | 'isNotFollowing';

const buttonVariants: Record<
  ButtonVariants,
  Pick<ButtonProps, 'title' | 'preset'>
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
};

type ProfileButtonProps = {
  isMyProfile?: boolean;
  isFollowing?: boolean;
};

export function ProfileButton({isMyProfile, isFollowing}: ProfileButtonProps) {
  const navigation = useNavigation();
  const variants = getVariants({isFollowing, isMyProfile});
  const buttonProps = buttonVariants[variants];

  function handleOnPress() {
    //TODO:
    if (isMyProfile) {
      navigation.navigate('EditProfileScreen');
    }
  }

  return (
    <Button onPress={handleOnPress} {...buttonProps} marginVertical="s24" />
  );
}

function getVariants({
  isFollowing,
  isMyProfile,
}: ProfileButtonProps): ButtonVariants {
  if (isMyProfile) {
    return 'myProfile';
  }
  if (isFollowing) {
    return 'isFollowing';
  }
  return 'isNotFollowing';
}
