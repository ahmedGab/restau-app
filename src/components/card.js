import React,{ useState, Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {DeleteFoodsInApi,getpersonFromApi} from '../apis/json-server'
import { connect } from 'react-redux'
import Editproduct from './editproduct'

class CardExampleGroups extends Component {

  render(){
    return (
  <Card.Group>
    <Card >
      <Card.Content>
        <Image className="imgCard"
         src= {this.props.el.image}
        />
               
        <Card.Header>{this.props.el.title}</Card.Header>
        <Card.Meta>{this.props.el.price}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
     
           <Card.Content extra>
          <div class="ui buttons">
          <Editproduct el={this.props.el} />
          <div class="or" data-text="ou"></div>  <Button onClick={()=>this.props.delete(this.props.el.id)} inverted color='red'> Supprimer
          </Button>
    </div>
           
          </Card.Content>
      
    </Card>
    </Card.Group>
    )
  }

}
const mapStateToProps = (state) =>( {

  users:state.users

})

const mapDispatchToProps = (dispatch) => ({
  delete:(id) => dispatch(DeleteFoodsInApi(id)),

})

export default connect(mapStateToProps,mapDispatchToProps) (CardExampleGroups)
