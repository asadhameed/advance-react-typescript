import { Middleware, MiddlewareAPI, Action } from "redux";
import { Action as NextAction } from "actions/actionTypes";
interface MiddlewareAction extends Action {
  payload: string | boolean | string[];
  then: Function;
}

const middle: Middleware =
  ({ dispatch }: MiddlewareAPI) =>
  (next: (a: NextAction) => void) =>
  (action: MiddlewareAction) => {
    // debugger;

    if (action.payload) {
      return next(action);
    }

    action.then((res: NextAction) => {
      dispatch({ ...res });
    });
  };
export default middle;
