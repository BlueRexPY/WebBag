import React from 'react'
import { useNavigate} from 'react-router-dom';

const FinishTest = (props) => {
  const navigate = useNavigate()
  return (
    <div className='col'>
    <div className='col normal'>You scored {props.lastGrade} points</div>
    <div className='col normal gradient2 finishButton' onClick={() => {navigate(`/home`)}}>Сonfirm</div>
    </div>
  )
}

export default FinishTest