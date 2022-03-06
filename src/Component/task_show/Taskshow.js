import React from 'react'

const Taskshow = (props) => {
  const deleteTask=()=>{
    props.onDelete(props.id);
  }
  return (
    <div>
      <center>
        <h1>{props.taskName}</h1>
        <h3>{props.comments} <button onClick={deleteTask}>X</button></h3>
      </center>
    </div>
  )
}

export default Taskshow