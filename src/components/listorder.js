import React, { Component } from 'react'
        import { Button, Icon, Modal } from 'semantic-ui-react'
        import {connect} from "react-redux"
        import {GetfromOrder} from '../apis/json-server'
        import Order from "./order"
        import { Input } from 'semantic-ui-react'


        
        class NestedModal extends Component {
            
          state = { open: false 
           }
        
          open = () => this.setState({ open: true })
          close = () => this.setState({ open: false })
        
          render() {
            const { open } = this.state
            return (
              <Modal
                open={open}
                onOpen={this.open}
                onClose={this.close}
                size='small'
                trigger={
                  <Button primary icon>
                    Confirmez vos achats <Icon name='right chevron' />
                  </Button>
                }
              >
                <Modal.Header>Modal #2</Modal.Header>
                <Modal.Content>
              <p>On vous souhaite un bon appétit</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button icon='check' content='Fermer' onClick={this.close} />
                </Modal.Actions>
              </Modal>
            )
          }
        }
        
        class ModalExampleMultiple extends Component {
            componentDidMount(){
                this.props.get()
              }
 state={
   datas: this.props.orders,
   t:this.props.total 
 }
 

             
            render(){
                return (
            
          <Modal trigger={ <Button inverted color='green' animated='vertical'>
          <Button.Content hidden><i className="eye icon"></i></Button.Content>
          <Button.Content visible>
          <i className="shopping basket icon"></i>
          </Button.Content>
        </Button>}>
            <Modal.Header>Mes commandes</Modal.Header>
            <Input className="total"
    icon='money bill alternate outline icon' 

    iconPosition='left'
    label={{ tag: true, content: 'Totale de prix' }}
    labelPosition='right'
    value={this.props.total +" TND"}
$  />

            <Modal.Content image>
                
              <div className='image'>
                <Icon name='right arrow' />
              </div>
              <Modal.Description>
              <div class="ui three column grid ">
            {this.props.orders.map( el=>
             <Order key={el.id}  el={el}/>)
            }
            </div>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <NestedModal />
            </Modal.Actions>
          </Modal>
                 ) }}
        const mapStateToProps=(state)=>({
      orders:state.orders  ,
    total:state.total      })

      const mapDispatchToProps = (dispatch) => ({
        get: () => dispatch(GetfromOrder()),
        


     
    
    })
        export default connect(mapStateToProps,mapDispatchToProps)(ModalExampleMultiple)
        


