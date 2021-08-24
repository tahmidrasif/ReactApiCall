import {applyMiddleware, createStore} from 'redux'
import myReducer from './reducer'

import mainReducer from './reducer/mainReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const composeEnhancer=composeWithDevTools(applyMiddleware(thunk))

export const store=createStore(mainReducer,composeEnhancer)







