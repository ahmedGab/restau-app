import React,{ useState } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {DeleteFoodsInApi,getpersonFromApi} from '../apis/json-server'
import { connect } from 'react-redux'
import Editproduct from './editproduct'

const CardExampleGroups = (props) => (
  
  <Card.Group>
    <Card >
      <Card.Content>
     
      <div class="ui move up reveal">
  <div class="visible content imgCard">
    <img src={props.el.image} class="ui  image imgCard"/>
  </div>
  <div class="hidden content">
    <img src="https://www.196flavors.com/wp-content/uploads/2014/07/Tunisia-Tuna-Briks-2.jpg" class="ui small image"/>
  </div>
</div>
    
      
        <Card.Header>{props.el.title}</Card.Header>
        <Card.Meta>{props.el.price}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
     
           <Card.Content extra>
          
           <button  className="ui teal button">Commandez</button>

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
