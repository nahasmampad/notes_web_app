import React, { useRef, useState } from 'react'
import './Components.css'
import add from '../Icons/plus.svg'
import useClickOutside from '../Helpers/ClickOutside'
import axios from 'axios';
function Input({getAllNotes}) {
  
  const menu = useRef(null);
  const [show, setShow] = useState(false)
  const [note, setNote] = useState("")
  const [title, setTitle] = useState("")
  const addNote=async ()=>{
    const { data } = await axios.post(
      `http://localhost:5000/notes`,{
        title,
        note
      }
     
    );
    getAllNotes()
    console.log(title, note);
    setNote("")
    setTitle("")
    setShow(false)
  }

  useClickOutside(menu, () => {
    setShow(false);
  });
  return (
    // e6ded3
    <div className='Input' ref={menu}>
      {
        show && <div  className=" input_container title ">
        <input type="text" placeholder='Title...' value={title} onChange={(e)=> setTitle(e.target.value)} />
        
      </div>
      }
      <div  onClick={()=>setShow(true)} className="input_container">
        <input type="text" placeholder='Take a note...' value={note} onChange={(e)=>setNote(e.target.value)} />
        <div onClick={addNote}><img src={add} alt="" /></div>
      </div>
    </div>
  )
}

export default Input