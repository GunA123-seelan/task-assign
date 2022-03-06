import React, { useState } from 'react'

const Taskassign = (props) => {
  const [data, setData] = useState({ taskName: '', comments: '' })
  const [show, setShow] = useState(false);
  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const addTask = () => {
    props.onAdd(data)
    setData({
      taskName: '', comments: ''
    })
    console.log(data);
  }
  const showComments = () => {
    setShow(true);
  }

  return (
    <div>
      <center>
        <h1>Daily Task Assign</h1>
        <div>
          <form autoComplete='off'>
          <input type="text"
            placeholder='task name'
            onChange={change}
            onClick={showComments}
            name="taskName"
            value={data.taskName}
          />
          <br />
          {
            show &&
            <div>  
              <textarea
                name="comments"
                placeholder='comment task details'
                onChange={change}
                value={data.comments}
              />
              <br/>
              <button onClick={addTask}>assign</button>
            </div>
          }

          <br />

          </form>
        </div>
      </center>
    </div>
  )
}

export default Taskassign