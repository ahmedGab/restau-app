import React from 'react'
import {combineReducers} from 'redux'
import { GET_ALL_FOODS ,GET_ALL_USERS,GET_NAME} from '../actions/types'

const initState=[]
const usersState=[]
const nameState="logout"
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
// const addTOfoodList=(state=initState,action)=>{
//     if(action.type===ADD_FOODS)
//     return action.payload
//     return state
    
// }
export default combineReducers({
    foods:foodsReducer,
    users:usersReducer,
    name:nameReducer
    // addfoods:addTOfoodList
})
