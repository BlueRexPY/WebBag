import React, { useState,useEffect } from 'react'
import { useNavigate} from 'react-router-dom';

const NotebooksList = (props) => {

  const [notebooksListData, setNotebooksListData] = useState([0,"",""])

  const navigate = useNavigate()

  useEffect(() => {
    setNotebooksListData(props.notebooksList)
  },[]);

  const updateDate = (id)=>{
    navigate(`/notebook/${id}`)
  }

  const toCreateNotebooks = ()=>{
    navigate(`/createnotebook/`)
  }
  
  const renderItems=(arr)=>{
    return arr.map((item, index) =>{ 
      return(
        <div className={`notebooksItem gradient${index+1}`} key={index} onClick={()=> updateDate(item[0])}>
          <p>{item[1]}</p>
        </div>
      )
    })
  }

  return (
    <div className='booksWrapper'>
      {renderItems(notebooksListData)}
      <div className="notebooksItem createNotebook" onClick={()=> {toCreateNotebooks()}}>
          <p>Create new</p>
        </div>
    </div>
  )
}

export default NotebooksList