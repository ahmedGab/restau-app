import {GET_ALL_FOODS,GET_ALL_USERS,GET_NAME} from './types'

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







// function post
// export const AddProducts=(payload)=>({
//     type:ADD_FOODS,
//     payload
   
//    })




