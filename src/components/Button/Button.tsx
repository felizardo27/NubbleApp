import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: '#074C4E',
        alignItems: 'center',
        borderRadius: 16,
      }}>
      <Text style={{color: '#fff'}} preset="paragraphMedium" bold>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
