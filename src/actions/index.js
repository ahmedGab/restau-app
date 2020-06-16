import {GET_ALL_FOODS,GET_ALL_USERS,GET_NAME,GET_ALL_ORDERS,DEL_ORDERS, GET_TOTAL} from './types'

export const getAllProducts=(payload)=>({
 type:GET_ALL_FOODS,
 payload

})
export const getAllUsers=(payload)=>({
    type:GET_ALL_USERS,
    payload
   
   })

   export const getName=(payload)=>({
    type:GET_NAME,
    payload
   
   })
   export const getOrders=(payload)=>({
    type:GET_ALL_ORDERS,
    payload
   
   })
   export const DelOrders=(payload)=>({
       type:DEL_ORDERS,
       payload
   })
   export const totalOrders=(payload)=>({
    type:GET_TOTAL,
    payload
})







// function post
// export const AddProducts=(payload)=>({
//     type:ADD_FOODS,
//     payload
   
//    })




