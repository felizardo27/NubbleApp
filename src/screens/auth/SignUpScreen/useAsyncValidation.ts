import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {useAuthIsEmailAvailable, useAuthIsUsernameAvailable} from '@domain';

import {SignUpSchema} from './signUpSchema';

interface Props {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
}

type ReturnValues = {
  errorMessage: string | undefined;
  notReady: boolean;
  isFetching: boolean;
  isInvalid: boolean;
};

export function useAsyncValidation({watch, getFieldState}: Props): {
  usernameValidation: ReturnValues;
  emailValidation: ReturnValues;
} {
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameValid = !usernameState.invalid && usernameState.isDirty;
  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: usernameValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailValid = !emailState.invalid && emailState.isDirty;
  const emailQuery = useAuthIsEmailAvailable({
    email,
    enabled: emailValid,
  });

  return {
    usernameValidation: {
      errorMessage: usernameQuery.isUnavailable
        ? 'username indisponível'
        : undefined,
      notReady: usernameQuery.isFetching || usernameQuery.isUnavailable,
      isFetching: usernameQuery.isFetching,
      isInvalid: usernameQuery.isUnavailable || !usernameValid,
    },
    emailValidation: {
      errorMessage: emailQuery.isUnavailable
        ? 'e-mail indisponível'
        : undefined,
      notReady: emailQuery.isFetching || emailQuery.isUnavailable,
      isFetching: emailQuery.isFetching,
      isInvalid: emailQuery.isUnavailable || !emailValid,
    },
  };
}
