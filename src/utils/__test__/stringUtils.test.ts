import {stringUtils} from '@utils';

test('capitalizeFirstLetter', () => {
  stringUtils.capitalizeFirstLetter('Ana maria'); // Ana Maria
  stringUtils.capitalizeFirstLetter('Ana MARIA'); // Ana Maria
  stringUtils.capitalizeFirstLetter('MaRIa'); // Maria

  const nome = stringUtils.capitalizeFirstLetter('Ana maria');

  expect(nome).toBe('Ana Maria');
});
