import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CommentBox } from "components/CommentBox";

/**************************************************************
 * One Solution
 ********************************************************/

// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import { reducers } from "reducers/";

/**************************************************************
 * 2nd Solution
 ********************************************************/
import Root from "Root";

describe("Default React test File CommentBox.tsx", () => {
  const setup = () =>
    render(
      //  <Provider store={createStore(reducers, {})}>
      <Root>
        <CommentBox />
      </Root>

      //    </Provider>
    );
  beforeEach(() => {});
  test("Has a text and button", () => {
    setup();
    const h4Text = screen.getByRole("heading", { name: "Add a comment" });
    const textArea = screen.getByRole("textbox", { name: "" });
    const btnSubmit = screen.getByRole("button", { name: "Submit" });

    expect(h4Text).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
    expect(btnSubmit).toBeInTheDocument();
  });

  describe("textArea", () => {
    let textArea: HTMLElement;
    const updateTextArea = (): void => {
      textArea = screen.getByRole("textbox", { name: "" });
      fireEvent.change(textArea, { target: { value: "NewValue" } });
    };

    test("has a text area that users can type is", () => {
      setup();

      /****************************************************
       * Comment this area because beforeEach will running and update the textarea
       *********************************************************/

      // const textArea = screen.getByRole("textbox", { name: "" });
      // expect(textArea.textContent).toBe("");
      // fireEvent.change(textArea, { target: { value: "NewValue" } });
      updateTextArea();
      expect(textArea).toBeInTheDocument();
      expect(textArea.textContent).toBe("NewValue");
    });

    test("after Submit textArea will empty", () => {
      setup();
      updateTextArea();
      const btnSubmit = screen.getByRole("button", { name: "Submit" });
      // const textArea = screen.getByRole("textbox", { name: "" });
      // fireEvent.change(textArea, { target: { value: "NewValue" } });

      fireEvent.click(btnSubmit);
      expect(textArea.textContent).toBe("");
    });
  });
});
