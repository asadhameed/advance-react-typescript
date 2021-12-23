import { ActionType } from "actions/actionTypes";
import { saveComment } from "actions/commentAction";
describe("Save Comment", () => {
  test("has the correct type", () => {
    const action = saveComment("saveComment");
    expect(action.type).toEqual(ActionType.SaveComment);
  });
  test("has the correct payload", () => {
    const action = saveComment("saveComment");
    expect(action.payload).toEqual("saveComment");
  });
});
