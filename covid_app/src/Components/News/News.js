import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/Action";
let News = (props) => {
  useEffect(() => {
    props.getNew();
  }, []);
  return (
    <div>
      <h1>If interest lagyo venya chiii gerxu :D :D </h1>
      <h1>Corona ko live update hernu hola for now </h1>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {};
};
let mapDispatchToProps = (disparch) => {
  return {
    getNew: () => disparch(actions.GetNews()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(News);
