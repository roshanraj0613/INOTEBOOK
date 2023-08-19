import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const Addnote = (props) => {

    const context  = useContext(noteContext);
    const{addnote} = context;

    const [note,setNote] = useState({title:"",description:"",tag:""})
    const handlesubmit = (e)=>{
        e.preventDefault();
        addnote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
        props.showalert("Note added successsfully","success")

    }

   const onchange = (e)=>{
    setNote({...note ,[e.target.name]: e.target.value} )
   } 
  return (
    <div>
       <div className="container my-2">

        <div className='mb-4'>
      <h1>Add a New Book</h1>
      <p>Add a new book in your info</p>

        </div>
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Book Title</label>
          <input type="text" className="form-control" id="title" name ="title"aria-describedby="emailHelp"value={note.title}onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description"value={note.description} onChange={onchange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Author</label>
          <input type="text" className="form-control" id="tag" name="tag" value={note.tag}onChange={onchange}/>
        </div>
         
        <button disabled={note.title.length<4 || note.description.length<4}  type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Addnote
