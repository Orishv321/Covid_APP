import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
let Search = (props) => {
  const history = useHistory();
  const [country, setCountry] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    props.totCountryCaseGet &&
      setCountry(
        Object.values(props.totCountryCaseGet).sort((a, b) =>
          a.country > b.country ? 1 : -1,
        ),
      );
  }, [props.totCountryCaseGet]);
  let SearchHandel = (data) => {
    history.push({ pathname: `/search`, country: data.search });
  };
  return (
    <Form onSubmit={handleSubmit(SearchHandel)} className={"input-box"}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder={errors.search ? errors.search.message : "Country name"}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="text"
          name="search"
          ref={register({
            required: "Country in required",
            pattern: {
              value: /^[#.a-zA-Z\s,-]{5,30}$/,
              message: `Should contain Alphabetes `,
            },
          })}
          list={"locationList"}
        />
        <datalist id={"locationList"}>
          {" "}
          {country &&
            country
              .slice()
              .map((con, key) => <option value={con.country} key={key} />)}
        </datalist>
        <InputGroup.Append>
          <Button
            onClick={handleSubmit(SearchHandel)}
            variant="outline-secondary"
          >
            Button
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};
let mapStateToProps = (state) => {
  return {};
};
let mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
