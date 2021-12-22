import axios from "axios";
import {
  ActionType,
  SaveAction,
  FetchAction,
  Authentication,
} from "./actionTypes";
export const saveComment = (comment: string): SaveAction => {
  return {
    type: ActionType.SaveComment,
    payload: comment,
  };
};

export const fetchComments = async (): Promise<FetchAction> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  let comments = [];

  if (response.status === 200) {
    comments = response.data.map(
      (comment: { name: string }): string => comment.name
    );
  }

  return {
    type: ActionType.FetchComments,
    payload: comments,
  };
};

export const changeAuth = (isLoggedIn: boolean): Authentication => {
  return {
    type: ActionType.ChangeAuth,
    payload: isLoggedIn,
  };
};
