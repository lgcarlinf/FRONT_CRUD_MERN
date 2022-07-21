import React from "react";

const TodoSearch = ({ searchInput, setSearchInput }) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="w-full flex justify-center ">
      {" "}
      <input
        style={{ boxShadow: "0 3px 8px rgb(0 0 0 / 24%)" }}
        className="w-5/6 p-3 rounded-md bg-[#010f33] text-white text-center"
        type="text"
        placeholder="Buscar Tarea"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default TodoSearch;
