import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ notes, deleteNote, completeNote }) => {
  return (
    <div>
      {notes &&
        notes.map((note) => (
          <TodoItem
            key={note._id}
            note={note}
            deleteNote={deleteNote}
            completeNote={completeNote}
          />
        ))}
    </div>
  );
};

export default TodoList;
