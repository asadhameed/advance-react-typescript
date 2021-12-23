import { commentReducer } from "reducers/comments";
import { ActionType } from "actions/actionTypes";

test("handles action of types Save", () => {
  const action = { type: ActionType.SaveComment, payload: "Add Comment" };
  const state: string[] = commentReducer([], action);
  expect(state).toEqual(["Add Comment"]);
});

test("handles action with unknown action", () => {
  const action = { type: ActionType.UnKnowAction, payload: "Add Comment" };
  const state: string[] = commentReducer([], action);
  expect(state).toEqual([]);
});
