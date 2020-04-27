import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
export default function Pratice_one() {
  const [list, setList] = useState([]);
  const [options, setOptions] = useState();
  const [series, setSeries] = useState();
  useEffect(async () => {
    await setOptions({
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    });
    setSeries({
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    });
  }, []);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <h1>hellos</h1>
          <Chart
            options={{ options }}
            series={[series]}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}
