import React from 'react'
import { Link } from "react-router-dom";

const UnderNav = () => {
  return (
    <div className='underNav'>
      <Link to="/notebooks/"><i className="fa-solid fa-note-sticky underIco gray"></i></Link>
      <Link to="/books/"><i className="fa-solid fa-book-open underIco gray"></i></Link>
      <Link to="/home/"><i className="fa-solid fa-house underIco dark"></i></Link>
      <Link to="/tests/"><i className="fa-solid fa-pen-to-square underIco gray"></i></Link>
      <Link to="/timetable/"><i className="fa-solid fa-calendar underIco gray"></i></Link>
    </div>
  )
}

export default UnderNav