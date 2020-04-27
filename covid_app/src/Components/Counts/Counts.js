import React, { useEffect, useState } from "react";
import { connect, connectAdvanced } from "react-redux";
import * as actions from "../../Store/Action";
//to import line chart
import { Line, Bar, Radar } from "react-chartjs-2";
let Counts = (props) => {
  const [total, setTotal] = useState([]);
  const [totCountryCase, setTotCountryCase] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [colors, setColors] = useState();

  //displatch to api
  useEffect(() => {
    props.getTotalCounts();
    props.getTotCountryCase();
  }, []);
  //receiving the total data
  useEffect(() => {
    setTotal(props.totalCountGet);
  }, [props.totalCountGet]);
  //receiving the country specific data
  useEffect(() => {
    props.totCountryCaseGet &&
      setTotCountryCase(
        Object.values(props.totCountryCaseGet)
          .sort((a, b) => a.active - b.active)
          .reverse(),
      );
  }, [props.totCountryCaseGet]);
  //to receive the chart data
  useEffect(() => {
    props.totCountryCaseGet &&
      setChartData({
        labels: Object.values(props.totCountryCaseGet)
          .sort((a, b) => a.active - b.active)
          .map((totCountry) => totCountry.country),
        datasets: [
          {
            label: "Active Cases ",
            data: Object.values(props.totCountryCaseGet)
              .sort((a, b) => a.active - b.active)
              .map((totCountry) => totCountry.active),
            backgroundColor: ["#FF0000"],
          },
        ],
      });
  }, [props.totCountryCaseGet]);
  return (
    <div>
      <div>
        {total &&
          total.map((tot, key) => (
            <div key={key}>
              <h1> Total Recovered :{tot.total_active_cases}</h1>
              <h1> Affected Countres:{tot.total_affected_countries}</h1>
              <h1> New case Today : {tot.total_new_cases_today}</h1>
              <h1> Total Death Today :{tot.total_new_deaths_today}</h1>
            </div>
          ))}
      </div>
      <div>
        {console.log(">>>", chartData)}
        <Line
          data={chartData}
          height="600"
          width="800"
          options={{
            title: {
              display: true,
              text: "Current Active Cases Around the world",
              fontSize: 30,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
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
