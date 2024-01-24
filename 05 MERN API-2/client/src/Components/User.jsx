import React, { useEffect, useState } from "react";
import axios from 'axios'
const User = () => {
    const [user, setUser] =  useState([]);
    useEffect(()=>{
        axios.get("http://localhost:7000")
        .then((res)=>setUser(res.data))
        .catch((e)=>console.log(e));
    },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email-id</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
            // dynamic table
            user.map((users)=>{
                 return ( <tr>
                  <td>{users.Name}</td>
                  <td>{users.Email}</td>
                  <td>{users.Age}</td>
                  <td><Button>Delete</Button> <button>Edit</button></td>
                  </tr>)
            })
        }
        </tbody>
      </table>
    </div>
  );
};

export default User;
