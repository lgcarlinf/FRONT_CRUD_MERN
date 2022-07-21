import React from "react";

const TodoCounter = ({ notes }) => {
  const complete = notes && notes.filter((note) => note.complete);

  return (
    <div>
      <h2 className="text-[#7b91cf] text-2xl font-extrabold">
        has completado {complete.length} de {notes.length} Tareas
      </h2>
    </div>
  );
};

export default TodoCounter;
