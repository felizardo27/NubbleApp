import React, {useRef, useState} from 'react';

import {Button, InputButton, Screen} from '@components';
import {useUserGetById} from '@domain';
import {AppScreenProps} from '@routes';

import {
  EditProfileForm,
  EditProfileFormRef,
} from './components/EditProfileForm';
import {EditProfileHeader} from './components/EditProfileHeader';

export function EditProfileScreen({
  route,
  navigation,
}: AppScreenProps<'EditProfileScreen'>) {
  const {user} = useUserGetById(route.params.userId);
  const [formIsValid, setFormIsValid] = useState(false);

  const formRef = useRef<EditProfileFormRef>(null);

  function submitForm() {
    formRef.current?.onSubmit();
  }

  return (
    <Screen canGoBack title="Editar Perfil">
      <EditProfileHeader user={user} mb="s24" />
      {user && (
        <EditProfileForm
          ref={formRef}
          user={user}
          onChangeIsValid={setFormIsValid}
        />
      )}

      {user && (
        <>
          <InputButton
            label="E-mail"
            value={user.email}
            onPress={() =>
              navigation.navigate('EditEmailScreen', {
                userId: route.params.userId,
              })
            }
            mb="s16"
          />
          <InputButton
            label="Senha"
            value="•••••••"
            onPress={() =>
              navigation.navigate('EditPasswordScreen', {
                userId: route.params.userId,
              })
            }
          />
        </>
      )}

      <Button
        title="Salvar alterações"
        mt="s40"
        onPress={submitForm}
        disabled={!formIsValid}
      />
    </Screen>
  );
}
