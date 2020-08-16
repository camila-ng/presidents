import React from "react";
import "./App.scss";
import Presidents from "./components/Presidents";

function App() {
  return (
    <div className="app-container">
      <Presidents/>
    </div>
  );
}

export default App;





// { <button onClick={()=>setIsOpen(!isOpen)}>toggle modal</button>
// {isOpen ? (
//   <div className="modal">
//     <p>Modal is open!</p>
//   </div>
// ) : null} }
