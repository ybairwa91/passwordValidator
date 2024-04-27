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
    <div className="form">
      <form onChange={handlePassword}>
        <label htmlFor="pass">Enter password:</label>
        <input type="text" id="pass" value={password} name="password" />
      </form>

      {validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      }) ? (
        <span>Is A strong Password</span>
      ) : (
        <span>is not a strong password</span>
      )}
    </div>
  );
}

export default App;
