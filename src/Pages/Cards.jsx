import React, { useRef } from "react";
import { useTodo } from "../Context/TodoContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ShowTodos = () => {
  const { todos } = useTodo();
  const dragAreaRef = useRef(null); 

  const homeBuuton = useNavigate();

  const handleHome = () => {
    homeBuuton('/')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
        All Tasks (Drag Inside Page Only )
      </h2>

      <div
        ref={dragAreaRef}
        className="relative w-full h-[80vh] border border-dashed border-blue-300 rounded-lg overflow-hidden"
      >
        {todos.length === 0 ? (
          <p className="text-center text-gray-600 mt-10">No tasks added yet.</p>
        ) : (
          todos.map((item, index) => (
            <motion.div
              key={index}
              drag
              dragConstraints={dragAreaRef} 
              dragElastic={0.2}
              className="absolute bg-white p-5 rounded-xl shadow-lg cursor-move"
              initial={{ x: 50 + index * 40, y: 50 + index * 40 }}
              whileDrag={{ scale: 1.05 }}
            >
              <p className="text-lg font-semibold text-gray-800">
                👤 Name: <span className="text-blue-600">{item.name}</span>
              </p>
              <p className="text-lg text-gray-700 mt-2">
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
