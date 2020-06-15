import React,{ useState, Component } from 'react'
import { Button, Card, Image, Message } from 'semantic-ui-react'
import {DeleteFoodsInApi,getpersonFromApi} from '../apis/json-server'
import { connect } from 'react-redux'
import Editproduct from './editproduct'
import Message1 from "./message"

class CardExampleGroups extends Component {
  state={show:false}
   affich=()=>{
  this.setState({show:true})
 
  }
 
  render(){
return (
  <div className="c">
  <Card.Group>
    <Card >
      <Card.Content>
     
    
    
 
    <Image className=" imgCard "
         src= {this.props.el.image}
        />

 
               
        <Card.Header>{this.props.el.title}</Card.Header>
        <Card.Meta>{this.props.el.price}</Card.Meta>
        <Card.Description>
        Sauce blanche, Fromage, Viande kebab, oeuf, cheddar.
        </Card.Description>
      </Card.Content>
     
      <Card.Content extra>
       
      <Message1 />
         

        
          
         </Card.Content>
     
      
    </Card>
    </Card.Group>
    </div>

)}}
const mapStateToProps = (state) =>( {

  users:state.users

})

const mapDispatchToProps = (dispatch) => ({
  delete:(id) => dispatch(DeleteFoodsInApi(id)),

})

export default connect(mapStateToProps,mapDispatchToProps) (CardExampleGroups)
