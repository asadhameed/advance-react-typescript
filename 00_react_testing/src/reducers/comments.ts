import { ActionType, Action } from "actions/actionTypes";

export const commentReducer = (
  state: string[] = [],
  action: Action
): string[] => {
  switch (action.type) {
    case ActionType.SaveComment:
      return [...state, action.payload];
    case ActionType.FetchComments:
      return [...state, ...(action.payload as string[])];
    default:
      return state;
  }
};
