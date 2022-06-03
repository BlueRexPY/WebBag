import React, { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';


const Book = (props) => {
    const [link, setLink] = useState("")
    const params = useParams()
    useEffect(() => {
        setLink(params.link)
    },[]);

  return (
    <div className='bookPage'>
    <iframe className='book' src={`https://drive.google.com/file/d/${link}/preview`} width="400" height="550" allow="autoplay"></iframe>
    </div>
  )
}

export default Book