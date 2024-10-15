import React from 'react';
import {Linking} from 'react-native';

import {PermissionName, usePermission} from '@services';

import {ActivityIndicator, Button, Screen, Text} from '@components';

interface PermissionManagerProps {
  permissionName: PermissionName;
  description: string;
  children: React.ReactElement;
}

export function PermissionManager({
  permissionName,
  description,
  children,
}: PermissionManagerProps) {
  const {status, isLoading} = usePermission(permissionName);

  if (status === 'granted') {
    return children;
  }

  return (
    <Screen flex={1} justifyContent="center" alignItems="center">
      <Text preset="headingSmall" textAlign="center" color="error">
        {description}
      </Text>
      {isLoading && <ActivityIndicator color="primary" />}
      {status === 'never_ask_again' && (
        <Button
          title="Abrir configurações"
          mt="s16"
          onPress={Linking.openSettings}
        />
      )}
    </Screen>
  );
}
