import React, { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';

const Test = (props) => {
  const [testsListData, setTestsListData] = useState(props.testsList)

  const [lastGrade, setGrade] = useState(props.lastGrade)

  const [currentTask , setCurrentTask] = useState(0)
  const [testId , setTestId] = useState(0)
  const [task , setTask] = useState(["","","",""])
  const [randomTask , setRandomTask] = useState(["","","",""])
  const [testName , setTestName] = useState("")

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
      setTestsListData(props.testsList)
      setGrade(props.lastGrade)
      setTestId(parseInt(params.testId))
      setCurrentTask(parseInt(params.id))
      setTestName(testsListData[parseInt(params.testId)][0])
      setTask(testsListData[parseInt(params.testId)][1][params.id])
      setRandomTask(testsListData[parseInt(params.testId)][1][params.id].slice(1).sort(()=>Math.random()-0.5))
  },[params.id]);

  const updateTask=(answer)=>{
    if(answer == task[1]){
      props.setLastGrade(lastGrade + 1)
      if(currentTask+1==testsListData[testId][1].length){
        navigate(`/finish`)
      }else{
        navigate(`/test/${testId}/${(currentTask)+1}`)
      }
    }else{
      if(currentTask+1==testsListData[testId][1].length){
        navigate(`/finish`)
      }else{
        navigate(`/test/${testId}/${(currentTask)+1}`)
      }
    }
    console.log(lastGrade)
  }

  const renderItems=()=>{

    return randomTask.map((item, index) =>{ 
      return(
        <div className={`testsItem gradient${index+1}`} key={index} onClick={()=> updateTask(item)}>
          <p>{item}</p>
        </div>
      )
    })
  }
return (
  <div className='taskPage'>
    <div className='col'>
      <p className='normal'>{testName}</p>
      <p className='normal'>{`${parseInt(currentTask)+1}/${task.length-1}`}</p>
    </div>
    <div>
      <p className='big'>{task[0]}</p>

    </div>
    <div className='taskWrapper'>
      {renderItems()}
    </div>
    
    

  </div>
)
}

export default Test