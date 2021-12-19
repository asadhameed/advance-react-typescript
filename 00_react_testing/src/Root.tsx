import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { reducers } from "reducers/";
interface Props {
  children: React.ReactElement;
  initialState?: { comments: string[] };
}
const Root = ({ children, initialState }: Props): React.ReactElement => {
  return (
    <Provider store={createStore(reducers, initialState ? initialState : {})}>
      {children}
    </Provider>
  );
};

export default Root;
