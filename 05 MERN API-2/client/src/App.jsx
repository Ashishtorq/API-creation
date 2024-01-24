import { Fragment, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Create from "./Components/Create";
import Update from "./Components/Update"
import User from "./Components/User";


function App() {

  return (
  <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/Update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  </Fragment>
  )
}

export default App;
