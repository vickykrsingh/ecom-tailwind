import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    start:1,
    end:1
}


const pageSlice = createSlice({
    name:"page",
    initialState,
    reducers:{
        setPage:(state,action)=>{
            state.start=action.payload.start,
            state.end=action.payload.end
        }
    }
})


export default pageSlice.reducer
export const {setPage} = pageSlice.actions