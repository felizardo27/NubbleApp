import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';
import {renderHook} from 'test-utils';

import {theme} from '@theme';

import {useAppSafeArea} from '../useAppSafeArea';

jest.mock('react-native-safe-area-context');

const mokedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);
describe('useAppSafeArea', () => {
  test('when the safe area is less than minimum requirement, returns the minimum requirement', () => {
    mokedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 5, bottom: 5} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s32);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });

  test('when the safe area is greater than minimum requirement, returns the safe area', () => {
    mokedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 40, bottom: 40} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(40);
    expect(result.current.bottom).toEqual(40);
  });
});
