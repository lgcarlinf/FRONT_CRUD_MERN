import { useState, useEffect } from "react";
import { TiDelete, TiInputChecked } from "react-icons/ti";

const TodoItem = ({ note, deleteNote, completeNote }) => {
  const [flag, setFlag] = useState();

  useEffect(() => {
    setFlag(note.complete);
  }, []);

  const handleDelete = (id) => {
    deleteNote(id);
  };

  return (
    <div
      className="relative ribbon d-flex items-center bg-[#0d1931] text-white  p-4 my-4 rounded-lg "
      style={{
        boxShadow: "0 3px 8px rgb(0 0 0 / 24%)",
        transition: "all .3s",
      }}
    >
      <span className="ribbon4">{note.name}</span>
      <span className="flex items-center justify-between">
        <TiInputChecked
          className={`  mx-2 cursor-pointer ${
            note.complete ? "text-green-500" : "text-slate-300"
          }`}
          onClick={(e) => completeNote(note._id)}
        />
        <span className={note.complete ? "line-through" : ""}>
          {note.comment}
        </span>
        <TiDelete
          className=" text-[#F31260] mt-2 mx-2 cursor-pointer"
          onClick={(e) => handleDelete(note._id)}
        />
      </span>
    </div>
  );
};

export default TodoItem;
