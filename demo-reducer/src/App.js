import { useReducer, useState } from "react";
import "./App.css";
import Header from "./header/header.js";
import myreducer from "./reducer/reducer.js";

function App() {
  const [state, dispatch] = useReducer(myreducer, { name: "" });
  const [input, setInput] = useState("");

  function Login(e) {
    e.preventDefault();
    dispatch({
      type: "login",
      name: input,
    });
  }

  function Logout(e) {
    e.preventDefault();
    dispatch({
      type: "login",
    });
  }

  return (
    <div className="App">
      <Header user={state.name} />
      <div className="App-header">
        <form>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={input}
            name="name"
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <input type="submit" value="Login" onClick={Login} />
          <input type="submit" value="Logout" onClick={Logout} />
        </form>
      </div>
    </div>
  );
}

export default App;
