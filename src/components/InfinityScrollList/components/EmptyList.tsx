import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

export interface EmptyListProps {
  loading: boolean;
  error: boolean | null;
  refetch: () => void;
  emptyMessage?: string;
  errorMessage?: string;
}

export function EmptyList({
  loading,
  error,
  refetch,
  emptyMessage = 'Não há publicações no seu feed',
  errorMessage = 'Não foi possível carregar o seu feed 😢',
}: EmptyListProps) {
  let component = (
    <Text bold preset="paragraphMedium">
      {emptyMessage}
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb="s16">
          {errorMessage}
        </Text>
        <Button title="Recarregar" preset="outline" onPress={refetch} />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
