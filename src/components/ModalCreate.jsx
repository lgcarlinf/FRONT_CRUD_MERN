import React, { useState } from "react";

const ModalCreate = ({ setActive, setNewNote, newNote, postNotes }) => {
  const handleCancel = () => {
    setNewNote({ name: "", comment: "" });
    setActive((e) => false);
  };

  const handleChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.name !== "" && newNote.comment !== "") {
      postNotes();
      setNewNote({ name: "", comment: "" });
      setActive((e) => false);
    }
  };

  return (
    <div
      className="absolute  top-[25%]  z-10 bg-[#202d4e] h-[300px] border-white px-6 pt-2 max-w-lg w-[90%] rounded-2xl"
      style={{
        boxShadow: "0 3px 8px rgb(0 0 0 / 24%)",
        transition: "all .3s",
      }}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="d-flex flex-col justify-between items-center" /* onSubmit={} */
      >
        <input
          type="text"
          placeholder="Nombre de la nota"
          className="bg-[#010f33] p-2 rounded-lg my-2 w-full text-white outline-none"
          value={newNote.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <textarea
          rows="5"
          className=" bg-[#010f33] text-white w-full block  resize-none p-4 rounded-lg outline-none"
          placeholder="Ingresa la nota ..."
          value={newNote.comment}
          name="comment"
          onChange={(e) => handleChange(e)}
        />
        <div className="flex justify-evenly mt-5 ">
          <button
            className="bg-[#F31260] p-2 rounded-lg text-white"
            style={{ boxShadow: "0 4px 14px 0 #910838" }}
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-lg text-white p-2  bg-[#17C964]"
            style={{ boxShadow: "0 4px 14px 0 #0F9549" }}
          >
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalCreate;
