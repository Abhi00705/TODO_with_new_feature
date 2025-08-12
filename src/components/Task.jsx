import React, { act, useState } from 'react';
import {addTask, removeTask, clearTask, flag} from "../Helper/Slice";
import { useSelector, useDispatch } from 'react-redux'; 
import Edit from './Edit';

const Task = () => {
  const dispatch = useDispatch();
  const task = useSelector((state)=>state.todoReducer.todo);
  const EditTask = useSelector((state)=>state.todoReducer);
  const [Id, setId] = useState();

  const handleCheck = (e)=>{
    if(e.target.checked){
      e.target.nextSibling.style="text-decoration: line-through;"
    }
    else{
      e.target.nextSibling.style="text-decoration:none;"
    }
  }
  const handleRemove = (id)=>{

    console.log("in handle remove!" + id);
    dispatch(removeTask(id));
  }
  
  
  return (
  <div className='mr-[15rem] flex flex-col gap-2'>
    {task && task.map((item)=>(
      <div className='flex gap-2 items-center justify-between  border-2 border-black min-w-[15rem] p-3' key={item.id}>
        <div className='flex items-center'>
          <input 
            type="checkbox"
            onChange={(e)=>{handleCheck(e)}}
          />
          <p key={item.key} className='px-3 text-left'>{item.data}</p>

        </div>
        <div className='flex gap-5 p-2 min-w-[5rem]'>

          <button 
            onClick={()=>handleRemove(item.id)} 
            className={' px-2 h-[3rem] w-[5rem] text-amber-400 underline hover:text-[16.5px] p-2 '}
          >Remove</button>

          <button 
            className={' px-2 h-[3rem] w-[3rem] text-amber-400 underline hover:text-[16.5px]'} 
            onClick={()=>{dispatch(flag(true)), setId(item.id)}}
          >Edit</button>

        </div>
    </div>
    ))
    }
    
    {console.log("in search of flag : ",EditTask.flag)||EditTask.flag && <Edit id={Id}/>}
  </div>
  )
}

export default Task