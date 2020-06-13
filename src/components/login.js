import React, { Component } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {getpersonFromApi,editActiveUsersInApi} from "../apis/json-server"
import {getName} from "../actions"

import { Link} from 'react-router-dom'


class FormExampleInverted extends Component {
    componentDidMount(){
        this.props.getusers()
    }
    state={aller:false,role:""}

    handleChangeUnput=(e)=>{
this.setState({[e.target.name]:e.target.value})
console.log(this.state.mail)
    }
    verification=()=>{
let a=this.props.users.map((el,i)=>el.gmail)
let b=this.props.users.map((el,i)=>el.password)
let c=this.props.users.map((el,i)=>el.name)
let d=this.props.users.map(el=>el.id)
let e=this.props.users.map(el=>el.role)
for (let i=0;i<a.length;i++){

        if(this.state.mail===a[i] &&this.state.pass===b[i]   ){


            alert(`bienvenue ${c[i]}`)

 this.setState({aller:true})
 this.props.editstatus(d[i],"connected") 
 this.props.verificat(c[i])
 this.setState({role:e[i]})




            }

        
        if(this.state.mail !==a[i] &&this.state.pass !==b[i]   ){
        alert("email ou mot de passe sont incorrects")
        break
        }
        this.setState({name:c[i]})

    }




    
   
    
    
}
    render(){
       
   
        return (
            <div>
            <Segment inverted>
      
            <Form  onSubmit={(e) => {this.state.aller && this.state.role==="admin" ?window.location.href='/admin':this.state.aller && this.state.role==="user" ?window.location.href='/user':window.location.href='/login';e.preventDefault()}} inverted>
              <Form.Group widths='equal'>
                <Form.Input  onChange={this.handleChangeUnput} fluid label='First name' name="mail" placeholder='First name' />
                <Form.Input onChange={this.handleChangeUnput} fluid label='Last name' name="pass" placeholder='Last name' />
              </Form.Group>
              
              <Button  onClick={()=>{this.verification();               
}} type='submit' >Submit</Button> 
            
        
            
            </Form>
          </Segment> 
  
  </div>
        )
    }
}

const mapStateToProps=(state)=>({
users:state.users,
name:state.name
})
const mapDispatchToProps = (dispatch) => ({
    getusers:()=>dispatch(getpersonFromApi()),
    verificat:(name)=>dispatch(getName(name)),
    editstatus:(id,data2)=>dispatch(editActiveUsersInApi(id,data2))

})
export default  connect(mapStateToProps,mapDispatchToProps)(FormExampleInverted)