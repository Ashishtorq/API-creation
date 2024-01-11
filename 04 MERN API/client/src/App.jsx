import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./Components/Createuser";
import UpdateUser from "./Components/Updateuser";
import User from "./Components/User";
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/CreateUser" element={<CreateUser />}></Route>
          <Route path="/UpdateUser" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;


/*
1. use capital letter for importing file
1. User slash after file name in element router
*/ 