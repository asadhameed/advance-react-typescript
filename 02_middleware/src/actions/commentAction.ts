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
  let comments = [];

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    if (response.status === 200) {
      comments = response.data.map(
        (comment: { name: string }): string => comment.name
      );
    }
  } catch (error) {}

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
