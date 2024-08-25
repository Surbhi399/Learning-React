import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((add) => (
        <Note key={add.key} title={add.title} content={add.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
