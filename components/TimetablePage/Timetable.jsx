import React, { useState,useEffect } from 'react'

const Timetable = (props) => {
  const [TimetableList, setTimetableList] = useState([])
  const [timetableTimes, setTimetableTimes] = useState([])
  const [weekday, setWeekday] = useState(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"])

  useEffect(() => {
    setTimetableList(props.timetable.slice(0, 5))
    setTimetableTimes(props.timetableTimes)
  },[]);

  const handleChange=(value,index2,index)=>{
    props.updateTimetable(value,index,index2)
  }

  const renderItems=(arr)=>{
    return arr.map((item, index) =>{ 
      return(
        <div className={`timetable gradient${index+1}`} key={index}>
          <h3 className='timetableTitle'>{weekday[index]} </h3>
          <div className='timetableItem'>
            <input  className='timetableInput' type="text" onChange={(event)=>handleChange(event.target.value,0,index)} value={item[0]}></input>
            <p>{timetableTimes[0][0]}:{timetableTimes[0][1]}</p>
          </div>
          <div className='timetableItem'>
            <input className='timetableInput' type="text" onChange={(event)=>handleChange(event.target.value,1,index)} value={item[1]}></input>
            <p>{timetableTimes[1][0]}:{timetableTimes[1][1]}</p>
          </div>
          <div className='timetableItem'>
            <input  className='timetableInput' type="text" onChange={(event)=>handleChange(event.target.value,2,index)} value={item[2]}></input>
            <p>{timetableTimes[2][0]}:{timetableTimes[2][1]}</p>
          </div>
          <div className='timetableItem'>
            <input  className='timetableInput' type="text" onChange={(event)=>handleChange(event.target.value,3,index)} value={item[3]}></input>
            <p>{timetableTimes[3][0]}:{timetableTimes[3][1]}</p>
          </div>
          <div className='timetableItem'>
            <input  className='timetableInput' type="text" onChange={(event)=>handleChange(event.target.value,4,index)} value={item[4]}></input>
            <p>{timetableTimes[4][0]}:{timetableTimes[4][1]}</p>
          </div>
          <div className='timetableItem'>
            <input  className='timetableInput' type="text" onChange={(event)=>handleChange(event.target.value,5,index)} value={item[5]}></input>
            <p>{timetableTimes[5][0]}:{timetableTimes[5][1]}</p>
          </div>
          <div className='timetableItem'>
            <input  className='timetableInput' type="text" onChange={(event)=>handleChange(event.target.value,6,index)} value={item[6]}></input>
            <p>{timetableTimes[6][0]}:{timetableTimes[6][1]}</p>
          </div>
        </div>
      )
    })
  }


  return (
    <div className='timetablePage'>
      {renderItems(TimetableList)}
    </div>
  )
}

export default Timetable