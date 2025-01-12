import React, {useRef, useState} from 'react';

import {Button, Screen} from '@components';
import {useUserGetById} from '@domain';
import {AppScreenProps} from '@routes';

import {
  EditProfileForm,
  EditProfileFormRef,
} from './components/EditProfileForm';
import {EditProfileHeader} from './components/EditProfileHeader';

export function EditProfileScreen({
  route,
}: AppScreenProps<'EditProfileScreen'>) {
  const {user} = useUserGetById(route.params.userId);
  const [formIsValid, setFormIsValid] = useState(false);

  const formRef = useRef<EditProfileFormRef>(null);

  function submitForm() {
    formRef.current?.onSubmit();
  }

  return (
    <Screen canGoBack title="Editar Perfil">
      <EditProfileHeader user={user} />
      {user && (
        <EditProfileForm
          ref={formRef}
          user={user}
          onChangeIsValid={setFormIsValid}
        />
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
