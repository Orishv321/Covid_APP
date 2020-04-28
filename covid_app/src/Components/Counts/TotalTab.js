import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

let TotalTab = (props) => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    props.totCountryCaseGet &&
      setCountryData(
        Object.values(props.totCountryCaseGet).sort((a, b) =>
          a.country > b.country ? 1 : -1,
        ),
      );
  }, [props.totCountryCaseGet]);
  return (
    <table className="centered">
      <thead>
        <tr>
          <th>Update Data</th>
          <th>Country</th>
          <th>Case</th>
          <th>Today Case</th>
          <th>Deaths</th>
          <th>Today Deaths</th>
          <th>Recovered</th>
          <th>Active</th>
          <th>critical</th>
          <th>Tests</th>
        </tr>
      </thead>

      <tbody>
        {countryData &&
          countryData.map((cd, key) => (
            <tr key={key}>
              <td>{cd.updated}</td>
              <td>{cd.country}</td>
              <td>{cd.cases}</td>
              <td>{cd.todayCases} </td>
              <td>{cd.deaths}</td>
              <td>{cd.todayDeaths}</td>
              <td>{cd.recovered}</td>
              <td>{cd.active}</td>
              <td>{cd.critical}</td>
              <td>{cd.tests}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default TotalTab;
