import { ActionType } from "../actionTypes"

const intialState={
    productList:[],
  
}

const productListReducer=(state=intialState,action)=>{

    switch(action.type){
        
        case(ActionType.UPDATE_PRODUCT_LIST):
            return {...state,productList:action.payload}
        default:
            return state
    }
    

    // if(action.type==='update_product_list'){
    //     return {...state,productList:action.payload}
    // }
    // else{
    //     return state
    // }
}

export default productListReducer