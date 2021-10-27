export const toastFunc =  ({dispatch, getState}) => next => action =>{
    if( action.type == 'error'){
        // action(dispatch, getState)
        console.log('toastify', action.payload.message)
    }else{
        next(action)
       
    }
}

// export const testFunc = ({dispatch, getState}) => next => action => {
//     if(typeof action === 'function'){
//         action(dispatch, getState)
//     }else {
//         next(action)
//     }
//}
export const logger = params => state => next => action => {
   console.log('Logging', params)
    next(action)
}

