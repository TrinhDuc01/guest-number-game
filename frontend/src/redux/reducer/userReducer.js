const defaultState = {
  name: "",
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        name: action.payload,
      };
    case "LOGOUT":
      return {
        name: "",
      };
    default:
      return state;
  }
};

export default userReducer;
