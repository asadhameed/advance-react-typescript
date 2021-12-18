import { ActionType } from "actions/actionTypes";

export interface Action {
  type: ActionType;
  payload: string;
}
export const commentReducer = (
  state: string[] = [],
  action: Action
): string[] => {
  switch (action.type) {
    case ActionType.AddComment:
      return [...state, action.payload];
    default:
      return state;
  }
};
