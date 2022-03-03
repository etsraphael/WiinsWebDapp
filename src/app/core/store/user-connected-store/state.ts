import { UserModel } from "../../model/user/user.model";

export interface State {
  user?: UserModel;
  isLoading?: boolean;
  error?: string;
  message?: string;
}

export const initialState: State = {
  user: null!,
  isLoading: false,
  error: null!,
  message: null!
};
