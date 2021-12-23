import { render, screen } from "@testing-library/react";

import Root from "Root";
import { CommentList } from "components/CommentList";

describe("Default React test File CommentBox.tsx", () => {
  const setup = () => {
    const initialState = { comments: ["Comment 1", "Comment 2"] };
    render(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  };
  test("Create one LI per comment", () => {
    setup();
    const li = screen.getAllByRole("listitem");

    expect(li.length).toEqual(2);
  });
  test("Shows the text of each comment", () => {
    setup();
    const li = screen.getAllByRole("listitem");
    expect(li[0].innerHTML).toEqual("Comment 1");
    expect(li[1].innerHTML).toEqual("Comment 2");
  });
});
