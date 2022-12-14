import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { catchError, concat, concatMap, map, of } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';
import { UsersService } from '../services/users.service';

import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';

@Injectable()
export class UsersEffects {

  bulidUserSession$ = createEffect(() => this.actions$.pipe(ofType(UsersActions.buildUserSession),
    concatMap(() => {
      if (this.localstorageService.isValidToken()) {
        const userId = this.localstorageService.getUserIdFromToken();
        if (userId) {
          return this.usersService.getUser(userId).pipe(
            map((user) => {
              return UsersActions.buildUserSessionSuccess({ user: user })
            }),
            catchError(() => of(UsersActions.buildUserSessionFailure()))
          );
        } else {
          return of(UsersActions.buildUserSessionFailure())

        }

      } else {
        return of(UsersActions.buildUserSessionFailure())

      }
    })
  ))
  constructor(private readonly actions$: Actions, private localstorageService: LocalstorageService, private usersService: UsersService) { }
}
