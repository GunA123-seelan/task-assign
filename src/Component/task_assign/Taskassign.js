import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { TextareaAutosize } from '@material-ui/core';
import './Taskassign.css'
const getStorageItem=()=>{
  const str=localStorage.getItem("Tasks");
  if(str){
    return JSON.parse(str);
  }else{
    return [];
  }
}
const Taskassign = (props) => {
  const [storage,setStorage]=useState(getStorageItem());
  const [data, setData] = useState({ taskName: '', details: '' });
  const [show, setShow] = useState(false);

  const { taskName, details } = data;
  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

  }
  console.log(data)
  const assignTask = (e) => {
    // e.preventDefault();
    setStorage([...storage,data])
    props.onAdd(data);
    setData({
      taskName: '',
      details: '',
    })
  }

  useEffect(()=>{
    localStorage.setItem("Tasks",JSON.stringify(storage))
  },[storage]);

  const showTextArea = () => {
    setShow(true);
  }
  return (
    <div className='container'>
      <center>
        <h1 className='title'>Task Asigner</h1>
        <p className='para'>Having a list of everything you need to do written down in one place means you shouldn't forget anything important. By prioritising the tasks in the list you plan the task and what tasks you can leave until a little later</p>
        <div className='sub-container fields'>

          <TextField autoComplete='off'
            type="textbox"
            className='task-assign' fullWidth id="outlined-basic" label="Task Name" variant="outlined" placeholder='task name'
            name="taskName"
            value={taskName}
            onChange={change}
            onClick={showTextArea}
          />
        </div>
        {
          show ?
            <div>
              <div className='fields'>
                <TextareaAutosize aria-label="minimum height" minRows={5} placeholder="add task details"
                  className='task-assign'
                  name="details"
                  value={details}
                  onChange={change}
                />
              </div>
              <div className='fields'>
                <Button className='submit-btn' variant="contained" color="secondary"
                  onClick={assignTask}
                >
                  Submit
                </Button>
              </div>
            </div>
               : ''
        }
      </center>
    </div>
  )
}

export default Taskassign