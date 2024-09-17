import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import InputName from "./components/InputName";
import Game from "./components/Game";

function App() {
  const name = useSelector((state) => state.userReducer.name);
  const dispatch = useDispatch();
  console.log(name);
  return (
    <div className="App">
      {name && (
        <Button
          className={
            "float-end rounded-lg px-4 py-2 bg-red-600 text-red-100 hover:bg-red-700 duration-300"
          }
          onClick={() => {
            dispatch({ type: "LOGOUT" });
            dispatch({ type: "RESTART" });
          }}
        >
          Exit
        </Button>
      )}
      <div className=" App-header space-y-8">
        <Header />
        {!name && <InputName />}
        {name && <Game />}
      </div>
    </div>
  );
}

export default App;
