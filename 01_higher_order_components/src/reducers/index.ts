import { combineReducers } from "redux";

import { commentReducer } from "./comments";
import { authReducer } from "./authentication";
export interface StoreState {
  comments: string[];
  auth: boolean;
}
export const reducers = combineReducers<StoreState>({
  comments: commentReducer,
  auth: authReducer,
});
