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
            <svg
              class="bi bi-search"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                clip-rule="evenodd"
              />
            </svg>
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
