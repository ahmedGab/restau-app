import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import{AddFoodsInApi} from "../apis/json-server"

class ModalExampleCloseIcon extends Component {
  state={
      a:""
  }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
          })       
    }
    reset=()=>{
        this.refs.title.value=""
      this.refs.image.value=""
      this.refs.price.value=""
    }
    
    render(){
        return (
            
  <Modal trigger={<Button  >Ajouter la nourriture</Button>} closeIcon>
    <Header icon='food' content='nourriture ' />
    <Modal.Content>

        <label>titre:</label>
    <input onChange={this.handleChange} type="text" name="title" ref="title" /> <br/><br/>
    <label>image:</label>
    <textarea rows="5" cols="33" onChange={this.handleChange} type="text" name="image"  ref="image"/> <br/> <br/>
    <label>prix:</label>
    <input onChange={this.handleChange} type="text" name="price" ref="price" /><br/><br/>



    </Modal.Content>
    <Modal.Actions>
      <Button color='red' onClick={this.reset }>
        <Icon name='remove'  /> Reset
      </Button>
      <Button onClick={()=>this.props.add(this.state.title,this.state.image,this.state.price)
        } color='green'>
        <Icon name='checkmark' /> Confirmer
      </Button>
    </Modal.Actions>
  </Modal>
        )}
}

const mapDispatchToProps = (dispatch) => ({
    add:(title,img,price) => dispatch(AddFoodsInApi(title,img,price))
   

})

export default connect(null,mapDispatchToProps) (ModalExampleCloseIcon)