import { CommentBox } from "components/CommentBox";

import { mount, ReactWrapper } from "enzyme";
describe.skip("Enzyme test File CommentBox.tsx", () => {
  let wrapped: ReactWrapper;
  beforeEach(() => {
    wrapped = mount(<CommentBox />);
  });

  afterEach(() => {
    wrapped.unmount();
  });
  it.skip("Has a text and button", () => {
    expect(wrapped.find("button").length).toEqual(1);
    expect(wrapped.find("textarea").length).toEqual(1);
  });
  describe("update Textarea", () => {
    beforeEach(() => {
      wrapped
        .find("textarea")
        .simulate("change", { target: { value: "NewValue" } });
      wrapped.update();
    });
    it("has a text area that users can type is", () => {
      /***********************
       * Comment this area because beforeEach will running and update the textarea
       */
      // expect(wrapped.find("textarea").prop("value")).toEqual("");
      // wrapped
      //   .find("textarea")
      //   .simulate("change", { target: { value: "NewValue" } });
      // wrapped.update();

      expect(wrapped.find("textarea").prop("value")).toEqual("NewValue");
    });

    it("after Submit textArea will empty", () => {
      // wrapped
      //   .find("textarea")
      //   .simulate("change", { target: { value: "NewValue" } });

      // wrapped.update();
      wrapped.find("form").simulate("submit");
      wrapped.update();
      expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
    it.skip("If the button have click event then use this test", () => {
      // wrapped
      //   .find("textarea")
      //   .simulate("change", { target: { value: "NewValue" } });
      // wrapped.update();
      wrapped.find("button").simulate("click");
      wrapped.update();
      expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
  });
});
