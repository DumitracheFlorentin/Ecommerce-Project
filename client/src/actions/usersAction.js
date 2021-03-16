import axios from "axios";

export const usersAction = () => async (dispatch) => {
  // FETCH DATA
  const allUsers = await axios.get("http://localhost:5000/");

  dispatch({
    type: "FETCH_USERS",
    payload: {
      users: allUsers.data,
    },
  });
};
