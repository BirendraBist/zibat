import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';
import { UsersEntity } from './users.models';

export const  buildUserSession = createAction ('[Users] Build User Session');




export const init = createAction('[Users Page] Init');

export const buildUserSessionSuccess = createAction(
  '[Users] Build User SessionSuccess',
  props<{ user: User}>()
);

export const buildUserSessionFailure = createAction ('[Users] Build User Session failed');
