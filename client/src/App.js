import axios from "axios"
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [allNotes, setAllNotes] = useState([])

  const getAllNotes = async()=>{
    console.log("get");
    const {data} =await axios.get("http://localhost:5000/notes")
    setAllNotes(data)
  }

  useEffect(()=>{
    getAllNotes()
  },[])
  return (
    <div className="App   ">
      <div className="app_navbar">
        <Navbar />
      </div>
      <div className="app_continer scrollbar">
        <div>
          <Input  getAllNotes={getAllNotes} />
        </div>
        <div className="app_notes">
          <Notes allNotes={allNotes}  getAllNotes={getAllNotes}/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
