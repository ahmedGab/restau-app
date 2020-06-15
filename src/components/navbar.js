import React, { Component } from 'react'
import { Input, Menu,Button } from 'semantic-ui-react'
import {  Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Order from './listorder'

 class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name } )
  deleteuser=()=>{
    this.setState({user:true})
  }

  render() {
    console.log(this.props.name)
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Link to="/login">
        <Button positive>Positive Button</Button>
        </Link>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Link to="/">
          <Menu.Item
            name={this.props.name }
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
           </Link>
        </Menu.Menu>
       <Order />
      </Menu>
    )
  }
}
const mapStateToProps=(state)=>({
  users:state.users,
  name:state.name
  })
  export default connect(mapStateToProps)(MenuExampleSecondary )