import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import PostDataGame from "./PostDataGame";
import checkUserApi from "../api/checkUserApi";

const Game = () => {
  const [guessNumber, setGuessNumber] = useState(0);
  const dispatch = useDispatch();
  const guessInfo = useSelector((state) => state.gameReducer);
  const userInfo = useSelector((state) => state.userReducer);
  const handleInputNumber = (e) => {
    const num = parseInt(e.target.value);
    if (num > 1000) return setGuessNumber(1000);
    if (num < 0) return setGuessNumber(0);
    if (isNaN(num)) return setGuessNumber(0);
    return setGuessNumber(num);
  };
  console.log(guessInfo);
  return (
    <div className="space-y-4">
      <div>
        <code>{userInfo.user_info}</code>
      </div>
      <div>
        <code>Guess the secret number between 1 and 1000:</code>
      </div>
      {guessInfo.guessStatus !== 0 && (
        <input
          type="number"
          value={guessNumber}
          onChange={(e) => handleInputNumber(e)}
          className="text-black text-center"
          min={0}
          max={1000}
        />
      )}
      {guessInfo.guessStatus === 0 ? (
        <Button
          className={
            "rounded-lg px-4 py-2 bg-red-600 text-red-100 hover:bg-red-700 duration-300"
          }
          onClick={() => {
            dispatch({ type: "RESTART" });
            setGuessNumber(0);
            checkUserApi(userInfo.name, dispatch);
          }}
        >
          Restart
        </Button>
      ) : (
        <div>
          <Button
            className={
              "rounded-lg px-4 py-2 bg-green-400 hover:bg-green-600 duration-300"
            }
            onClick={() => dispatch({ type: "GUESS", payload: guessNumber })}
          >
            Guess!
          </Button>
        </div>
      )}
      <div>
        <code>
          {guessInfo.guessStatus === 0
            ? `You guessed it in ${guessInfo.guessCount} tries. The secret number was ${guessInfo.secretNumber}. Nice job!`
            : guessInfo.guessStatus === -1
            ? "It's higher than that, guess again:"
            : guessInfo.guessStatus === 1
            ? "It's lower than that, guess again:"
            : ""}
          {guessInfo.guessStatus === 0 ? <PostDataGame /> : ""}
        </code>
      </div>
    </div>
  );
};

export default Game;
