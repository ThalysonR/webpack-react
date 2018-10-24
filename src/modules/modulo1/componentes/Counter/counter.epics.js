import { ofType } from 'redux-observable';
import { delay, mapTo, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const incAsync = action$ => action$.pipe(
  ofType('INC_ASYNC'),
  delay(500),
  mapTo({ type: 'INC' }),
  catchError(err => of({ type: 'FAIL' }))
);
