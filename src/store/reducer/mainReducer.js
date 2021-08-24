import { combineReducers } from "redux";
import productListReducer from './productListReducer'
import productDetailsReducer from './productDetailsReducer'

 const mainReducer=combineReducers({
    productListReducer,
    productDetailsReducer
})

export default mainReducer