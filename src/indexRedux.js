import configureAppStore from './store/configStore'
import {bugAdded, bugRemoved, bugResolved, assignBugToUser, bugSelector} from "./store/bugs";
import {addProject} from './store/projects'
import  {addUser} from './store/user'

const  store = configureAppStore()
// const unsubscribe =store.subscribe(()=>{
//     console.log('store changed', store.getState())
// })
// store.dispatch(addUser({name: 'Godson'}))
// store.dispatch(addUser({name: 'David'}))
// store.dispatch(bugAdded({description: 'Bug One'}))
// store.dispatch(bugAdded({description: 'Bug Two'}))
// store.dispatch(bugAdded({description: 'Bug Three'}))
// store.dispatch(assignBugToUser({bugId: 1, userId: 1}))
// store.dispatch(bugRemoved(1))
// store.dispatch(bugResolved({id: 0}))
//
// store.dispatch(addProject({description: "this is a new project"}))

// store.dispatch((dispatch, getState)=>{
//     dispatch({type: 'Some', description: ['love', 'like']})
//     console.log(getState())
// })
store.dispatch({
    type: 'error',
    payload: {
        message: 'we Got toasted'
    }
})

const bug = bugSelector(1)(store.getState())

console.log(bug)