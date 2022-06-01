import React from 'react'
import { useNavigate,useParams,useLocation } from 'react-router-dom';

const LastBook = (props) => {

  const navigate = useNavigate()

  const toLastBook = (link)=>{
      navigate(`/book/${link}`)
  }

  
  return (
    <div className='lastBook' onClick={()=> toLastBook(props.lastBookLink)}>
        <div className='col start'>
            <div className='headLine normal'>
                <h2>Last book</h2>
            </div>
            <div className='row'>
                <p className='properties small bold'>{props.lastBook}</p>
                <p className='properties small bold'>{props.lastDate.getHours()}:{props.lastDate.getMinutes()}</p>
            </div>
        </div>
    </div>
  )
}

export default LastBook