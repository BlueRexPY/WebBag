import React, { useState,useEffect } from 'react'
import { useNavigate,useParams,useLocation } from 'react-router-dom';


const Notebook = (props) => {
  
  const [notebooksListData, setNotebooksListData] = useState([0,"",""])
  const [notebookId, setNotebookId] = useState(0)
  const navigate = useNavigate()

  const params = useParams()
  useEffect(() => {
    setNotebookId(params.id)
    setNotebooksListData(props.notebooksList)
  },[]);

  const handleChange=(value,index,index2)=>{
    props.updateNotebooks(value,index,index2)
  }

  const toNotebooks = ()=>{
    navigate(`/notebooks/`)
  }


  return (
    <div className='col notebook'>
      <div className='row'>
        <i className="fa-solid fa-arrow-left arrow" onClick={()=>toNotebooks()}></i>
        <input  className='notebookInputTitle' type="text" onChange={(event)=>handleChange(event.target.value,notebookId,1)} value={notebooksListData[notebookId][1]}></input>
      </div>
      
      <textarea  rows="24" cols="33" className='notebookInputText' type="text" onChange={(event)=>handleChange(event.target.value,notebookId,2)} value={notebooksListData[notebookId][2]}></textarea>
    </div>
  )
}

export default Notebook