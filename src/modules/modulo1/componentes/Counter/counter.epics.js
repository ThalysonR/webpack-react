import { ofType } from 'redux-observable';
import {
  delay, mapTo, catchError, tap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import ActionTypes from './counter.actions';

export const incAsync = action$ => action$.pipe(
  ofType(ActionTypes.INC_ASYNC),
  tap(() => console.log('RXJS !!onze!!')),
  delay(500),
  mapTo({ type: ActionTypes.INC }),
  catchError(() => of({ type: 'FAIL' })),
);

export default ([
  incAsync,
]);
