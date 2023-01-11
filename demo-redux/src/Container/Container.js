import { useState } from "react";

import { useDispatch } from "react-redux";

function Container() {
  const [input, setinput] = useState("");

  const dispatch = useDispatch();

  function Login() {
    dispatch({ type: "login", name: input });
  }
  function Logout() {
    dispatch({ type: "login" });
  }
  function App() {
    dispatch({ type: "app" });
  }
  function Remove() {
    dispatch({ type: "remove" });
  }
  return (
    <>
      <input value={input} onChange={(e) => setinput(e.target.value)} />
      <button onClick={Login}>login</button>
      <br />
      <button onClick={Logout}>loout</button>

      <button onClick={App}>app</button>
      <br />
      <button onClick={Remove}>Remove</button>
    </>
  );
}

export default Container;
