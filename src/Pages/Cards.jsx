import React, { useRef } from "react";
import { useTodo } from "../Context/TodoContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ShowTodos = () => {
  const { todos } = useTodo();
  const dragAreaRef = useRef(null);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
        All Tasks (Drag Inside Page Only)
      </h2>

      <div
        ref={dragAreaRef}
        className="relative w-full h-[75vh] border border-dashed border-blue-300 rounded-xl overflow-hidden"
      >
        {todos.length === 0 ? (
          <p className="text-center text-gray-600 mt-10 text-lg">
            No tasks added yet.
          </p>
        ) : (
          todos.map((item, index) => (
            <motion.div
              key={index}
              drag
              dragConstraints={dragAreaRef}
              dragElastic={0.2}
              className="absolute w-72 sm:w-80 bg-white p-4 rounded-xl shadow-md cursor-move"
              initial={{ x: 30 + index * 30, y: 30 + index * 30 }}
              whileDrag={{ scale: 1.05 }}
            >
              <p className="text-base sm:text-lg font-semibold text-gray-800">
                👤 Name: <span className="text-blue-600">{item.name}</span>
              </p>
              <p className="text-base sm:text-lg text-gray-700 mt-2">
                📝 Task: <span className="text-green-600">{item.task}</span>
              </p>
            </motion.div>
          ))
        )}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={handleHome}
          className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition duration-300"
        >
          Back to Add Page
        </button>
      </div>
    </div>
  );
};

export default ShowTodos;

