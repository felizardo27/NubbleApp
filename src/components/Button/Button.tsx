import React from 'react';
import {Text} from '../Text/Text';
import {Box} from '../Box/Box';
import {ActivityIndicator} from 'react-native';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{color: '#fff'}} preset="paragraphMedium" bold>
          {title}
        </Text>
      )}
    </Box>
  );
}
