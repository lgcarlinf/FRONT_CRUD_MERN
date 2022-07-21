import { useState, useEffect } from "react";
import axios from "axios";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import CreateTodoButton from "./components/CreateTodoButton";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ModalCreate from "./components/ModalCreate";

function App() {
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [newNote, setNewNote] = useState({ name: "", comment: "" });
  const [searchInput, setSearchInput] = useState("");

  const completeNotes = notes && notes.filter((note) => !!note.complete).length;

  const getNotes = async () => {
    const { data } = await axios(import.meta.env.VITE_API_URL);
    setNotes(data.items);
    setLoading(false);
  };

  const postNotes = async () => {
    try {
      const data = newNote;
      await axios.post(import.meta.env.VITE_API_URL, data);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (id, data) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/${id}`, data);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  let searchNotes = [];
  if (searchInput.length === 0) {
    searchNotes = notes;
  } else {
    searchNotes = notes.filter((note) => {
      const comment = note.comment.toLowerCase();
      const search = searchInput.toLowerCase();
      return comment.includes(search);
    });
  }

  const completeNote = (id) => {
    const noteUpdate = notes.find((note) => note._id == id);
    noteUpdate.complete = true;
    updateNote(id, noteUpdate);
  };

  useEffect(() => {
    setLoading(!loading);
    getNotes();
  }, []);

  return (
    <>
      <div className=" relative container-general h-[100vh] flex flex-col items-center justify-between font-['Poppins'] w-full">
        <header
          className="w-full md:w-3/4 max-w-2xl bg-[#172a57] h-[40%]  flex flex-col items-center justify-evenly  rounded-b-[50px]"
          style={{
            boxShadow: "0 3px 8px rgb(0 0 0 / 24%)",
            transition: "all .3s",
          }}
        >
          <h1 className="tex text-5xl font-bold text-white">To-do App</h1>
          <TodoCounter notes={notes} completeNotes={completeNotes} />
          <TodoSearch
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </header>

        <section className="h-[55%] w-[90%] md:w-2/3 max-w-2xl d-flex flex-col items-center overflow-y-scroll px-4">
          {loading ? (
            <Loader />
          ) : Object.keys(searchNotes).length === 0 ? (
            <h3 className="my-4 text-center text-white">
              Crea tu primera nota
            </h3>
          ) : (
            <TodoList
              setNotes={setNotes}
              notes={searchNotes}
              deleteNote={deleteNote}
              completeNote={completeNote}
            />
          )}
        </section>
        <CreateTodoButton setActive={setActive} />
        <Footer />
        {active && (
          <ModalCreate
            setActive={setActive}
            setNewNote={setNewNote}
            newNote={newNote}
            postNotes={postNotes}
            deleteNote={deleteNote}
          />
        )}
      </div>
    </>
  );
}

export default App;
