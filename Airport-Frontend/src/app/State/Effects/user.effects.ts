import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import * as UserActions from '../Actions/user.action';


@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) { }
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.Login),
      switchMap(({ email, password }) =>
        this.authenticationService.login(email, password).pipe(
          map(user => UserActions.LoginSuccess( user )),
          catchError(error => of(UserActions.LoginFailure({ error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.Register),
      switchMap(({ name, email, password }) =>
        this.authenticationService.register(name, email, password).pipe(
          map(user => UserActions.RegisterSuccess( user)),
          catchError(error => of(UserActions.RegisterFailure({ error })))
        )
      )
    )
  );


}
