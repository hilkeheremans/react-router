import * as ReactRouter from '@thinman/react-router';
import * as ReactRouterDOM from '@thinman/react-router-dom';

describe('@thinman/react-router-dom', () => {
  for (let key in ReactRouter) {
    it(`re-exports ${key} from react-router`, () => {
      expect(ReactRouterDOM[key]).toBe(ReactRouter[key]);
    });
  }
});
