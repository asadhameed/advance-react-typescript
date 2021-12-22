import React from "react";
import { mount, ReactWrapper } from "enzyme";
import moxios from "moxios";
import App from "components/App";
import Root from "Root";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "comment 1" }, { name: "comment 2" }],
  });
});
afterEach(() => {
  moxios.uninstall();
});

it.skip("can Fetch the comments from Api and display them", (done: jest.DoneCallback) => {
  const wrapped: ReactWrapper = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find(".fetch-comments").simulate("click");
  /**********************************************************
   * Need to delay that the redux get data from ApI
   * If I comment beforeEach function then this will get data from ApI
   *********************************************************/

  setTimeout(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    expect(wrapped.render().text()).toContain("comment 1");
    expect(wrapped.render().text()).toContain("comment 2");
    done();
    wrapped.unmount();
    //
  }, 2000);
});
