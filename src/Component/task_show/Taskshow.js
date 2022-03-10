import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './Taskshow.css';
const Taskshow = (props) => {
  const deleteTasks=(e)=>{
    props.onDelete(props.id)
  }
  return (
    <div className='container'>
     <h2 className='showtaskName'>{props.taskName}</h2>
     <h2 className='showDetails'>{props.details} 
       </h2>
      <HighlightOffIcon onClick={deleteTasks}></HighlightOffIcon>
    </div>
  )
}

export default Taskshow