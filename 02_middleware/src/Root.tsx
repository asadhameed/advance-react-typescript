import React from "react";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import { createStore, applyMiddleware } from "redux";

import async from "middlewares/async1";

import { reducers } from "reducers/";
interface Props {
  children: React.ReactElement;
  initialState?: { comments: string[] };
}
const Root = ({ children, initialState }: Props): React.ReactElement => {
  const store = createStore(
    reducers,
    initialState ? initialState : {},
    applyMiddleware(async)
    //  applyMiddleware(reduxPromise)
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
