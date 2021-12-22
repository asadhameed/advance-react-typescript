import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { CommentBox } from "./CommentBox";
import { StoreState } from "reducers/index";
import { changeAuth } from "actions/commentAction";

import { CommentList } from "./CommentList";
interface Props {
  auth: boolean;
  changeAuth(isLog: boolean): void;
}

function App({ auth, changeAuth }: Props): ReactElement {
  const HeaderApp = (): ReactElement => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <button onClick={() => changeAuth(!auth)}>
          {auth ? "Sign out" : "Sign in"}
        </button>
      </ul>
    );
  };
  return (
    <BrowserRouter>
      <HeaderApp />
      <Routes>
        {/* <h1>Header</h1> */}
        <Route path="/post" element={<CommentBox />} />
        <Route path="/" element={<CommentList />} />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateOfProps = ({ auth }: StoreState): { auth: boolean } => {
  return {
    auth,
  };
};
export default connect(mapStateOfProps, { changeAuth })(App);
