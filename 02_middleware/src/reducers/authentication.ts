import { ActionType, Authentication } from "actions/actionTypes";

export const authReducer = (state = false, action: Authentication) => {
  switch (action.type) {
    case ActionType.ChangeAuth:
      return action.payload;
    default:
      return state;
  }
};
