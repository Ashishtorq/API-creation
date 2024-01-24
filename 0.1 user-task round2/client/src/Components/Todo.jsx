import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Todo = ({ userId }) => {
  const params = useParams();
  const id = params.id;
  const [tasks, setTask] = useState([]);
  const [users, Setuser] = useState([]);
  useEffect(() => {
    const taskAPI = async () => {
      const taskInfo = await fetch(`http://localhost:8000/userid/${id}`);
      const taskData = await taskInfo.json();
      console.log("UserData", taskData);
      console.log("TaskData", taskData.todo);
      Setuser(taskData);
      setTask(taskData.todo);
    };
    taskAPI();
  }, [userId]);
  return (
    <Fragment>
      <header>
        <h1>{users.id}</h1>
        <h1>{users.name}</h1>
      </header>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.completed ? "true" : "false"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Todo;
