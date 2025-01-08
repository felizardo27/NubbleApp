import React from 'react';
import {View} from 'react-native';

import {useAsyncValidation} from '@form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {ActivityIndicator, FormTextInput, Icon} from '@components';
import {authService, User} from '@domain';

import {editProfileSchema, EditProfileSchema} from '../editProfileSchema';

type Props = {
  user: User;
};

export function EditProfileForm({user}: Props) {
  const {control, watch, getFieldState} = useForm<EditProfileSchema>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    mode: 'onChange',
  });

  const usernameValidation = useAsyncValidation({
    watch,
    getFieldState,
    fieldName: 'username',
    isAvailableFunc: authService.isUserNameAvailable,
    errorMessage: 'username inválido',
  });

  return (
    <View>
      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        errorMessage={usernameValidation.errorMessage}
        boxProps={{mb: 's16'}}
        rightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : usernameValidation.isInvalid ? (
            <Icon name="errorRound" color="redError" size={20} />
          ) : (
            <Icon name="checkRound" color="greenSuccess" size={20} />
          )
        }
      />

      <FormTextInput
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's16'}}
      />

      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's16'}}
      />
    </View>
  );
}
