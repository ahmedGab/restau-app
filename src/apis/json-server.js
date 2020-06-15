import {getAllProducts,getAllUsers,getOrders} from "../actions"
import axios from "axios"
export function getFoodsFromApi(){
    return (dispatch)=>
    axios.get("http://localhost:3004/foods").then(rep=>{
        dispatch(getAllProducts(rep.data))
        })

}

export function AddFoodsInApi(data1,data2,data3){
    return ()=>
     axios.post("http://localhost:3004/foods",{title:data1,image:data2,price:data3}).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function DeleteFoodsInApi(id){
    return ()=>
     axios.delete(`http://localhost:3004/foods/${id}`).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}

export function EditFoodsInApi(id,data1,data2,data3){
    return ()=>
     axios.put(`http://localhost:3004/foods/${id}`,{title:data1,image:data2,price:data3}).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
/*
export const getFoodsFromApi=()=>async dispatch =>{
    const reponse=await axios.get("http://localhost:3004/posts")
 dispatch({type:GET_ALL_FOODS,payload:reponse})
        }

*/

export function getpersonFromApi(){
    return (dispatch)=>
    axios.get("http://localhost:3004/persons").then(rep=>{
        dispatch(getAllUsers(rep.data))
        })

}





export function editActiveUsersInApi(id,data1){
    return ()=> 
     axios.patch(`http://localhost:3004/persons/${id}`,{status:data1}).then(rep=>{
        
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function AddAnOrder(data1,data2,data3,data4){
    return ()=>
     axios.post("http://localhost:3004/order",{title:data1,price:data2,image:data3,user:data4,quantity:1}).then(rep=>{
        
        console.log(rep.data)
        window.location.reload()

        }).catch(err=>console.log(err)) 

}
export function DeleteorderInApi(id){
    return ()=>
     axios.delete(`http://localhost:3004/order/${id}`).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}

export function GetfromOrder(){
    return (dispatch)=>
     axios.get("http://localhost:3004/order").then(rep=>{
        dispatch(getOrders(rep.data))
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}
export function AddUsersInApi(data1,data2,data3){
    return ()=>
     axios.post("http://localhost:3004/persons",{name:data1,gmail:data2,password:data3,role:"user"}).then(rep=>{
        
        window.location.reload()
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}

export function IncrementQuantyyInApi(id,data1){
    return ()=> 
     axios.patch(`http://localhost:3004/order/${id}`,{quantity:data1}).then(rep=>{
       
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}

export function DecrementQuantyyInApi(id,data1){
    return ()=> 
     axios.patch(`http://localhost:3004/order/${id}`,{quantiy:data1}).then(rep=>{
       
        console.log(rep.data)
        }).catch(err=>console.log(err)) 

}