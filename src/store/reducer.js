import {combineReducers} from 'redux'
import bugsReducers from './bugs';
import projectReducers from './projects';
import userReducers from './user'


export  default combineReducers({
    bugs: bugsReducers,
    project: projectReducers,
    users: userReducers
})