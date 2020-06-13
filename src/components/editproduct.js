import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import{EditFoodsInApi} from "../apis/json-server"

 class ModalExampleControlled extends Component {
  state = { modalOpen: false,
    title: this.props.el.title,
    image:this.props.el.image,
price:this.props.el.price}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
      })       
      console.log(this.state.title)
    }
    reset=()=>{
      this.setState({title:this.props.el.title})
      this.setState({image:this.props.el.image})
      this.setState({price:this.props.el.price})
        this.refs.title.value=this.state.title
      this.refs.image.value=this.props.el.image
      this.refs.price.value=this.props.el.price
    }
  render() {
    return (
      <Modal
        trigger={<Button inverted color='green' onClick={this.handleOpen}>Modifier</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='edit outline' content='Modifier nourriture' />
        <Modal.Content>
            <div className="inputs">
        <label>titre:</label> <br/>
    <input onChange={this.handleChange} defaultValue={this.props.el.title} type="text" name="title" ref="title" /> <br/><br/>
    <label>image:</label><br/>
    <textarea rows="5" cols="33" onChange={this.handleChange} defaultValue={this.props.el.image} type="text" name="image"  ref="image"/> <br/> <br/>
    <label>prix:</label><br/>
    <input onChange={this.handleChange} defaultValue={this.props.el.price} type="text" name="price" ref="price" /><br/><br/>
    </div>
        </Modal.Content>
        <Modal.Actions>
        <Button color='red' onClick={()=>this.reset(this.state.title,this.state.image,this.state.price) }>
        <Icon name='remove'  /> Reset
      </Button>
          <Button color='green' onClick={()=>this.props.edit(this.props.el.id,this.state.title,this.state.image,this.state.price)} inverted>
Modifier          </Button>

        </Modal.Actions>
      </Modal>
    )
  }
}
   const mapStateToDispatch=(dispatch)=>({
       edit:(id,data1,data2,data3)=>dispatch(EditFoodsInApi(id,data1,data2,data3))
   })

   export default connect(null,mapStateToDispatch)(ModalExampleControlled)


