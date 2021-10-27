import {combineReducers} from 'redux'
import comReducers from './reducer'
export default combineReducers({
    entities: comReducers
})