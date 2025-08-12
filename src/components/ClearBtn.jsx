import React from 'react'
import { useDispatch } from 'react-redux';
import { clearTask } from '../Helper/Slice';

const ClearBtn = () => {
    const dispatch = useDispatch();
    const handleClear = ()=>{
        dispatch(clearTask());
  }
  return (
    <div>
        <button 
            onClick={()=>handleClear()} 
            className='p-2 bg-green-400 border-1 border-green-950 mt-5 mr-[40rem]'
        >clear</button>
    </div>
  )
}

export default ClearBtn