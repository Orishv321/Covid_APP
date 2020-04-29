import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/Action";
import { Card } from "react-bootstrap";
import TotalGraph from "./TotalGraph";
import Search from "../Search/Search";
import TotalTab from "./TotalTab";
let Counts = (props) => {
  const [total, setTotal] = useState([]);

  //displatch to api
  useEffect(() => {
    props.getTotalCounts();
    props.getTotCountryCase();
  }, []);
  //receiving the total data
  useEffect(() => {
    setTotal(props.totalCountGet);
  }, [props.totalCountGet]);

  return (
    <div className={"d-flex flex-column"}>
      <h1 className="display-4">World wide</h1>
      <div className={"d-flex flex-row justify-between"}>
        <div className={"first-count-div danger"}>
          {total &&
            total.map((tot, key) => (
              <Card
                bg="danger"
                text="white"
                key={key}
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Text>
                    <div>TotalActive Cases: {tot.total_active_cases}</div>
                    <div>
                      Total Affected Countries :{tot.total_affected_countries}
                    </div>{" "}
                    <div>Total Cases :{tot.total_cases}</div>
                    <div>Total Deaths :{tot.total_deaths}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
        <div className={"first-count-div warning"}>
          {total &&
            total.map((tot, key) => (
              <Card
                bg="warning"
                text="white"
                key={key}
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Text>
                    <div>
                      Total New Cases Today: {tot.total_new_cases_today}
                    </div>
                    <div>
                      Total New Deaths Today :{tot.total_new_deaths_today}
                    </div>
                    <div>Total Serious Cases :{tot.total_serious_cases}</div>
                    <div>Total Unresolved :{tot.total_unresolved}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
        <div className={"first-count-div success"}>
          {total &&
            total.map((tot, key) => (
              <Card
                bg="success"
                text="white"
                key={key}
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Text>
                    <div>Total Recovered: {tot.total_recovered}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
      <div className="my-3">
        <Search totCountryCaseGet={props.totCountryCaseGet} />
      </div>
      <div className="my-3">
        <TotalGraph totCountryCaseGet={props.totCountryCaseGet} />
      </div>
      <div className="my-3">
        <TotalTab totCountryCaseGet={props.totCountryCaseGet} />
      </div>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    totalCountGet: state.CountReducer.totallCounts,
    totCountryCaseGet: state.CountReducer.totCountryCounts,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    getTotalCounts: () => dispatch(actions.GetTotalCounts()),
    getTotCountryCase: () => dispatch(actions.GetTotCountryCase()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counts);
