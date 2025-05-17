import { useState } from "react";
import { useTodo } from "../Context/TodoContext";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const { addTodo } = useTodo();

  const navigate = useNavigate();

  const handleAdd = () => {
    if (name.trim() !== "" && task.trim() !== "") {
      addTodo(name, task);
      setName("");
      setTask("");
    }
  };

  const handleShow = () => {
    navigate("/show");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700">
          Todo Page
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleAdd}
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition duration-300"
        >
          Add Task
        </button>

        <button
          onClick={handleShow}
          className="w-full text-center text-blue-600 hover:underline"
        >
          Go to Show Page
        </button>
      </div>
    </div>
  );
};

export default Todo;

