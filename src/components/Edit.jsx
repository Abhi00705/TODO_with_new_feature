import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, flag } from '../Helper/Slice';

const Edit = ({id}) => {
    const dispatch = useDispatch();
    const task = useSelector((state)=>state.todoReducer.todo);
    const ele = task.find((item)=>item.id===id);
    const [value, setValue] = useState(ele?.data);
  return (
    <div className='absolute right-5'>
        <input 
            type="text" 
            value={value} 
            onChange={(e)=>setValue(e.target.value)} 
            className='border-1 border-black'
        />
        <button 
            className='bg-green-400 p-1 border-1 border-green-950'
            onClick={()=>{
                dispatch(updateTask({id: id, data: value}));
                dispatch(flag(false));
            }}
        >done</button>
    </div>
  )
}

export default Edit;