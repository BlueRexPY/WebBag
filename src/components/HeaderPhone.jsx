import React from 'react'

const HeaderPhone=(props) => {
  return (
    <div className='headerPhone'>
        <div>
            <p>{props.date.slice(0, 5)}</p>
        </div>
        <div className='headerPhoneRight'>
            <i className="fa-solid fa-signal"></i>
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-battery-full"></i>
        </div>
    </div>
  )
}
export default HeaderPhone