import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// const makeNotes = (prop) => {
//   return <Note title={prop.title} content={prop.content} Id={prop.key} />;
// };

function App() {
  return (
    <div>
      <Header />
      {/* <Note title = "Title" content = "content is this" id = "3" /> */}
      {notes.map(Note)}
      <Footer />
    </div>
  );
}

export default App;
