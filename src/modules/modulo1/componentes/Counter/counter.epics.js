import { ofType } from 'redux-observable';
import {
  delay, mapTo, catchError, tap, flatMap, mergeMap, retry,
} from 'rxjs/operators';
import { of, from } from 'rxjs';
import ActionTypes from './counter.actions';

export const incAsync = (action$, state$, { CoffeeShopApi }) => action$.pipe(
  ofType(ActionTypes.INC_ASYNC),
  mergeMap(() => of(CoffeeShopApi).pipe(
    delay(500),
    flatMap(api => from(api.coffeeShopFind())),
    retry(2),
    tap(valor => console.log(valor)),
    mapTo({ type: ActionTypes.INC }),
    catchError(() => of({ type: 'FAIL' })),
  )),
);

export default ([
  incAsync,
]);
