import React,{ useState } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {DeleteFoodsInApi,getpersonFromApi} from '../apis/json-server'
import { connect } from 'react-redux'
import Editproduct from './editproduct'

const CardExampleGroups = (props) => (
  
  <Card.Group>
    <Card >
      <Card.Content>
     
    
    
    <div class="ui small circular rotate reveal image">
    <Image className=" visible content"
         src= {props.el.image}
        />

  <button></button>
</div>
               
        <Card.Header>{props.el.title}</Card.Header>
        <Card.Meta>{props.el.price}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
     
           
      
    </Card>
    </Card.Group>

)
const mapStateToProps = (state) =>( {

  users:state.users

})

const mapDispatchToProps = (dispatch) => ({
  delete:(id) => dispatch(DeleteFoodsInApi(id)),

})

export default connect(mapStateToProps,mapDispatchToProps) (CardExampleGroups)
