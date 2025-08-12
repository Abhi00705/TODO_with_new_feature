import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../Helper/Slice';
import Task from './Task';


const Container = () => {
    const [value, setValue] = useState(" "); 
    const dispatch = useDispatch();
  return (
    <>
      <div className=' w-[30rem] h-[3rem] mt-[6rem] border-1 border-black bg-green-200 p-2'>
        
        <div className='flex items-center justify-center gap-[1rem] w-full h-full'>
           
            <input 
                className='bg-white w-[70%] h-[2rem] border-2 border-black'
                type="text"
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}
            />
            <button 
              className='w-[10rem] h-[2rem] bg-gray-700 text-white font-light text-xl'
              onClick={()=>{
                dispatch(addTask(value));
                setValue("");
              }}
            >
            add</button>
        </div>

    </div>

    <Task/>
    
    </>
  )
}

export default Container;