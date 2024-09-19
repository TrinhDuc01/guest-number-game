import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import checkUserApi from "../api/checkUserApi";

const InputName = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const login = () => {
    //sau khi an thi gui du lieu len database de check xem co user chua
    checkUserApi(username, dispatch);
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="username">
          <code>Enter your username:</code>
        </label>
      </div>
      <input
        id="username"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        className="w-[30%] text-black text-center"
      />
      {username && (
        <div>
          <Button
            className={
              "rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
            }
            onClick={login}
          >
            Play
          </Button>
        </div>
      )}
    </div>
  );
};

export default InputName;
