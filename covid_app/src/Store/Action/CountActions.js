import axios from "axios";

export let GetTotalCounts = () => {
  return (dispatch) => {
    axios
      .get("https://thevirustracker.com/free-api?global=stats")
      .then((result) => {
        // console.log(result);
        dispatch({ type: "GET_TOTAL_COUNTS", payload: result.data.results });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR_COUNTS", payload: err });
      });
  };
};
export let GetTotCountryCase = () => {
  return (dispatch) => {
    axios
      .get("https://corona.lmao.ninja/v2/countries?sort=country")
      .then((response) => {
        // console.log(response.data);
        dispatch({ type: "GET_TOTAL_COUNTRY_CASE", payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR_COUNTS", payload: err });
      });
  };
};
