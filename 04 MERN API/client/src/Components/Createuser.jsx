import React, { useState } from "react";
import axios from "axios";

const Createuser = () => {
  const [Name, setName] = useState({});
  const [Email, setEmail] = useState({});
  const [Age, setAge] = useState({});
  // const navigate = useNavigate()
  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", { Name, Email, Age })
      .then((result) => {
        console.log(result);
        alert("Data uploaded");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <h1>Hello create</h1>
      <form action="" onSubmit={Submit}>
        <div className="feilds">
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="feilds">
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="feilds">
          <label htmlFor=""></label>
          <input
            type="Number"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Createuser;
/*
1 use correct endpoint\
2. get import axios
*/
