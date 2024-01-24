import {  Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
