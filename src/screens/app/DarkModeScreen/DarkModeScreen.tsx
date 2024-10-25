import React, {useState} from 'react';

import {RadioButtonSelector, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

type ThemePreference = 'light' | 'dark' | 'system';

type Option = {
  label: string;
  description?: string;
  themePreference: ThemePreference;
};

const items: Option[] = [
  {
    label: 'Ativado',
    themePreference: 'dark',
  },
  {
    label: 'Desativado',
    themePreference: 'light',
  },
  {
    label: 'Padrão do sistema',
    themePreference: 'system',
    description:
      'A aparência será a mesma que você configurou no seu dispostivo',
  },
];

export function DarkModeScreen({}: AppScreenProps<'DarkModeScreen'>) {
  const [selectedItem, setSelectedItem] = useState<Option>();
  return (
    <Screen canGoBack title="Modo Escuro">
      <RadioButtonSelector
        items={items}
        labelKey="label"
        descriptionKey="description"
        valueKey="themePreference"
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
      />
      <Text preset="paragraphLarge" mt="s48">
        {JSON.stringify(selectedItem, null, 2)}
      </Text>
    </Screen>
  );
}
