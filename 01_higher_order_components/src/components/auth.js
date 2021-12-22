import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

export function requireAuth(ChildComponent) {
  console.log(
    "🚀 ~ file: requireAuth.ts ~ line 40 ~ ChildComponent",
    ChildComponent
  );

  const ComponentWithExtraInfo = (props, state) => {
    console.log(
      "🚀 ~ file: auth.js ~ line 12 ~ ComponentWithExtraInfo ~ state",
      state
    );
    const navigate = useNavigate();
    const { auth } = props;
    useEffect(() => {
      if (!auth) {
        navigate("/");
      }
    }, [auth, navigate]);

    console.log("---------------->", props);
    // At this point, the props being passed in are the original props the component expects.
    return <ChildComponent {...props} />;
  };

  const mapStateOfProps = (state) => {
    console.log(state);
    return {
      auth: state.auth,
    };
  };
  return connect(mapStateOfProps)(ComponentWithExtraInfo);
}
