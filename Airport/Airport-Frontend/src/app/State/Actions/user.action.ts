import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/Interfaces';

export const Login = createAction(
  '[User] Login',
  props<{ email: string, password: string }>()
);

export const LoginSuccess = createAction(
  '[User] Login Success',
  props<{ user: User }>()
);

export const LoginFailure = createAction(
  '[User] Login Failure',
  props<{ error: any }>()
);

export const Register = createAction(
  '[User] Register',
  props<{ name: string, email: string, password: string }>()
);

export const RegisterSuccess = createAction(
  '[User] Register Success',
  props<{ user: User }>()
);

export const RegisterFailure = createAction(
  '[User] Register Failure',
  props<{ error: any }>()
);
