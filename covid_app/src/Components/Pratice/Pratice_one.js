import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
export default function Pratice_one() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    });
  }, []);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={list.options}
            series={list.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}
