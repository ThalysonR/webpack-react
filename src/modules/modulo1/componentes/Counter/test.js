import { shallow } from 'enzyme';
import * as ActionsD from './counter.actions';
import { Actions } from './index';

test('equality', () => {
  expect({ ...Actions }).toBe({ ...ActionsD });
});
