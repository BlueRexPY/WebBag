import React from 'react'

const NextLeson = (props) => {
  return (
    <div>
        <p className='dark small'>Next lesson</p>
    
        <div className='nextLeson'>
            <div className='col start'>
                <div className='headLine normal'>
                    <h2>{props.nextLeson}</h2>
                </div>
                <div className='row'>
                    <p className='properties small bold'>{props.nextLesonTime[0]}:{props.nextLesonTime[1]}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NextLeson