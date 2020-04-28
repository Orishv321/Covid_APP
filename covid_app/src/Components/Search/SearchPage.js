import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Chart from "react-apexcharts";
import * as actions from "../../Store/Action";
let SearchPage = (props) => {
  const [country, setCountry] = useState([]);
  const [Flags, setFlags] = useState();
  useEffect(() => {
    console.log(props.location.country);
    props.getTotCountryCase();
  }, []);
  useEffect(() => {
    props.totCountryCaseGet &&
      setCountry(
        Object.values(props.totCountryCaseGet).find(
          (country) => country.country == props.location.country,
        ),
      );
  }, [props.totCountryCaseGet]);
  useEffect(() => {
    country.countryInfo &&
      setFlags(Object.values(country.countryInfo).map((cc) => cc));
  }, [country]);
  return (
    <>
      <h1 className="h1">{country.country}</h1>
      {country && (
        <div className="d-flex flex-column">
          <div className="my-3">{Flags && <img src={Flags.slice(-1)} />}</div>
          <div className="my-3">
            <Chart
              options={{
                chart: {
                  type: "radialBar",
                },
                plotOptions: {
                  radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                      margin: 0,
                      size: "20%",
                      background: "white",
                    },
                    dataLabels: {
                      name: {
                        show: true,
                      },
                      value: {
                        show: true,
                      },
                    },
                  },
                },
                colors: [
                  "#F45151",
                  "#CD0606",
                  "#A60606",
                  "#880707",
                  "#F88484",
                  "#FC3838",
                  "#F88484",
                  "#26FA3B",
                ],
                labels: [
                  "Tests",
                  "Cases",
                  "Active",
                  "Critical",
                  "Deaths",
                  "TodayCases",
                  "TodayDeaths",
                  "Recovered",
                ],
                legend: {
                  show: true,
                  floating: true,
                  fontSize: "16px",
                  position: "left",
                  offsetX: 180,
                  offsetY: 25,
                  labels: {
                    useSeriesColors: true,
                  },
                  markers: {
                    size: 0,
                  },
                  formatter: function (seriesName, opts) {
                    return (
                      seriesName +
                      ":  " +
                      opts.w.globals.series[opts.seriesIndex]
                    );
                  },
                  itemMargin: {
                    vertical: 3,
                  },
                },
                responsive: [
                  {
                    breakpoint: 480,
                    options: {
                      legend: {
                        show: false,
                      },
                    },
                  },
                ],
              }}
              series={[
                `${country.tests}`,
                `${country.cases}`,
                `${country.active}`,
                `${country.critical}`,
                `${country.deaths}`,
                `${country.todayCases}`,
                `${country.todayDeaths}`,
                `${country.recovered}`,
              ]}
              type="radialBar"
              width="80%"
              height="390"
            />
          </div>
        </div>
      )}
    </>
  );
};
let mapStateToProps = (state) => {
  return {
    totCountryCaseGet: state.CountReducer.totCountryCounts,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    getTotCountryCase: () => dispatch(actions.GetTotCountryCase()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
// labels: [
//   "cases",
//   "todayCases",
//   "deaths",
//   "todayDeath",
//   "recovered",
//   "active",
//   "critical",
//   "tests",
// ],
//   [
//     `${country.cases}`,
//     `${country.todayCases}`,
//     `${country.deaths}`,
//     `${country.todayDeath}`,
//     `${country.recovered}`,
//     `${country.active}`,
//     `${country.critical}`,
//     `${country.tests}`,
//   ];
