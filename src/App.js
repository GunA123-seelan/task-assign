import React,{useEffect, useState} from 'react'
import Taskassign from './Component/task_assign/Taskassign'
import Taskshow from './Component/task_show/Taskshow'

const getLocalstorageItem=()=>{
const jsonParse=localStorage.getItem('tasks');
if(jsonParse){
  return JSON.parse(jsonParse);
}
else{
  return []
}
}

const App = () => {
 
  const [storage,setStorage]=useState(getLocalstorageItem());
  
  const onAdd=(e)=>{
    setStorage([...storage,e])
  }
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(storage))
  },[storage]);
  
  const onDelete=(id)=>{
    setStorage((item)=>{
      return item.filter((items,index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div>
      <Taskassign onAdd={onAdd}/>
      {
        storage.length>0 ? 
        storage.map((item,index)=>{
          return <Taskshow taskName={item.taskName} details={item.details} onDelete={onDelete} key={index} id={index}/>
        })
        :""
      }
      
    </div>
  )
}

export default App