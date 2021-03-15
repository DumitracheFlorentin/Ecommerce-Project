const userReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        data: action.payload.user,
      };
    default:
      return state;
  }
};

export default userReducer;
