
const intialState={
    productList:[],
    currentProduct:null
}

const myReducer=(state=intialState,action)=>{
     
    if(action.type==='update_product_list'){
        return {...state,productList:action.payload}
    }
    if(action.type==='update_current_product'){
        return {...state,currentProduct:action.payload}
    }
    else{
        return state
    }
}

export default myReducer