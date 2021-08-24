import { ActionType } from "../actionTypes"
import { productListAction } from "./productListAction"
import axios from 'axios';


export const productDetailsAction=(product)=>{
    return{
        type:ActionType.UPDATE_CURRENT_PRODUCT,
        payload:product
    }
}

export const requestProdctDetails=(id)=>{
    return async (dispatch)=>{
        const response= await axios.get('https://fakestoreapi.com/products/'+id)
        dispatch(productDetailsAction(response.data))
        //.then(
        //     response => {
        //       console.log(response.data, '===response single    ')
        //       //setSingleProduct(response.data)
        //       dispatch(productDetailsAction(response.data))
        //       //toggleLoader(false);
        //     }).catch(
        //     );
    }
}