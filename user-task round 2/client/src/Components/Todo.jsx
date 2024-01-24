import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css"
const Todo = ({ userId }) => {
  const params = useParams();
  const id = params.id;
  const [tasks, setTask] = useState([]);
  const [users, setUsers] = useState([]);
  const callApi = async () => {
    const response = await fetch(`http://localhost:8000/userid/${id}`);
    const data = await response.json();
    console.log(data.todo);
    console.log(data);
    setTask(data.todo);
    setUsers(data);
  };
  useEffect(() => {
    callApi();
  }, userId);
  return (
    <Fragment>
      <header>
        <h1>{users.id}</h1>
        <h1>{users.name}</h1>
      </header>

      <table>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
        </thead>
        <tbody>
        {
            tasks.map((task)=>{
                return(
                    <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.completed ? "true" : "false"}</td>
                    </tr>
                );
            })
        }
        </tbody>
      </table>
    </Fragment>
  );
};

export default Todo;
