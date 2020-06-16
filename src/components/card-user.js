import React,{ useState, Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {AddAnOrder,editAdd} from '../apis/json-server'
import { connect } from 'react-redux'
import {  Link } from 'react-router-dom'
import Order from './listorder'


let z
class CardExampleGroups extends Component {
state={click:false}
addquantity=()=>{
  let a=this.props.el.added
  a=true

}


  render(){
    let b=window.location.href[window.location.href.length-1]
z=this.props.users.map(el=>el.id)[b-1]
    return (
      <div className="c">
  <Card.Group>
    <Card >
      <Card.Content>
     
      <div class="ui move up reveal">
  <div class="visible content imgCard">
    <img src={this.props.el.image} class="ui  image imgCard"/>
  </div>
  <div class="hidden content">
    <img src="https://www.lorient-express.com/wp-content/uploads/2018/08/Pizzas01-Avatar.png" class="ui imgCard  image"/>
  </div>
</div>
    
      
        <Card.Header>{this.props.el.title}</Card.Header>
        <Card.Meta>{this.props.el.price}</Card.Meta>
        <Card.Description>
        Sauce blanche, Fromage, Viande kebab, oeuf, cheddar.
        </Card.Description>
      </Card.Content>
     
           <Card.Content extra>
          {this.props.el.added==true ?<Order />:  <button onClick={()=>{this.props.add(this.props.el.title,this.props.el.price,this.props.el.image,this.props.el.id,z);this.props.editA(this.props.el.id,true)}} className="ui teal button">Commandez</button>
          }
          </Card.Content>
      
    </Card>
    </Card.Group>
    </div>

    )}}
const mapStateToProps = (state) =>( {

  users:state.users,
  orders:state.orders

})

const mapDispatchToProps = (dispatch) => ({
  add:(data1,data2,data3,data4,data5) => dispatch(AddAnOrder(data1,data2,data3,data4,data5)),
  editA:(id,data) =>dispatch(editAdd(id,data))

})

export default connect(mapStateToProps,mapDispatchToProps) (CardExampleGroups)
