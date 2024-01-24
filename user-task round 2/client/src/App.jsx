import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Table from "./Components/Table";
import Todo from "./Components/Todo";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route path="/:id" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
