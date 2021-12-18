import { Action } from "../reducers/comments";
import { ActionType } from "./actionTypes";
export const saveComment = (comment: string): Action => {
  return {
    type: ActionType.SaveComment,
    payload: comment,
  } as Action;
};
