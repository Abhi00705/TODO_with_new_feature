import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "task",
    initialState:{flag:false, todo:[]},
    reducers: {
        addTask:(state, actions)=>{state.todo.push({id:Date.now(), data:actions.payload})},
        removeTask:(state, actions)=>  {
            return {
                ...state, todo: state.todo.filter((item)=> item.id!==actions.payload)
            }
        },
        clearTask: (state)=>{state.todo.length=0},
        flag:(state, actions)=>{
            return{
                ...state, flag: actions.payload
            }
        },
        updateTask: (state, actions)=>{
            return{
                ...state, todo:state.todo.map((item)=>item.id===actions.payload.id?{...item, data:actions.payload.data}:item)
            }
        }
    }})
export const {addTask, removeTask, clearTask, updateTask, flag}=todoSlice.actions;
export default todoSlice.reducer;
