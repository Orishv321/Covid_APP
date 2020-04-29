import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
let TotalTab = (props) => {
  const [countryData, setCountryData] = useState(null);
  const history = useHistory();
  useEffect(() => {
    props.totCountryCaseGet &&
      setCountryData(
        Object.values(props.totCountryCaseGet).sort((a, b) =>
          a.country > b.country ? 1 : -1,
        ),
      );
  }, [props.totCountryCaseGet]);
  return (
    <Table striped bordered hover variant="dark" responsive>
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
            <tr
              className="pointer"
              onClick={() =>
                history.push({ pathname: `/search`, country: cd.country })
              }
              key={key}
            >
              <td>{key}</td>
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
      <tfoot>
        <tr>
          <th colSpan="10">
            <center>The total Data</center>
          </th>
        </tr>
      </tfoot>
    </Table>
  );
};
export default TotalTab;
