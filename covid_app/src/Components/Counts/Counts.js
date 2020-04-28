import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/Action";
import TotalGraph from "./TotalGraph";
import Search from "../Search/Search";
let Counts = (props) => {
  const [total, setTotal] = useState([]);

  //displatch to api
  useEffect(() => {
    props.getTotalCounts();
  }, []);
  //receiving the total data
  useEffect(() => {
    setTotal(props.totalCountGet);
  }, [props.totalCountGet]);

  return (
    <div className={"d-flex flex-column"}>
      <h1 className="h1">World wide</h1>
      <div className={"d-flex flex-row justify-between"}>
        <div className={"first-count-div danger"}>
          {total &&
            total.map((tot, key) => (
              <div key={key}>
                <div>TotalActive Cases: {tot.total_active_cases}</div>
                <div>
                  Total Affected Countries :{tot.total_affected_countries}
                </div>
                <div>Total Cases :{tot.total_cases}</div>
                <div>Total Deaths :{tot.total_deaths}</div>
              </div>
            ))}
        </div>
        <div className={"first-count-div warning"}>
          {total &&
            total.map((tot, key) => (
              <div key={key}>
                <div>Total New Cases Today: {tot.total_new_cases_today}</div>
                <div>Total New Deaths Today :{tot.total_new_deaths_today}</div>
                <div>Total Serious Cases :{tot.total_serious_cases}</div>
                <div>Total Unresolved :{tot.total_unresolved}</div>
              </div>
            ))}
        </div>
        <div className={"first-count-div success"}>
          {total &&
            total.map((tot, key) => (
              <div key={key}>
                <div>Total Recovered: {tot.total_recovered}</div>
              </div>
            ))}
        </div>
      </div>
      <div className="my-3">
        <Search />
      </div>
      <div className="my-3">
        <TotalGraph />
      </div>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    totalCountGet: state.CountReducer.totallCounts,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    getTotalCounts: () => dispatch(actions.GetTotalCounts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counts);
