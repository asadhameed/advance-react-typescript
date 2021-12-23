// export default function ({ dispatch }) {
//   return function (next) {
//     return function (action) {};
//   };
// }

const middle = (prop) => (next) => (action) => {
  // debugger;
  console.log("🚀 ~ file: async1.js ~ line 9 ~ dispatch", prop, action);
  if (action.payload || !action.then) {
    return next(action);
  }

  action.then((res) => {
    prop.dispatch({ ...res });
  });
};
export default middle;
