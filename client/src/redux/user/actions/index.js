import axios from "axios";
import { FETCH_USER } from "./types";

// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//       .get("/api/current_user")
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };

export const fetchUser = () => async dispatch => {
    // console.log(" in fetcuser axios");
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

