// import React, { ReactElement, Component, ReactNode, useState } from "react";
// import { StoreState } from "reducers/index";
// import { useNavigate } from "react-router-dom";
// import { connect } from "react-redux";

// const requireAuth = (Props: any) => {
//   const ChildComponent = Props;

//   class ComposedComponent extends Component {
//     navigate = useNavigate();

//     componentDidMount() {
//       this.shouldNavigateWay();
//     }
//     componentDidUpdate() {
//       this.shouldNavigateWay();
//     }
//     shouldNavigateWay() {
//       console.log(this.props);
//       // this.navigate("/");
//     }
//     render(): React.ReactNode {
//       return;
//     }
//   }

//   const mapStateOfProps = ({ auth }: StoreState): { auth: boolean } => {
//     return {
//       auth,
//     };
//   };
//   return connect(mapStateOfProps)(ComposedComponent);
// };
// const requireAuth = (Props: any) => {

// }
// export default requireAuth;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { StoreState } from "reducers";

export const requireAuth = <P,>(ChildComponent: React.ComponentType<P>) => {
  interface State {
    auth: boolean;
    props: P;
  }
  const ComponentWithExtraInfo = ({ auth, props }: State): JSX.Element => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!auth) {
        navigate("/");
      }
    }, [auth, navigate]);

    return <ChildComponent {...props} />;
  };

  const mapStateOfProps = ({ auth }: StoreState, props: P): State => {
    return {
      auth,
      props,
    };
  };
  return connect(mapStateOfProps)(ComponentWithExtraInfo);
};
