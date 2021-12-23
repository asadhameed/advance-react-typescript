import { mount, ReactWrapper } from "enzyme";

import { CommentList } from "components/CommentList";
import Root from "Root";

describe("Enzyme CommentList.test.tsx file", () => {
  let wrapped: ReactWrapper;

  beforeEach(() => {
    const initialState = {
      comments: ["comment 1", "comment 2"],
    };
    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });
  afterEach(() => {
    wrapped.unmount();
  });

  it("Create one LI per comment", () => {
    expect(wrapped.find("li").length).toEqual(2);
  });
  it("Shows the text of each comment", () => {
    /***************************************************
     * My method
     **************************************************/
    // const liText = wrapped.find("li").map((li) => li.text());
    // expect(liText).toEqual(["comment 1", "comment 2"]);

    expect(wrapped.render().text()).toContain("comment 1");
    expect(wrapped.render().text()).toContain("comment 2");
  });
});
