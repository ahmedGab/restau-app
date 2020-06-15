
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {getpersonFromApi,editActiveUsersInApi} from "../apis/json-server"
import {getName, getAllUsers} from "../actions"
import {connect} from "react-redux"
import {  Link } from 'react-router-dom'


class LoginForm extends Component {
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
console.log(b)
let i=0
for (let i=0;i<a[i].length;i++){
   
        if(this.state.mail===a[i] && this.state.pass===b[i]   ){


            alert(`bienvenue ${c[i]}`)

 this.setState({aller:true})
 this.setState({id:d[i]})

 this.props.editstatus(d[i],"connected") 
 this.props.verificat(c[i])
 this.setState({role:e[i]})
 
            }
          }
        
          

            
            
        
        
}
    render(){
        return (
   
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='https://cdn.iconscout.com/icon/premium/png-512-thumb/user-login-password-1939034-1641558.png' /> 
Connectez-vous à votre compte
      </Header>
      <Form  onSubmit={(e) => {this.state.aller && this.state.role==="admin" ?window.location.href='/admin':this.state.aller && this.state.role==="user" ?window.location.href=`/user/${this.state.id}`:window.location.href='/login' && alert("email ou mot de passe incorrects");e.preventDefault()}} inverted>
        <Segment stacked>
          <Form.Input  onChange={this.handleChangeUnput} fluid label='First name' name="mail" fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
          onChange={this.handleChangeUnput} fluid label='Last name' name="pass" 
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button onClick={()=>{this.verification();               
}} type='submit'  color='teal' fluid size='large'>
            connectez
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to="/signup">Inscrivez-vous</Link>
      </Message>
    </Grid.Column>
  </Grid>
        )}}
        const mapStateToProps=(state)=>({
            users:state.users,
            name:state.name
            })
            const mapDispatchToProps = (dispatch) => ({
                getusers:()=>dispatch(getpersonFromApi()),
                verificat:(name)=>dispatch(getName(name)),
                editstatus:(id,data2)=>dispatch(editActiveUsersInApi(id,data2))
            
            })

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)