import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Table = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const callApi = async () => {
    const userInfo = await fetch("http://localhost:8000/user");
    const userData = await userInfo.json();
    console.log(userData);
    setUsers(userData);
  };
  const searchAPi = useCallback(async (search) => {
    const userInfo = await fetch(`http://localhost:8000/search/${search}`);
    const userData = await userInfo.json();
    console.log(userData);
    setUsers([userData]);
  }, []);
  useEffect(() => {}, [search, callApi, searchAPi]);
  return (
    <Fragment>
      <input
        type="text"
        placeholder="Search By username"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <Link to={`/${user.id}`}>{user.id}</Link>
                </td>
                <td>
                  <Link to={`/${user.id}`}>{user.name}</Link>
                </td>
                <td>
                  <Link to={`/${user.id}`}>{user.username}</Link>
                </td>
                <td>
                  <Link to={`/${user.id}`}>{user.email}</Link>
                </td>
                <td>
                  <Link to={`/${user.id}`}>{user.address}</Link>
                </td>
                <td>
                  <Link to={`/${user.id}`}>{user.phone}</Link>
                </td>
                <td>
                  <Link to={`/${user.id}`}>{user.website}</Link>
                </td>
                <td>
                  <Link to={`/${user.id}`}>{user.company}</Link>
                </td>
                <td>
                  <Link to={`/${user.id}`}>{user.name}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;
