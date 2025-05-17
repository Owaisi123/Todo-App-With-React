import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Pages/Todo";
import ShowTodos from "./Pages/Cards";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/show" element={<ShowTodos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
