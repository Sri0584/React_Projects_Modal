import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <button className="btn" onClick={() => setShowModal(!showModal)}>
        I am Modal
      </button>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
