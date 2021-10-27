import {createAction, createReducer, createSlice} from '@reduxjs/toolkit';
import {createSelector} from "selector";
let bugId = 0;

//Actions Types

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers:{
        assignBugToUser: (bug, action)=>{
            const bugId = action.payload.bugId
            const userId = action.payload.userId
            const index = bug.findIndex(bug => bug.id !== bugId)
            bug[index].userId = userId
        },

        bugAdded: (bug, action)=>{
            bug.push({
                id: bugId++,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (bug, action)=>{
            const index = bug.findIndex(state => state.id === action.payload.id)
            bug[index].resolved = true
        },
        bugRemoved: (bugState, action)=>{
            bugState.filter(bug => bug.id !== action.payload.id)
        }
    }
})
export const {bugAdded, bugRemoved,bugResolved, assignBugToUser} = slice.actions
export default slice.reducer

export const bugSelector = (userId)=>(
    createSelector(
        (state)   => state.entities.bugs,
        bugs => bugs.filter(bug => bug.userId === userId )
    )
)



