import { ActionType } from "../actionTypes"
import axios from 'axios';

export const productListAction = (productList) => {

    return {
        type: ActionType.UPDATE_PRODUCT_LIST,
        payload: productList
    }
}

export const requestProductList=()=>{
    return async(dispatch)=>{
        const response= await axios.get('https://fakestoreapi.com/products')
        console.log(response.data, '===response')
        dispatch(productListAction(response.data))
        // .then(
        // response => {
        //   console.log(response.data, '===response')
        //   //setProductList(response.data)
        //   dispatch(productListAction(response.data))
        //   //toggleLoader(false);
        // }).catch(
        // );
        //dispatch()
        console.log('test')
    }
}