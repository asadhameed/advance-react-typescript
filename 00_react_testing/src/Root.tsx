import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { reducers } from "reducers/";
interface Props {
  children: React.ReactElement;
}
const Root = (props: Props): React.ReactElement => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};

export default Root;
