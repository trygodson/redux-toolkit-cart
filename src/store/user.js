import {createSlice} from '@reduxjs/toolkit'
let userId = 0

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers:{
        addUser: (state, action)=>{
            state.push({
                id: ++userId,
                name: action.payload.name
            })
        }
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer