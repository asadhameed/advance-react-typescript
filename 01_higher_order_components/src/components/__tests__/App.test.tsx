import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "components/App";
import Root from "Root";

/*****************************************
 * 1. jest.mock("../components/CommentBox", () => () => <div>this is mock</div>);
 * this will give an error because the component is not return default
 * 2. IF we don't import "@testing-library/jest-dom"; in typescript
 * the we will get the following error
 * TypeError: expect(...).toBeInTheDocument is not a function
 ***********************************/
jest.mock("components/CommentBox", () => {
  return {
    CommentBox: () => <div>CommentBox</div>,
  };
});
jest.mock("components/CommentList");

describe("This is the React default  test FileName App.tsx", () => {
  beforeEach(() => {});
  /************************************
   * Remove this test case because now Comment box can access
   *
   */
  // test("Shows a comment box", () => {
  //   render(
  //     <Root>
  //       <App />
  //     </Root>
  //   );
  //   const commentBox = screen.getByText(/CommentBox/i);
  //   expect(commentBox).toBeInTheDocument();
  // });

  test("Show a comment list", () => {
    render(
      <Root>
        <App />
      </Root>
    );
    const commentList = screen.getByText(/CommentList/i);
    expect(commentList).toBeInTheDocument();
  });
});
