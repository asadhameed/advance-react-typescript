import { Action } from "../reducers/comments";
import { ActionType } from "./actionTypes";
export const saveComment = (comment: string): Action => {
  return {
    type: ActionType.AddComment,
    payload: comment,
  } as Action;
};
