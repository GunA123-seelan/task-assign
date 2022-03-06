import React,{useState,useEffect} from 'react'
import Taskassign from './Component/task_assign/Taskassign'
import Taskshow from './Component/task_show/Taskshow';

const App = () => {
  const localStore=()=>{
    const res=localStorage.getItem('taskDetails')
    if(res){
      return JSON.parse(res);
    }else{
      return [];
    }
  }
  const [store,setStore]=useState(localStore(0));
  
  const taskAdd=(e)=>{
    setStore([...store,e])
  }
  useEffect(()=>{
    localStorage.setItem('taskDetails',JSON.stringify(store))
  })
  const deleteTask=(id)=>{
    setStore((items)=>{
      return items.filter((_,index)=>{
        return index!==id;
      })
    })
  }
  console.log(store);
  return (
    <div>
      <center>
      <Taskassign onAdd={taskAdd}/>
      {
        store.length>0 ?
        store.map((item,index)=>{
          return (
            <Taskshow 
            key={index} 
            taskName={item.taskName} 
            comments={item.comments} 
            onDelete={deleteTask} 
            id={index}/>
          )
        })
       
        :
        <h1>add task Name</h1>
      }
      </center>
    </div>
  )
}

export default App