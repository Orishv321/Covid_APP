import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/Action";
let News = (props) => {
  useEffect(() => {
    props.getNew();
  }, []);
  return <div>Page for News infos</div>;
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
