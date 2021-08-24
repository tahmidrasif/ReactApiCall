import { ActionType } from "../actionTypes"

const intialState={
    currentProduct:null,
  
}

const productDetailsReducer=(state=intialState,action)=>{
     
    switch(action.type){
        case(ActionType.UPDATE_CURRENT_PRODUCT):
            return {...state,currentProduct:action.payload}
        default: 
        return state
    }
    // if(action.type==='update_current_product'){
    //     return {...state,currentProduct:action.payload}
    // }
    // else{
    //     return state
    // }
}

export default productDetailsReducer