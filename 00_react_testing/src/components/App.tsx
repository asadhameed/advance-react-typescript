import React, { ReactElement } from "react";
import { CommentBox } from "./CommentBox";
import { CommentList } from "./CommentList";

function App(): ReactElement {
  return (
    <div>
      <h1>This this the app components</h1>
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default App;
