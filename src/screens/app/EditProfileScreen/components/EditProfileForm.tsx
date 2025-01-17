import React, {useEffect, useImperativeHandle} from 'react';
import {View} from 'react-native';

import {useAsyncValidation} from '@form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {ActivityIndicator, FormTextInput, Icon} from '@components';
import {authService, User, useUserUpdate} from '@domain';

import {editProfileSchema, EditProfileSchema} from '../editProfileSchema';

type Props = {
  user: User;
  onChangeIsValid: (isValid: boolean) => void;
  onChangeIsLoading: (i: boolean) => void;
};

export type EditProfileFormRef = {
  onSubmit: () => void;
};

export function EditProfileFormComponent(
  {user, onChangeIsValid, onChangeIsLoading}: Props,
  ref: React.Ref<EditProfileFormRef>,
) {
  const navigation = useNavigation();
  const {updateUser, isLoading} = useUserUpdate({
    onSuccess: () => {
      navigation.goBack();
    },
  });
  const {control, watch, getFieldState, formState, handleSubmit} =
    useForm<EditProfileSchema>({
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

  useEffect(() => {
    onChangeIsValid(formState.isValid && !usernameValidation.notReady);
  }, [formState.isValid, onChangeIsValid, usernameValidation.notReady]);

  useImperativeHandle(ref, () => ({
    onSubmit: () => {
      handleSubmit(formValues => updateUser(formValues))();
    },
  }));

  useEffect(() => {
    onChangeIsLoading(isLoading);
  }, [isLoading, onChangeIsLoading]);

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

export const EditProfileForm = React.forwardRef(EditProfileFormComponent);
