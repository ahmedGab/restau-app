import React,{ useState, Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {DeleteFoodsInApi,getpersonFromApi} from '../apis/json-server'
import { connect } from 'react-redux'
import Editproduct from './editproduct'

class CardExampleGroups extends Component {

  render(){
    return (
      <div className="c">
  <Card.Group >
    <Card>
      <Card.Content >
        <Image className="imgCard"
         src= {this.props.el.image}
        />
               
        <Card.Header>{this.props.el.title}</Card.Header>
        <Card.Meta> <strong>{this.props.el.price} TND</strong></Card.Meta>
        <Card.Description>
        Sauce tomate, Fromage, Péppéroni*, Merguez, Jambon*, Champignons       </Card.Description>
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
    </div>
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
