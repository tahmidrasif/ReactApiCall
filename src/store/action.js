export const setProductListAction = (productList) => {

    return {
        type: "update_product_list",
        payload: productList
    }
}
//This is same as return function
// export const setProductListAction=(productList)=>({

//     type:"update_product_list",
//     payload: productList

// });