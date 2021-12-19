import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Root from "Root";
import App from "components/App";

test.skip('"can Fetch the comments from Api and display them "', (done: jest.DoneCallback) => {
  render(
    <Root>
      <App />
    </Root>
  );
  const fetchBtn = screen.getByText("Fetch Comments");
  fireEvent.click(fetchBtn);

  /***********************************************
   * In this test the data get from "https://jsonplaceholder.typicode.com/comments"
   * The Better option is create mock API
   * See integrationsEnzyme.test.tsx How can make mock API
   ********************************************/

  setTimeout(() => {
    // screen.debug();
    const li = screen.getAllByRole("listitem");
    expect(li.length).toEqual(500);
    done();
  }, 2000);
  //const li = screen.getAllByRole("listitem");
  // console.log("------------------>", li);
});
