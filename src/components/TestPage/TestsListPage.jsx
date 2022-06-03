import React, { useState,useEffect } from 'react'
import { useNavigate} from 'react-router-dom';

const TestsListPage = (props) => {
  const [testsListData, setTestsListData] = useState([["",[["",0,0,0,0],["",0,0,0,0],,["",0,0,0,0],,["",0,0,0,0]]]])

  const navigate = useNavigate()

  useEffect(() => {
    setTestsListData(props.testsList)
  },[]);

  const toTest = (index)=>{
    props.setLastGrade(0)
    navigate(`/test/${index}/0`)
  }

  
  const renderItems=(arr)=>{
    return arr.map((item, index) =>{ 
      return(
        <div className={`testsItem gradient${index+1}`} key={index} onClick={()=> toTest(index)}>
          <p>{item[0]}</p>
          <p>{testsListData[index][1].length} questions</p>
        </div>
      )
    })
  }

  return (
    <div className='booksWrapper'>
      {renderItems(testsListData)}
    </div>
  )
}


export default TestsListPage