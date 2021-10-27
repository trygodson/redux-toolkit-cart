import {createSlice} from '@reduxjs/toolkit'
let projectId = 0

const projectSlice = createSlice({
    name: 'project',
    initialState: [],
    reducers:{
        addProject: (state, action)=>{
            state.push({
                id: ++projectId,
                description: action.payload.description
            })
        }
    }
})

export const {addProject} = projectSlice.actions
export default projectSlice.reducer