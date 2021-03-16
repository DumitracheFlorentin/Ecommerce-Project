const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        users: action.payload.users,
      };
    default:
      return state;
  }
};

export default usersReducer;
