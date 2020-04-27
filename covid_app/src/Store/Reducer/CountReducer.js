let initState = {
  totallCounts: [],
  hello: [],
  error: false,
  totCountryCounts: [],
};

let CountReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_TOTAL_COUNTS":
      return { ...state, totallCounts: action.payload };
    case "ERROR_COUNTS":
      return { ...state, error: true };
    case "GET_TOTAL_COUNTRY_CASE":
      return { ...state, totCountryCounts: action.payload };
    default:
      return { state };
  }
};

export default CountReducer;
