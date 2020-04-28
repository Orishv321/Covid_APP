import React, { useEffect, useState } from "react";
import { connect, connectAdvanced } from "react-redux";
import * as actions from "../../Store/Action";
//to import line chart
import Chart from "react-apexcharts";
let TotalGraph = (props) => {
  return (
    <>
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
              position: "top",
              horizontalAlign: "right",
              floating: true,
              offsetY: -20,
              offsetX: -5,
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
    </>
  );
};

export default TotalGraph;
