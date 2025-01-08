import React, {useState} from 'react';

import {Button, Screen} from '@components';
import {useUserGetById} from '@domain';
import {AppScreenProps} from '@routes';

import {EditProfileForm} from './components/EditProfileForm';
import {EditProfileHeader} from './components/EditProfileHeader';

export function EditProfileScreen({
  route,
}: AppScreenProps<'EditProfileScreen'>) {
  const {user} = useUserGetById(route.params.userId);
  const [formIsValid, setFormIsValid] = useState(false);

  function submitForm() {}

  return (
    <Screen canGoBack title="Editar Perfil">
      <EditProfileHeader user={user} />
      {user && <EditProfileForm user={user} onChangeIsValid={setFormIsValid} />}

      <Button
        title="Salvar alterações"
        mt="s40"
        onPress={submitForm}
        disabled={!formIsValid}
      />
    </Screen>
  );
}
