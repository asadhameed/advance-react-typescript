import { combineReducers } from "redux";

import { commentReducer } from "./comments";
export interface StoreState {
  comments: string[];
}
export const reducers = combineReducers<StoreState>({
  comments: commentReducer,
});
