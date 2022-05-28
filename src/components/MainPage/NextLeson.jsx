import React from 'react'

const NextLeson = (props) => {
  return (
    <div>
        <p className='dark small'>Next lesson</p>
    
        <div className='nextLeson'>
            <div className='col start'>
                <div className='headLine normal'>
                    <h2>{props.nextleson}</h2>
                </div>
                <div className='row'>
                    <p className='properties small bold'>{props.lastDate.getHours()}:{props.lastDate.getMinutes()}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NextLeson