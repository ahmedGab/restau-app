import React from 'react'
import {combineReducers} from 'redux'
import { GET_ALL_FOODS ,GET_ALL_USERS,GET_NAME, GET_ALL_ORDERS,DEL_ORDERS,
    GET_TOTAL
    } from '../actions/types'

const initState=[]
const usersState=[]
const nameState="logout"
const orderState=[]
const cartState=false
const foodsReducer=(state=initState,action)=>{
    if(action.type===GET_ALL_FOODS)
    return action.payload
    return state

}
const usersReducer=(state=usersState,action)=>{
    if(action.type===GET_ALL_USERS)
    return action.payload
    return state

}
const nameReducer=(state=nameState,action)=>{
    if(action.type===GET_NAME)
    return action.payload
    return state

}
const orderReducer=(state=orderState,action)=>{
    if(action.type===GET_ALL_ORDERS)
    return action.payload
   
    return state

}
const totalReducer=(state=0,action)=>{
    if(action.type===GET_TOTAL)
    return action.payload
   
    return state

}

    

    

    /*
    //INSIDE HOME COMPONENT
    if(action.type === ADD_ORDERS){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
}
*/
// const addTOfoodList=(state=initState,action)=>{
//     if(action.type===ADD_FOODS)
//     return action.payload
//     return state
    
// }
export default combineReducers({
    foods:foodsReducer,
    users:usersReducer,
    name:nameReducer,
    orders:orderReducer,
    total:totalReducer
    // addfoods:addTOfoodList
})
