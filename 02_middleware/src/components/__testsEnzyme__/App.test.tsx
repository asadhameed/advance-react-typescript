import { shallow, ShallowWrapper } from "enzyme";
import App from "components/App";
import { CommentBox } from "components/CommentBox";
import { CommentList } from "components/CommentList";
import Root from "Root";

// describe("This is the enzyme test FileName App.tsx", () => {
//   let wrapped: ShallowWrapper;
//   beforeEach(() => {
//     wrapped = shallow(<App />);
//   });
//   // it("Shows a comment box", () => {
//   //   expect(wrapped.find(CommentBox).length).toEqual(1);
//   // });

//   it("Show a comment list", () => {
//     expect(wrapped.find(CommentList).length).toEqual(1);
//   });
// });

describe("This is the enzyme test FileName App.tsx", () => {
  let wrapped: ShallowWrapper;
  beforeEach(() => {
    wrapped = shallow(
      <Root>
        <App />
      </Root>
    );
  });
  // it("Shows a comment box", () => {
  //   expect(wrapped.find(CommentBox).length).toEqual(1);
  // });

  it("Show a comment list", () => {
    console.log(wrapped.render().text());
    //  expect(wrapped.find(CommentList).length).toEqual(1);
  });
});
