import React,{ useState, Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {AddAnOrder} from '../apis/json-server'
import { connect } from 'react-redux'
import {  Link } from 'react-router-dom'


class CardExampleGroups extends Component {
state={click:false}
addquantity=()=>{
  this.setState({click:true})
  let q=this.props.orders.map(el=>el.quantity)
  alert(this.props.el.title)
  alert(q)
  if(this.props.el.title==="spagetti")
 q="a"
}


  render(){
   
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
          {this.state.click==false ?
           <button onClick={()=>{this.props.add(this.props.el.title,this.props.el.price,this.props.el.image);this.addquantity()}} className="ui teal button">Commandez</button>:<Link to="/login"><button>consultez votre commande </button> </Link>
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
  add:(data1,data2,data3) => dispatch(AddAnOrder(data1,data2,data3)),

})

export default connect(mapStateToProps,mapDispatchToProps) (CardExampleGroups)
