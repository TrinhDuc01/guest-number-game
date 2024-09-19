import { useEffect } from "react";
import Http from "../api/http";
import { useSelector } from "react-redux";

const PostDataGame = () => {
  const guessInfo = useSelector((state) => state.gameReducer);
  const userInfo = useSelector((state) => state.userReducer);
  useEffect(() => {
    const dataGame = {
      user_id: userInfo.user_id,
      numberOfGuess: guessInfo.guessCount,
      secretNumber: guessInfo.secretNumber,
    };
    console.log(dataGame);
    Http.post("/game", dataGame)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return <></>;
};

export default PostDataGame;
