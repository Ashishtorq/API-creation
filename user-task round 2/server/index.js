const express = require("express");
const axios = require("axios");
const cors = require("cors");
const PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/user", async (req, res) => {
  const userInfo = await axios("https://jsonplaceholder.typicode.com/users");
  const userData = userInfo.data;

  let response = [];

  userData.forEach((user) => {
    let userObj = {};
    userObj.id = user.id;
    userObj.name = user.name;
    userObj.username = user.username;
    userObj.email = user.email;
    userObj.phone = user.phone;
    userObj.website = user.website;
    userObj.address = `${user.address.city},${user.address.street} `;
    userObj.company = `${user.company.name},${user.company.bs} `;
    response.push(userObj);
  });
  res.status(200).send(response)
});

app.get("/userid/:id", async (req, res) => {
  const userInfo = await axios("http://localhost:8000/user");
  const userData = userInfo.data;
  const taskInfo = await axios("https://jsonplaceholder.typicode.com/todos");
  const taskData = taskInfo.data;
  const userId = parseInt(req.params.id);
  const user = userData.find((user) => user.id === userId);
  if (!user) res.status(404).send({ message: "No user found" });
  const todos = taskData.filter((task) => task.userId === userId);

  const response = {
    id: user.id,
    name: user.name,
    todo: todos,
  };
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
