import axios from "axios";

export const specificAccount = (id) => async (dispatch) => {
  // FETCH DATA
  const AccountData = await axios.get(`http://localhost:5000/api/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: {
      user: AccountData.data,
    },
  });
};
