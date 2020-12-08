import * as ReactRouter from '@thinman/react-router';
import * as ReactRouterNative from '@thinman/react-router-native';

describe('@thinman/react-router-native', () => {
  for (let key in ReactRouter) {
    it(`re-exports ${key} from react-router`, () => {
      expect(ReactRouterNative[key]).toBe(ReactRouter[key]);
    });
  }
});
