import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {settingsService} from './settingsService';
import {AppColorScheme, SettingsStore, ThemePreference} from './settingsType';

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      appColor: 'light',
      themePreference: 'light',
      onSystemChange: color => {
        const updatedAppColor = settingsService.onSystemChange(
          color,
          get().themePreference,
        );
        if (updatedAppColor) {
          set({appColor: updatedAppColor});
        }
      },
      setThemePreference: newThemePreference => {
        const updatedAppColor =
          settingsService.onChangePreference(newThemePreference);
        set({appColor: updatedAppColor, themePreference: newThemePreference});
      },
    }),
    {
      name: '@Settings',
      storage: storage,
    },
  ),
);

export function useAppColor(): AppColorScheme {
  const appColor = useSettingsStore(state => state.appColor);
  return appColor;
}

export function useThemePreference(): ThemePreference {
  const themePreference = useSettingsStore(state => state.themePreference);
  return themePreference;
}

export function useSettingsService(): Pick<
  SettingsStore,
  'setThemePreference' | 'onSystemChange'
> {
  const setThemePreference = useSettingsStore(
    state => state.setThemePreference,
  );
  const onSystemChange = useSettingsStore(state => state.onSystemChange);

  return {
    setThemePreference,
    onSystemChange,
  };
}
