import React, { useEffect, useState } from "react";
import { connect, connectAdvanced } from "react-redux";
import * as actions from "../../Store/Action";
//to import line chart
import { Line, Bar, Radar } from "react-chartjs-2";
import Chart from "react-apexcharts";
let Counts = (props) => {
  const [total, setTotal] = useState([]);
  const [totCountryCase, setTotCountryCase] = useState([]);
  const [options, setOptions] = useState();
  const [series, setSeries] = useState([]);

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
  // useEffect(() => {
  //   props.totCountryCaseGet &&
  //     setTotCountryCase(
  //       Object.values(props.totCountryCaseGet)
  //         .sort((a, b) => a.active - b.active)
  //         .reverse(),
  //     );
  // }, [props.totCountryCaseGet]);
  //to receive the chart data
  useEffect(() => {
    props.totCountryCaseGet &&
      setOptions({
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          labels: {
            show: true,
          },
          categories: Object.values(props.totCountryCaseGet)
            .sort((a, b) => a.active - b.active)
            .map((totCountry) => totCountry.country),
        },
      });
    props.totCountryCaseGet &&
      setSeries({
        name: "active Case",
        data: Object.values(props.totCountryCaseGet)
          .sort((a, b) => a.active - b.active)
          .map((totCountry) => totCountry.active),
      });
  }, [props.totCountryCaseGet]);
  return (
    <div>
      {console.log(totCountryCase)}
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
        {props.totCountryCaseGet && (
          <Chart
            options={{
              chart: {
                id: "basic-bar",
              },
              title: {
                text: "Covid Active Death Case",
                align: "center",
              },
              plotOptions: {
                bar: {
                  columnWidth: "20%",
                },
              },
              colors: ["#B40404", "#000000", "#2EFE2E"],
              markers: {
                size: 1,
              },
              xaxis: {
                labels: {
                  show: true,
                },

                categories: Object.values(props.totCountryCaseGet)
                  .sort((a, b) => a.active - b.active)
                  .map((totCountry) => totCountry.country),
              },
              tooltip: {
                shared: false,
                intersect: true,
                x: {
                  show: false,
                },
              },
              legend: {
                offsetX: 40,
                position: "right",
              },
            }}
            series={[
              {
                name: "active Case",
                data: Object.values(props.totCountryCaseGet)
                  .sort((a, b) => a.active - b.active)
                  .map((totCountry) => totCountry.active),
              },
              {
                name: "Death",
                data: Object.values(props.totCountryCaseGet)
                  .sort((a, b) => a.active - b.active)
                  .map((totCountry) => totCountry.deaths),
              },
              {
                name: "Recovered",
                data: Object.values(props.totCountryCaseGet)
                  .sort((a, b) => a.active - b.active)
                  .map((totCountry) => totCountry.recovered),
              },
            ]}
            type="line"
            width="95%"
            height="400"
          />
        )}
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
