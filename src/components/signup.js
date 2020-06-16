import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {  Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AddUsersInApi  } from "../apis/json-server";


class SignForm extends Component {
    handleChangeUnput=(e)=>{
        this.setState({[e.target.name]:e.target.value})
            }
    render(){
        return(
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='https://www.7-eleven.com/assets/img/7rewards/logged-out/join-rewards.png' /> Inscrivez vous
      </Header>
      <Form size='large'>
        <Segment stacked>
        <Form.Input onChange={this.handleChangeUnput} name="name" fluid icon='user' iconPosition='left' placeholder='name' />

          <Form.Input onChange={this.handleChangeUnput} name="mail" fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
          onChange={this.handleChangeUnput}
          name="pass"
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
<Link to="/login">
          <Button onClick={()=>this.props.add(this.state.name,this.state.mail,this.state.pass)} color='teal' fluid size='large'>
            Inscrivez-vous
          </Button>
          </Link>
        </Segment>
      </Form>
      <Message>
        Si vous avez un compte? <Link to="/login">Se connectez</Link>
      </Message>
    </Grid.Column>
  </Grid>
)}}
const mapDispatchToProps = (dispatch) => ({
    add:(data1,data2,data3) => dispatch(AddUsersInApi(data1,data2,data3))
   

})
export default connect(null,mapDispatchToProps) (SignForm)