import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import reducers from './enitties';
import {toastFunc, logger} from "../middleware/testFunc";


export default function configureAppStore(){

    const store = configureStore({
        reducer: reducers,
        middleware: [logger,toastFunc]
    })
    return store
}