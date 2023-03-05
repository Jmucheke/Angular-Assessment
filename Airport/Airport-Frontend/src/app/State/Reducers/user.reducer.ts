import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/Interfaces';
import * as UserActions from '../Actions/user.action';

export interface UserState {
  user: User | null;
  error: any;
  loading: boolean;
}

export const initialUserState: UserState = {
  user: null,
  error: null,
  loading: false
};

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.Login, UserActions.Register, state => ({ ...state, loading: true })),
  on(UserActions.LoginSuccess, UserActions.RegisterSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(UserActions.LoginFailure, UserActions.RegisterFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
