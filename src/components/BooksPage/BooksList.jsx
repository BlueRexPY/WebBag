import React, { useState,useEffect } from 'react'
import UnderNav from '../UnderNav';
import { useNavigate,useParams,useLocation } from 'react-router-dom';

const BooksList = (props) => {

    const [ListData, setListData] = useState(["",""])

    useEffect(() => {
        setListData(props.booksListData)
    },[]);

    const navigate = useNavigate()

    const updateDate = (name,link)=>{
        navigate(`/book/${link}`)
        props.setNewLastBookTime(name,link)
    }

    const renderItems=(arr)=>{
        return arr.map((item, index) =>{ 
          return(
            <div className={`booksItem gradient${index+1}`} key={index} onClick={()=> updateDate(item[0],item[1])}>
              <p>{item[0]}</p>
            </div>
          )
        })
      }

    return (
    <div className='booksWrapper'>
        {renderItems(ListData)}
    </div>
  )
}

export default BooksList