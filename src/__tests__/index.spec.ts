import { useCSSClass } from '../index';

test('useCSSClass', () => {
  expect(
    useCSSClass({
      default: true,
      notadded: false,
      added: true,
    }),
  ).toBe('default added');
});
