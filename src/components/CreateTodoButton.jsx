import React from "react";

const CreateTodoButton = ({ setActive }) => {
  const handleClick = () => {
    setActive((e) => !e);
  };

  return (
    <div>
      <button
        className="absolute border-white border-4 text-white rounded-full w-14 h-14 text-xl hover:text-green-600 hover:border-green-600 font-bold md:bottom-6 right-6 bottom-16 cursor-pointer"
        style={{ transition: "all .3s" }}
        onClick={handleClick}
      >
        +
      </button>
    </div>
  );
};

export default CreateTodoButton;
