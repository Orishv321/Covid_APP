import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../Store/Action";

let Search = (props) => {
  const [country, setCountry] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    props.getTotCountryCase();
  }, []);
  useEffect(() => {
    props.totCountryCaseGet &&
      setCountry(
        Object.values(props.totCountryCaseGet).sort((a, b) =>
          a.country > b.country ? 1 : -1,
        ),
      );
  }, [props.totCountryCaseGet]);
  let SearchHandel = (data) => {
    console.log(data);
    // props.searchHomeInfo(data.search);
    // history.push("/search");
  };
  return (
    <form onSubmit={handleSubmit(SearchHandel)} className={"input-box"}>
      {country && console.log(">>", country)}
      <input
        type="text"
        name="search"
        placeholder={errors.search ? errors.search.message : "Country name"}
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
        {country &&
          country.slice().map((con) => <option value={con.country} />)}
      </datalist>
      <button className={"btn flat"}>
        <i className="material-icons">search</i>
      </button>
    </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Search);
