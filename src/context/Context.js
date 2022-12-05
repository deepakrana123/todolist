import React,{createContext,useContext,useReducer} from 'react'
import {cartReducer,productReducer} from "./Reducer"
import faker from "faker";

const Cart =createContext();
faker.seed(99)


const Context = ({children}) => {
    const product = [...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.random.image(),
        inStock:faker.random.arrayElement([0,3,5,7,9]),
        fastDelivery:faker.datatype.boolean(),
        ratings:faker.random.arrayElement([1,2,3,4,5])
   }));

   const [state , dispatch ] =useReducer(cartReducer,{
         product:product,
         cart:[]
   })
   const [productState , productDispatch ] =useReducer(productReducer,{
    byStock:false,
    byRating:0,
    byFastDelivery:false,
    Searchquery:"",
    sort:""

})
  return (
    <Cart.Provider value={{state,dispatch,productState , productDispatch }}>{children}</Cart.Provider>
  )
}

export default Context;


export const cartState=()=>{
    return useContext(Cart)

}

