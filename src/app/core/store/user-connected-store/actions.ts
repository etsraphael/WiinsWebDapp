import { Action } from '@ngrx/store';
import { UserModel } from '../../model/user/user.model';

export enum ActionTypes {
  LOG_IN_USER = '@user-login/start',
  LOG_IN_USER_SUCCESS = '@user-login/success',
  LOG_IN_USER_FAIL = '@user-login/fail',

  LOG_OUT_USER = '@user-logout',
}

export class LogInUser implements Action {
  readonly type = ActionTypes.LOG_IN_USER;
  constructor(public payload: UserModel) {}
}

export class LogInUserSuccess implements Action {
  readonly type = ActionTypes.LOG_IN_USER_SUCCESS;
  constructor(public payload: UserModel) {}
}

export class LogInUserFail implements Action {
  readonly type = ActionTypes.LOG_IN_USER_FAIL;
  constructor(public payload: any) {}
}

export type ActionsUser = LogInUser | LogInUserSuccess | LogInUserFail;
