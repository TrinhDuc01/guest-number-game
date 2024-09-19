import Http from "./http";

const checkUserApi = (username, dispatch) => {
  Http.post("/check-user", { username: username })
    .then((res) => {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          user_info: res.data.log,
          user_id: res.data.user_id,
        },
      });
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export default checkUserApi;
