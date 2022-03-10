import React,{useState} from 'react'
import Taskassign from './Component/task_assign/Taskassign'
import Taskshow from './Component/task_show/Taskshow'


const App = () => {
 
  const [store,setStore]=useState([]);
  
  const onAdd=(e)=>{
    setStore([...store,e])
  }

 

  const onDelete=(id)=>{
    setStore((item)=>{
      return item.filter((items,index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div>
      <Taskassign onAdd={onAdd}/>
      {
        store.length>0 ? 
        store.map((item,index)=>{
          return <Taskshow taskName={item.taskName} details={item.details} onDelete={onDelete} key={index} id={index}/>
        })
        :""
      }
      
    </div>
  )
}

export default App