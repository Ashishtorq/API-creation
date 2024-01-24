import { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function registerHandler(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    });
    const data = await response.json();
    console.log("Entered Data ", data);
  }
  return (
    <Fragment>
      <header>
        <h1>Registration Page</h1>
      </header>

      <form onSubmit={registerHandler}>
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Register" placeholder="Submit" />
      </form>
    </Fragment>
  );
}

export default App;
