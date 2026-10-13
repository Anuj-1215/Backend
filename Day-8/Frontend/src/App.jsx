import { useState, useEffect } from "react"
import axios from 'axios'

const App = () => {

  const [notes, setNotes] = useState([])

  function fetchNotes(){
    axios.get('http://localhost:3000/api/notes').
    then((res)=>{
    setNotes(res.data.notes)
  })
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function submitHandler(e){
    e.preventDefault() 
    
    axios.post("http://localhost:3000/api/notes",{
      title: title,
      description: description
    })
    .then(res => {
      console.log(res.data);
      fetchNotes()      
    })

    setTitle('')
    setDescription('')
  }

  function handleDeleteNote(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    
    .then(res => {
      console.log(res.data);

      fetchNotes()
      
    })
  }

  return (
    <div>

      <form className="note-create-form" onSubmit={submitHandler}>
        <input name="Title" type="text" placeholder="Enter Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input name="Description" type="text" placeholder="Enter Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button>Create Note</button>
      </form>

      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
              <h1> {note.title} </h1>
              <p> {note.description} </p>
              <button onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
