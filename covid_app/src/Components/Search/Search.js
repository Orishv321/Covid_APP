import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
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
    <form onSubmit={handleSubmit(SearchHandel)} className={"input-box"}>
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
          country
            .slice()
            .map((con, key) => <option value={con.country} key={key} />)}
      </datalist>

      <i onClick={handleSubmit(SearchHandel)} className="material-icons ">
        search
      </i>
    </form>
  );
};
let mapStateToProps = (state) => {
  return {};
};
let mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
