import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((resp) => setUser(resp.data))
      .catch((e) => console.log(e));
  }, []);

  // const del = (id) => {
  //   axios
  //     .delete("http://localhost:3001/delete/" + id)
  //     .then((result) => {
  //       console.log(result);
  //       alert("Data Deleted");
  //     })
  //     .catch((e) => console.log(e));
  // };
  const del = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        console.log(result);
        alert("Data Deleted");
        // setUser(user.filter((u) => u._id !== id));  update the state

        // setUser(user.filter((u)=>u._id !== id))
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h1>User </h1>
      <Link to="/Createuser">ADD User</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users) => {
            return (
              <tr>
                <td>{users.Name}</td>
                <td>{users.Email}</td>
                <td>{users.Age}</td>
                <td>
                  <Link to={`/Updateuser ${users._id}`}>Update</Link>{" "}
                  <button onClick={(e) => del(users._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
