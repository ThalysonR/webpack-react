import { ofType } from 'redux-observable';
import {
  delay, mapTo, catchError, tap,
} from 'rxjs/operators';
import { of } from 'rxjs';

export const incAsync = action$ => action$.pipe(
  ofType('INC_ASYNC'),
  tap(() => console.log('RXJS !!onze!!')),
  delay(500),
  mapTo({ type: 'INC' }),
  catchError(() => of({ type: 'FAIL' })),
);

export const teste = action$ => action$.pipe(
  ofType('TESTE'),
  mapTo({ type: 'NADA' }),
);

export default ([
  incAsync,
  teste,
]);
