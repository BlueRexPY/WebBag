import React, { useState,useEffect } from 'react'
import { useNavigate,useParams,useLocation } from 'react-router-dom';


const CreateNotebook = (props) => {
  
  const [notebooksListData, setNotebooksListData] = useState([0,"",""])
  const [newTitle, setnewTitle] = useState("NewNotebook")
  const navigate = useNavigate()

  useEffect(() => {
    setNotebooksListData(props.notebooksList)
  },[]);
  
  const crateNewNotebook=()=>{
    if (newTitle!=''){

      props.crateNotebook(newTitle,notebooksListData.length)
      navigate(`/notebooks/`)
    }
  }

  const handleChange=(value)=>{
    setnewTitle(value)
  }

  return (
    <div className='col'>
      <input className='createNotebookInputTitle' type="text" onChange={(event)=>handleChange(event.target.value)} value={newTitle}></input>
      <input className='createNotebookInputButton gradient1' type="button" onClick={()=>crateNewNotebook()} value="Create"></input>
    </div>
  )
}

export default CreateNotebook