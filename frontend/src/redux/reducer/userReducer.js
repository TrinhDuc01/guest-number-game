const defaultState = {
  name: "",
  user_info: "",
  user_id: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        name: action.payload.username,
        user_info: action.payload.user_info,
        user_id: action.payload.user_id,
      };
    case "LOGOUT":
      return {
        name: "",
        user_info: "",
        user_id: {},
      };
    default:
      return state;
  }
};

export default userReducer;
