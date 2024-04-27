import { useState } from "react";
import "./App.css";
import validator from "validator";

function App() {
  return (
    <div className="app">
      <h1>Checking password Strength in ReactJS</h1>
      <Form />
    </div>
  );
}
function Form() {
  const [password, setPassword] = useState("");
  function handlePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <div>
      <form className="form" onChange={handlePassword}>
        <label htmlFor="pass">Enter password:</label>
        <input type="text" id="pass" value={password} name="password" />
      </form>
      {<p>Is password Strong</p>}

      {validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      }) ? (
        <Strong />
      ) : (
        ""
      )}
    </div>
  );
}

function Strong() {
  return <h3 className="strong">Is strong password</h3>;
}

export default App;
