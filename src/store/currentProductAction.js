import { ActionType } from "./actionTypes"

export const setCurrentProductAction=(product)=>{
    return{
        type:ActionType.UPDATE_CURRENT_PRODUCT,
        payload:product
    }
}