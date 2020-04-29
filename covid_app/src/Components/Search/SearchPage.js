import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Chart from "react-apexcharts";
import * as actions from "../../Store/Action";
import { Row, Col, Container } from "react-bootstrap";
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
      {country && (
        <Col className="d-flex flex-column" style={{ marginTop: "10px" }}>
          <Row style={{ marginTop: "5px" }}>
            <Col>{Flags && <img src={Flags.slice(-1)} />}</Col>
            <Col>
              <p className="lead display-4">{country.country}</p>
              <p className="lead">
                Affected
                <br />
                <p className="lead" style={{ color: "red " }}>
                  {country.active}
                </p>
              </p>
            </Col>
          </Row>

          <Chart
            options={{
              chart: {
                height: 390,
                type: "radialBar",
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: "30%",
                    background: "transparent",
                    image: undefined,
                  },
                  dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
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
                offsetX: 160,
                offsetY: 15,
                labels: {
                  useSeriesColors: true,
                },
                markers: {
                  size: 0,
                },
                formatter: function (seriesName, opts) {
                  return (
                    seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
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
            height="390"
          />
        </Col>
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
